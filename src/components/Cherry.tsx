import '@pixi/events'
import { FunctionComponent } from 'react'

import { CHERRY } from '../utlis/consts'

import CherryImage from '../assets/cherry.svg'

import FruitSprite from './FruitSprite'

const Cherry: FunctionComponent = () => {

    return (
        <FruitSprite
            fruitDiameter={CHERRY.diameter}
            fruitRadius={CHERRY.radius}
            fruitImage={CherryImage}
        />
    )
}

export default Cherry