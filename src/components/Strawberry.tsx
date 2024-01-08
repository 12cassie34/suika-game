import '@pixi/events'
import { FunctionComponent } from 'react'

import { STRAWBERRY } from '../utlis/consts'

import StrawberryImage from '../assets/strawberry.svg';

import FruitSprite from './FruitSprite'

const Strawberry: FunctionComponent = () => {

    return (
        <FruitSprite
            fruitDiameter={STRAWBERRY.diameter}
            fruitRadius={STRAWBERRY.radius}
            fruitImage={StrawberryImage} 
        />
    )
}

export default Strawberry