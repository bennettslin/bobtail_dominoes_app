import { getFixed } from '../../../general'
import {
    HORIZONTAL_HEXAGON_HEIGHT_UNIT_RATIO,
    HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO,
    VERTICAL_HEXAGON_HEIGHT_UNIT_RATIO,
    VERTICAL_HEXAGON_WIDTH_UNIT_RATIO,
} from '../../../../constants/music/domino'
import {
    DIRECTION_X,
    DIRECTION_XY,
    DIRECTION_Y,
} from '../../../../constants/music/game'

export const getFacePositionAndSizeStyling = ({
    pitchIndex,
    orientation,

}) => ({
    top: `${getFixed((
        orientation === DIRECTION_X ?
            HORIZONTAL_HEXAGON_HEIGHT_UNIT_RATIO :
            VERTICAL_HEXAGON_HEIGHT_UNIT_RATIO * (pitchIndex ? 1 : 5 / 2)
    ) * 100)}%`,
    left: `${getFixed((
        orientation === DIRECTION_X ?
            HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO * (pitchIndex ? 3 : 1) :
            VERTICAL_HEXAGON_WIDTH_UNIT_RATIO * ((
                (!pitchIndex && orientation === DIRECTION_Y) ||
                (pitchIndex && orientation === DIRECTION_XY)
            ) ? 1 : 2)
    ) * 100)}%`,
    width: `${getFixed((
        orientation === DIRECTION_X ?
            HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO :
            VERTICAL_HEXAGON_WIDTH_UNIT_RATIO
    ) * 2 * 100)}%`,
})
