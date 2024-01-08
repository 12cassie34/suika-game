import '@pixi/events'
import { FunctionComponent } from 'react'

import { WATERMELON } from '../utlis/consts'

import WatermelonImage from '../assets/watermelon.svg';

import FruitSprite from './FruitSprite'

const WaterMelon: FunctionComponent = () => {

    return (
        <FruitSprite
            fruitDiameter={WATERMELON.diameter}
            fruitRadius={WATERMELON.radius}
            fruitImage={WatermelonImage} 
        />
    )
}

export default WaterMelon