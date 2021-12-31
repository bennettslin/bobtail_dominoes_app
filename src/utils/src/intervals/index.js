import intervalPool1 from '../../../assets/svgs/dominoes/pool/intervalPool1'
import intervalPool2 from '../../../assets/svgs/dominoes/pool/intervalPool2'
import intervalPool3 from '../../../assets/svgs/dominoes/pool/intervalPool3'
import intervalPool4 from '../../../assets/svgs/dominoes/pool/intervalPool4'
import intervalPool5 from '../../../assets/svgs/dominoes/pool/intervalPool5'
import intervalPool6 from '../../../assets/svgs/dominoes/pool/intervalPool6'
import intervalX1 from '../../../assets/svgs/dominoes/intervals/intervalX1'
import intervalX2 from '../../../assets/svgs/dominoes/intervals/intervalX2'
import intervalX3 from '../../../assets/svgs/dominoes/intervals/intervalX3'
import intervalX4 from '../../../assets/svgs/dominoes/intervals/intervalX4'
import intervalX5 from '../../../assets/svgs/dominoes/intervals/intervalX5'
import intervalX6 from '../../../assets/svgs/dominoes/intervals/intervalX6'
import intervalX7 from '../../../assets/svgs/dominoes/intervals/intervalX7'
import intervalX8 from '../../../assets/svgs/dominoes/intervals/intervalX8'
import intervalX9 from '../../../assets/svgs/dominoes/intervals/intervalX9'
import intervalX10 from '../../../assets/svgs/dominoes/intervals/intervalX10'
import intervalX11 from '../../../assets/svgs/dominoes/intervals/intervalX11'
import intervalY1 from '../../../assets/svgs/dominoes/intervals/intervalY1'
import intervalY2 from '../../../assets/svgs/dominoes/intervals/intervalY2'
import intervalY3 from '../../../assets/svgs/dominoes/intervals/intervalY3'
import intervalY4 from '../../../assets/svgs/dominoes/intervals/intervalY4'
import intervalY5 from '../../../assets/svgs/dominoes/intervals/intervalY5'
import intervalY6 from '../../../assets/svgs/dominoes/intervals/intervalY6'
import intervalY7 from '../../../assets/svgs/dominoes/intervals/intervalY7'
import intervalY8 from '../../../assets/svgs/dominoes/intervals/intervalY8'
import intervalY9 from '../../../assets/svgs/dominoes/intervals/intervalY9'
import intervalY10 from '../../../assets/svgs/dominoes/intervals/intervalY10'
import intervalY11 from '../../../assets/svgs/dominoes/intervals/intervalY11'
import intervalXY1 from '../../../assets/svgs/dominoes/intervals/intervalXY1'
import intervalXY2 from '../../../assets/svgs/dominoes/intervals/intervalXY2'
import intervalXY3 from '../../../assets/svgs/dominoes/intervals/intervalXY3'
import intervalXY4 from '../../../assets/svgs/dominoes/intervals/intervalXY4'
import intervalXY5 from '../../../assets/svgs/dominoes/intervals/intervalXY5'
import intervalXY6 from '../../../assets/svgs/dominoes/intervals/intervalXY6'
import intervalXY7 from '../../../assets/svgs/dominoes/intervals/intervalXY7'
import intervalXY8 from '../../../assets/svgs/dominoes/intervals/intervalXY8'
import intervalXY9 from '../../../assets/svgs/dominoes/intervals/intervalXY9'
import intervalXY10 from '../../../assets/svgs/dominoes/intervals/intervalXY10'
import intervalXY11 from '../../../assets/svgs/dominoes/intervals/intervalXY11'
import {
    DIRECTION_X,
    DIRECTION_XY,
    DIRECTION_Y,
} from '../../../constants/music/game'
import { OCTAVE_RANGE } from '../../../constants/music/audio'

const INTERVALS = {
    pool: [
        intervalPool1,
        intervalPool2,
        intervalPool3,
        intervalPool4,
        intervalPool5,
        intervalPool6,
    ],
    [DIRECTION_X]: [
        intervalX1,
        intervalX2,
        intervalX3,
        intervalX4,
        intervalX5,
        intervalX6,
        intervalX7,
        intervalX8,
        intervalX9,
        intervalX10,
        intervalX11,
    ],
    [DIRECTION_Y]: [
        intervalY1,
        intervalY2,
        intervalY3,
        intervalY4,
        intervalY5,
        intervalY6,
        intervalY7,
        intervalY8,
        intervalY9,
        intervalY10,
        intervalY11,
    ],
    [DIRECTION_XY]: [
        intervalXY1,
        intervalXY2,
        intervalXY3,
        intervalXY4,
        intervalXY5,
        intervalXY6,
        intervalXY7,
        intervalXY8,
        intervalXY9,
        intervalXY10,
        intervalXY11,
    ],
}

export const getIntervalSrc = ({
    interval,
    orientation = 'pool',
    isPlacementUpsideDown,
}) => (
    INTERVALS[orientation][(
        isPlacementUpsideDown ?
            OCTAVE_RANGE - interval :
            interval
    ) - 1]
)
