import intervalX1 from '../../../assets/svgs/dominoes/intervalX1'
import intervalX2 from '../../../assets/svgs/dominoes/intervalX2'
import intervalX3 from '../../../assets/svgs/dominoes/intervalX3'
import intervalX4 from '../../../assets/svgs/dominoes/intervalX4'
import intervalX5 from '../../../assets/svgs/dominoes/intervalX5'
import intervalX6 from '../../../assets/svgs/dominoes/intervalX6'
import intervalY1 from '../../../assets/svgs/dominoes/intervalY1'
import intervalY2 from '../../../assets/svgs/dominoes/intervalY2'
import intervalY3 from '../../../assets/svgs/dominoes/intervalY3'
import intervalY4 from '../../../assets/svgs/dominoes/intervalY4'
import intervalY5 from '../../../assets/svgs/dominoes/intervalY5'
import intervalY6 from '../../../assets/svgs/dominoes/intervalY6'
import intervalXY1 from '../../../assets/svgs/dominoes/intervalXY1'
import intervalXY2 from '../../../assets/svgs/dominoes/intervalXY2'
import intervalXY3 from '../../../assets/svgs/dominoes/intervalXY3'
import intervalXY4 from '../../../assets/svgs/dominoes/intervalXY4'
import intervalXY5 from '../../../assets/svgs/dominoes/intervalXY5'
import intervalXY6 from '../../../assets/svgs/dominoes/intervalXY6'
import {
    DIRECTION_X,
    DIRECTION_XY,
    DIRECTION_Y,
} from '../../../constants/music/game'

const INTERVALS = {
    [DIRECTION_X]: [
        intervalX1,
        intervalX2,
        intervalX3,
        intervalX4,
        intervalX5,
        intervalX6,
    ],
    [DIRECTION_Y]: [
        intervalY1,
        intervalY2,
        intervalY3,
        intervalY4,
        intervalY5,
        intervalY6,
    ],
    [DIRECTION_XY]: [
        intervalXY1,
        intervalXY2,
        intervalXY3,
        intervalXY4,
        intervalXY5,
        intervalXY6,
    ],
}

export const getIntervalSrc = ({
    interval,
    orientation = DIRECTION_X,
}) => INTERVALS[orientation][interval - 1]
