import '@pixi/events'
import { FunctionComponent } from 'react'

import { PEAR } from '../utlis/consts'

import PearImage from '../assets/pear.svg';

import FruitSprite from './FruitSprite'

const Pear: FunctionComponent = () => {

    return (
        <FruitSprite
            fruitDiameter={PEAR.diameter}
            fruitRadius={PEAR.radius}
            fruitImage={PearImage} 
        />
    )
}

export default Pear