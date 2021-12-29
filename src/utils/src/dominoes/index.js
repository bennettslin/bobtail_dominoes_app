import dominoX from '../../../assets/svgs/dominoes/dominoX'
import dominoY from '../../../assets/svgs/dominoes/dominoY'
import dominoXY from '../../../assets/svgs/dominoes/dominoXY'

import missingDominoX from '../../../assets/svgs/dominoes/missingDominoX'
import missingDominoY from '../../../assets/svgs/dominoes/missingDominoY'
import missingDominoXY from '../../../assets/svgs/dominoes/missingDominoXY'

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

const MISSING_DOMINOES = {
    [DIRECTION_X]: missingDominoX,
    [DIRECTION_Y]: missingDominoY,
    [DIRECTION_XY]: missingDominoXY,
}

export const getDominoSrc = orientation => DOMINOES[orientation]
export const getMissingDominoSrc = orientation => MISSING_DOMINOES[orientation]
