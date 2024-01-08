import '@pixi/events'
import { FunctionComponent } from 'react'

import { PEACH } from '../utlis/consts'

import PeachImage from '../assets/peach.svg'

import FruitSprite from './FruitSprite'

const Peach: FunctionComponent = () => {

    return (
        <FruitSprite
            fruitDiameter={PEACH.diameter}
            fruitRadius={PEACH.radius}
            fruitImage={PeachImage}
        />
    )
}

export default Peach