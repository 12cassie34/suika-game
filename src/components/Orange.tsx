import '@pixi/events'
import { FunctionComponent } from 'react'

import { ORANGE } from '../utlis/consts'

import OrangeImage from '../assets/orange.svg';

import FruitSprite from './FruitSprite'

const Orange: FunctionComponent = () => {

    return (
        <FruitSprite
            fruitDiameter={ORANGE.diameter}
            fruitRadius={ORANGE.radius}
            fruitImage={OrangeImage} 
        />
    )
}

export default Orange