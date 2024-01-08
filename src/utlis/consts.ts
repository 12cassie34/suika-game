import { Fruits } from './types'

import CherryImage from '../assets/cherry.svg'
import StrawberryImage from '../assets/strawberry.svg'
import GrapesImage from '../assets/grapes.svg'
import DekoponImage from '../assets/dekopon.svg'
import OrangeImage from '../assets/orange.svg'
import PearImage from '../assets/pear.svg'
import PeachImage from '../assets/peach.svg'
import PineappleImage from '../assets/pinapple.svg'
import MelonImage from '../assets/melon.svg'
import WatermelonImage from '../assets/watermelon.svg'

import { FruitSpriteProps } from '../components/FruitSprite'

interface FruitData extends Pick<FruitSpriteProps, 'diameter' | 'radius' | 'image'> {}

export const STAGE_WIDTH = 320
export const STAGE_HEIGHT = 640

export const DIAMETER_MAP: Record<string, Fruits> = {
    "30": Fruits.CHERRY,
    "35": Fruits.STRAWBERRY,
    "40": Fruits.GRAPES,
    "45": Fruits.DEKOPON,
    "50": Fruits.ORANGE,
    "55": Fruits.PEAR,
    "60": Fruits.PEACH,
    "65": Fruits.PINEAPPLE,
    "70": Fruits.MELON,
    "75": Fruits.WATERMELON
}

export const CHERRY = {
    radius: 15,
    diameter: 30,
    image: CherryImage
}
export const STRAWBERRY = {
    radius: 17.5,
    diameter: 35,
    image: StrawberryImage
}
export const GRAPES = {
    radius: 20,
    diameter: 40,
    image: GrapesImage
}
export const DEKOPON = {
    radius: 22.5,
    diameter: 45,
    image: DekoponImage
}
export const ORANGE = {
    radius: 25,
    diameter: 50,
    image: OrangeImage
}
export const PEAR = {
    radius: 27.5,
    diameter: 55,
    image: PearImage
}
export const PEACH = {
    radius: 30,
    diameter: 60,
    image: PeachImage
}
export const PINEAPPLE = {
    radius: 32.5,
    diameter: 65,
    image: PineappleImage
}
export const MELON = {
    radius: 35,
    diameter: 70,
    image: MelonImage
}
export const WATERMELON = {
    radius: 37.5,
    diameter: 75,
    image: WatermelonImage
}

export const FRUITS_MAP: Record<Fruits, FruitData> = {
    [Fruits.CHERRY]: CHERRY,
    [Fruits.STRAWBERRY]: STRAWBERRY,
    [Fruits.GRAPES]: GRAPES,
    [Fruits.DEKOPON]: DEKOPON,
    [Fruits.ORANGE]: ORANGE,
    [Fruits.PEAR]: PEAR,
    [Fruits.PEACH]: PEACH,
    [Fruits.PINEAPPLE]: PINEAPPLE,
    [Fruits.MELON]: MELON,
    [Fruits.WATERMELON]: WATERMELON
}