import '@pixi/events'
import { FunctionComponent } from 'react'

import { PINEAPPLE } from '../utlis/consts'

import PineappleImage from '../assets/pineapple.svg';

import FruitSprite from './FruitSprite'

const Pineapple: FunctionComponent = () => {

    return (
        <FruitSprite
            fruitDiameter={PINEAPPLE.diameter}
            fruitRadius={PINEAPPLE.radius}
            fruitImage={PineappleImage} 
        />
    )
}

export default Pineapple