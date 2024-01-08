import type { InteractionEvent, InteractionData } from '@pixi/interaction'
import type { DisplayObject } from '@pixi/display'
import { FunctionComponent, useMemo, useRef } from "react"
import { Sprite } from '@pixi/react'
import Big from 'big.js'

import useFruitEvents from "../hooks/useFruitEvents"
import { STAGE_HEIGHT, STAGE_WIDTH } from '../utlis/consts'

interface Draggable extends DisplayObject {
    data: InteractionData | null
    dragging: boolean
}


export interface FruitSpriteProps {
    id: string
    x: number
    y: number
    diameter: number
    radius: number
    image: string
    handleSetX: (id: string, x: number) => void
    handleSetY: (id: string, x: number) => void
}

const FruitSprite: FunctionComponent<FruitSpriteProps> = ({ id, x, y, diameter, radius, image, handleSetX, handleSetY }) => {
    const maxBottom = useRef((new Big(STAGE_HEIGHT)).minus(radius).toNumber())
    const maxRight = useRef((new Big(STAGE_WIDTH)).minus(radius).toNumber())
    const isNewSprite = useRef(true)
    // const { onDragStart, onDragEnd, onDragMove } = useFruitEvents({
    //     id: id,
    //     originY: y,
    //     radius: radius,
    //     handleSetX: handleSetX,
    //     handleSetY: handleSetY
    // });
    const onDragStart = (event: InteractionEvent) => {
        if (!isNewSprite.current) {
            return
        }
        const sprite = event.currentTarget as Draggable
        sprite.alpha = 0.5
        sprite.data = event.data
        sprite.dragging = true
        isNewSprite.current = false
    }

    const onDragEnd = (event: InteractionEvent) => {
        if (y >= maxBottom.current) {
            return
        }
        const sprite = event.currentTarget as Draggable
        sprite.alpha = 1
        sprite.dragging = false
        sprite.data = null
        let newY = radius
        const intervaleId = setInterval(() => {
            if (newY < maxBottom.current) {
                handleSetY(id, newY)
                newY = (new Big(newY)).plus(radius).toNumber();
            } else if (newY >= maxBottom.current) {
                handleSetY(id, maxBottom.current)
                clearInterval(intervaleId)
            }
        }, 10)
    }

    const onDragMove = (event: InteractionEvent) => {
        if (y >= maxBottom.current) {
            return
        }
        const sprite = event.currentTarget as Draggable
        if (sprite.dragging) {
            const newPosition = sprite.data!.getLocalPosition(sprite.parent)
            let newX = newPosition.x
            if (newX > maxRight.current) {
                newX = maxRight.current
            } else if (newX < radius) {
                newX = radius
            }
            handleSetX(id, newX)
        }
    }

    return (
        <Sprite
            image={image}
            width={diameter}
            height={diameter}
            x={x}
            y={y}
            anchor={.5}
            interactive
            pointerdown={onDragStart}
            pointerup={onDragEnd}
            pointerupoutside={onDragEnd}
            pointermove={onDragMove}
        />
    )
}

export default FruitSprite