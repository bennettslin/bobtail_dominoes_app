import dominoX from '../../../assets/svgs/dominoes/dominoX'
import dominoY from '../../../assets/svgs/dominoes/dominoY'
import dominoXY from '../../../assets/svgs/dominoes/dominoXY'
import {
    DIRECTION_X,
    DIRECTION_XY,
    DIRECTION_Y,
} from '../../../constants/music/game'

const DOMINOES = {
    [DIRECTION_X]: dominoX,
    [DIRECTION_Y]: dominoY,
    [DIRECTION_XY]: dominoXY,
}

export const getDominoSrc = orientation => DOMINOES[orientation]
