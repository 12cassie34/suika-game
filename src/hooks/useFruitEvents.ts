import type { InteractionEvent, InteractionData } from '@pixi/interaction'
import type { DisplayObject } from '@pixi/display'
import Big from 'big.js'

import { STAGE_WIDTH, STAGE_HEIGHT } from '../utlis/consts'

interface Draggable extends DisplayObject {
    data: InteractionData | null
    dragging: boolean
}

interface UseFruitEventsArgs {
    id: string,
    originY: number
    radius: number
    handleSetX: (id: string, x: number) => void
    handleSetY: (id: string, y: number) => void
} 

const useFruitEvents = ({ originY, radius, id, handleSetX, handleSetY }: UseFruitEventsArgs) => {
    const maxRight = (new Big(STAGE_WIDTH)).minus(radius).toNumber()
    const maxLeft = radius
    const maxBottom = (new Big(STAGE_HEIGHT)).minus(radius).toNumber()

    const onDragStart = (event: InteractionEvent) => {
        if (originY >= maxBottom) {
            return
        }
        const sprite = event.currentTarget as Draggable
        sprite.alpha = 0.5
        sprite.data = event.data
        sprite.dragging = true
    }

    const onDragEnd = (event: InteractionEvent) => {
        if (originY >= maxBottom) {
            return
        }
        const sprite = event.currentTarget as Draggable
        sprite.alpha = 1
        sprite.dragging = false
        sprite.data = null
        let newY = radius
        const intervaleId = setInterval(() => {
            if (newY < maxBottom) {
                handleSetY(id, newY)
                newY = (new Big(newY)).plus(radius).toNumber();
            } else if (newY >= maxBottom) {
                handleSetY(id, maxBottom)
                clearInterval(intervaleId)
            }
        }, 10)
    }

    const onDragMove = (event: InteractionEvent) => {
        if (originY >= maxBottom) {
            return
        }
        const sprite = event.currentTarget as Draggable
        if (sprite.dragging) {
            const newPosition = sprite.data!.getLocalPosition(sprite.parent)
            let newX = newPosition.x
            if (newX > maxRight) {
                newX = maxRight
            } else if (newX < maxLeft) {
                newX = maxLeft
            }
            handleSetX(id, newX)
        }
    }

    return {
        onDragStart,
        onDragEnd,
        onDragMove
    }
}

export default useFruitEvents