import { getFixed } from '../../../general'
import {
    HORIZONTAL_HEXAGON_HEIGHT_UNIT_RATIO,
    HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO,
    VERTICAL_HEXAGON_HEIGHT_UNIT_RATIO,
    VERTICAL_HEXAGON_WIDTH_UNIT_RATIO,
} from '../../../../constants/music/domino'
import { DIRECTION_X } from '../../../../constants/music/game'

export const getIntervalPositionAndSizeStyling = orientation => ({
    top: `${getFixed((
        orientation === DIRECTION_X ?
            HORIZONTAL_HEXAGON_HEIGHT_UNIT_RATIO :
            VERTICAL_HEXAGON_HEIGHT_UNIT_RATIO * 1.75
    ) * 100)}%`,
    left: `${getFixed(0.5 * 100)}%`,
    width: `${getFixed((
        orientation === DIRECTION_X ?
            HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO :
            VERTICAL_HEXAGON_WIDTH_UNIT_RATIO
    ) * 100)}%`,
})
