import intervalPool1 from '../../../assets/svgs/dominoes/intervalPool1'
import intervalPool2 from '../../../assets/svgs/dominoes/intervalPool2'
import intervalPool3 from '../../../assets/svgs/dominoes/intervalPool3'
import intervalPool4 from '../../../assets/svgs/dominoes/intervalPool4'
import intervalPool5 from '../../../assets/svgs/dominoes/intervalPool5'
import intervalPool6 from '../../../assets/svgs/dominoes/intervalPool6'
import intervalX1 from '../../../assets/svgs/dominoes/intervalX1'
import intervalX2 from '../../../assets/svgs/dominoes/intervalX2'
import intervalX3 from '../../../assets/svgs/dominoes/intervalX3'
import intervalX4 from '../../../assets/svgs/dominoes/intervalX4'
import intervalX5 from '../../../assets/svgs/dominoes/intervalX5'
import intervalX6 from '../../../assets/svgs/dominoes/intervalX6'
import intervalX7 from '../../../assets/svgs/dominoes/intervalX7'
import intervalX8 from '../../../assets/svgs/dominoes/intervalX8'
import intervalX9 from '../../../assets/svgs/dominoes/intervalX9'
import intervalX10 from '../../../assets/svgs/dominoes/intervalX10'
import intervalX11 from '../../../assets/svgs/dominoes/intervalX11'
import intervalY1 from '../../../assets/svgs/dominoes/intervalY1'
import intervalY2 from '../../../assets/svgs/dominoes/intervalY2'
import intervalY3 from '../../../assets/svgs/dominoes/intervalY3'
import intervalY4 from '../../../assets/svgs/dominoes/intervalY4'
import intervalY5 from '../../../assets/svgs/dominoes/intervalY5'
import intervalY6 from '../../../assets/svgs/dominoes/intervalY6'
import intervalY7 from '../../../assets/svgs/dominoes/intervalY7'
import intervalY8 from '../../../assets/svgs/dominoes/intervalY8'
import intervalY9 from '../../../assets/svgs/dominoes/intervalY9'
import intervalY10 from '../../../assets/svgs/dominoes/intervalY10'
import intervalY11 from '../../../assets/svgs/dominoes/intervalY11'
import intervalXY1 from '../../../assets/svgs/dominoes/intervalXY1'
import intervalXY2 from '../../../assets/svgs/dominoes/intervalXY2'
import intervalXY3 from '../../../assets/svgs/dominoes/intervalXY3'
import intervalXY4 from '../../../assets/svgs/dominoes/intervalXY4'
import intervalXY5 from '../../../assets/svgs/dominoes/intervalXY5'
import intervalXY6 from '../../../assets/svgs/dominoes/intervalXY6'
import intervalXY7 from '../../../assets/svgs/dominoes/intervalXY7'
import intervalXY8 from '../../../assets/svgs/dominoes/intervalXY8'
import intervalXY9 from '../../../assets/svgs/dominoes/intervalXY9'
import intervalXY10 from '../../../assets/svgs/dominoes/intervalXY10'
import intervalXY11 from '../../../assets/svgs/dominoes/intervalXY11'
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
