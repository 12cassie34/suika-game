import '@pixi/events'
import { FunctionComponent } from 'react'

import { GRAPES } from '../utlis/consts'

import GrapesImage from '../assets/grapes.svg';

import FruitSprite from './FruitSprite'

const Grapes: FunctionComponent = () => {

    return (
        <FruitSprite
            fruitDiameter={GRAPES.diameter}
            fruitRadius={GRAPES.radius}
            fruitImage={GrapesImage} 
        />
    )
}

export default Grapes