import '@pixi/events'
import { FunctionComponent } from 'react'

import { MELON } from '../utlis/consts'

import MelonImage from '../assets/melon.svg';

import FruitSprite from './FruitSprite'

const Melon: FunctionComponent = () => {

    return (
        <FruitSprite
            fruitDiameter={MELON.diameter}
            fruitRadius={MELON.radius}
            fruitImage={MelonImage} 
        />
    )
}

export default Melon