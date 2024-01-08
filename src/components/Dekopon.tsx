import '@pixi/events'
import { FunctionComponent } from 'react'

import { DEKOPON } from '../utlis/consts'

import DekoponImage from '../assets/dekopon.svg';

import FruitSprite from './FruitSprite'

const Dekopon: FunctionComponent = () => {

    return (
        <FruitSprite
            fruitDiameter={DEKOPON.diameter}
            fruitRadius={DEKOPON.radius}
            fruitImage={DekoponImage} 
        />
    )
}

export default Dekopon