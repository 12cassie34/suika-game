import { Stage } from '@pixi/react'
import '@pixi/events'
import { useEffect, useState, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { STAGE_HEIGHT, STAGE_WIDTH, CHERRY, STRAWBERRY, GRAPES, DEKOPON, ORANGE, DIAMETER_MAP, FRUITS_MAP } from '../utlis/consts'
import type { FruitSpriteProps } from './FruitSprite'
import type { Fruits } from '../utlis/types'

import FruitSprite from './FruitSprite'

interface Sprite extends Omit<FruitSpriteProps, 'handleSetX' | 'handleSetY'> { }

interface CheckCollisionProps {
    movingSprite: Sprite
    sprites: Sprite[]
    yPosition: number
}

interface CheckCollisionReturn {
    yCorrection: number | undefined
    fruitType: Fruits | undefined
    replacedSpritesIds: string[] | undefined
}

const checkCollision = ({ movingSprite, sprites, yPosition}: CheckCollisionProps): CheckCollisionReturn | undefined => {
    if (sprites.length && movingSprite.id !== sprites[0].id) {
        const dx = movingSprite.x - sprites[0].x
        const dy = movingSprite.y - sprites[0].y
        const distance = Math.sqrt(dx * dx + dy * dy)
    
        const colliding = distance < movingSprite.radius + sprites[0].radius

        if (colliding) {
            if (movingSprite.diameter === sprites[0].diameter) {
                return {
                    yCorrection: yPosition,
                    fruitType: DIAMETER_MAP[(movingSprite.diameter + 5).toString()],
                    replacedSpritesIds: [movingSprite.id, sprites[0].id]
                }
            }
            return {
                yCorrection: movingSprite.radius + sprites[0].radius,
                fruitType: undefined,
                replacedSpritesIds: undefined
            }
        }
        return checkCollision({
            movingSprite: movingSprite, 
            sprites: sprites.slice(1),
            yPosition
        })
    }
    return undefined
}

const SuikaStage = () => {
    const [sprites, setSprites] = useState<Sprite[]>([{
        ...CHERRY,
        x: STAGE_WIDTH / 2,
        y: CHERRY.radius,
        id: uuidv4()
    }])
    const handleAddSprite = useCallback(() => {
        const random = Math.floor(Math.random() * 5)
        switch (random) {
            case 0:
                return setSprites((prevSprites) => [...prevSprites, {
                    ...CHERRY,
                    x: STAGE_WIDTH / 2,
                    y: CHERRY.radius,
                    id: uuidv4()
                }])
            case 1:
                return setSprites((prevSprites) => [...prevSprites, {
                    ...STRAWBERRY,
                    x: STAGE_WIDTH / 2,
                    y: STRAWBERRY.radius,
                    id: uuidv4()
                }])
            case 2:
                return setSprites((prevSprites) => [...prevSprites, {
                    ...GRAPES,
                    x: STAGE_WIDTH / 2,
                    y: GRAPES.radius,
                    id: uuidv4()
                }])
            case 3:
                return setSprites((prevSprites) => [...prevSprites, {
                    ...DEKOPON,
                    x: STAGE_WIDTH / 2,
                    y: DEKOPON.radius,
                    id: uuidv4()
                }])
            case 4:
                return setSprites((prevSprites) => [...prevSprites, {
                    ...ORANGE,
                    x: STAGE_WIDTH / 2,
                    y: ORANGE.radius,
                    id: uuidv4()
                }])
        }
    }, [])

    const handleSetX = (id: string, x: number) => {
        setSprites((prevSprites) => prevSprites.map((sprite) => {
            if (sprite.id === id) {
                const newSprite = {
                    ...sprite,
                    x
                }
                return newSprite
            }
            
            return sprite
        }))
    }
    const handleSetY = (id: string, y: number) => {
        const movingSprite = sprites.filter(sprite => sprite.id === id)[0]
        const newSprite = {
            ...movingSprite,
            y
        }
        const checkingResult = checkCollision({
            movingSprite: newSprite,
            sprites: sprites,
            yPosition: y
        })
        if (checkingResult?.fruitType && checkingResult?.replacedSpritesIds?.length) {
            const newSprites = sprites.filter(sprite => sprite.id !== checkingResult.replacedSpritesIds[0] && sprite.id !== checkingResult.replacedSpritesIds[1])
            setSprites([...newSprites, {
                id: uuidv4(),
                x: newSprite.x,
                y: y,
                ...FRUITS_MAP[checkingResult?.fruitType],
            }])
        }
        if (!checkingResult || checkingResult?.yCorrection) {
            setSprites((prevSprites) => prevSprites.map((sprite) => {
            if (sprite.id === id) {
                return {
                    ...sprite,
                    y: !checkingResult ? y : (checkingResult.yCorrection || 0)
                }
            }
            
            return sprite
        }))
        }
    }


    useEffect(() => {
        const stage = document.getElementById('stage-container')

        stage?.addEventListener('pointerup', handleAddSprite)

        return () => {
            stage?.removeEventListener('pointerup', handleAddSprite)
        }
    }, [handleAddSprite, sprites])

    return (
        <div className='lg:w-1/2 my-0 mx-auto'>
            <div id="stage-container" className='lg:w-1/2 md:w-8/12 my-0 mx-auto'>
                <Stage
                    height={STAGE_HEIGHT}
                    width={STAGE_WIDTH}
                    options={{
                        background: '#F4ACB7',
                    }}
                >
                    {sprites.map(({ id, x, y, diameter, radius, image }) => {
                        return (
                            <FruitSprite
                                key={id}
                                id={id}
                                x={x}
                                y={y}
                                diameter={diameter}
                                radius={radius}
                                image={image}
                                handleSetX={handleSetX}
                                handleSetY={handleSetY}
                            />
                        )
                    })}
                </Stage>
            </div>
        </div>
    )
}

export default SuikaStage