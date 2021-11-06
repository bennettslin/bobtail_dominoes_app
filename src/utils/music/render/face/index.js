import { getFixed } from '../../../general'
import {
    HORIZONTAL_HEXAGON_HEIGHT_UNIT_RATIO,
    HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO,
    VERTICAL_HEXAGON_HEIGHT_UNIT_RATIO,
    VERTICAL_HEXAGON_WIDTH_UNIT_RATIO,
} from '../../../../constants/music/domino'
import { DIRECTION_X, DIRECTION_Y } from '../../../../constants/music/game'

export const getFacePositionAndSizeStyling = ({
    pitchIndex,
    orientation,
}) => {
    const
        baseWidthUnitRatio = orientation === DIRECTION_X ?
            HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO :
            VERTICAL_HEXAGON_WIDTH_UNIT_RATIO,
        baseHeightUnitRatio = orientation === DIRECTION_X ?
            HORIZONTAL_HEXAGON_HEIGHT_UNIT_RATIO :
            VERTICAL_HEXAGON_HEIGHT_UNIT_RATIO

    let topRatio,
        leftRatio

    if (orientation === DIRECTION_X) {
        topRatio = baseHeightUnitRatio
        leftRatio = baseWidthUnitRatio * (pitchIndex ? 3 : 1)

    } else {
        topRatio = baseHeightUnitRatio * (pitchIndex ? 1 : 5 / 2)
        if (pitchIndex) {
            leftRatio =
                baseWidthUnitRatio * (orientation === DIRECTION_Y ? 2 : 1)
        } else {
            leftRatio =
                baseWidthUnitRatio * (orientation === DIRECTION_Y ? 1 : 2)
        }
    }

    return {
        top: `${getFixed(topRatio * 100)}%`,
        left: `${getFixed(leftRatio * 100)}%`,
        width: `${getFixed(baseWidthUnitRatio * 100 * 2)}%`,
    }
}
