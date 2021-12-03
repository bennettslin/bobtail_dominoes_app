import { getFixed } from '../../../../general'
import {
    HORIZONTAL_HEXAGON_HEIGHT_UNIT_RATIO,
    HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO,
    VERTICAL_HEXAGON_HEIGHT_UNIT_RATIO,
    VERTICAL_HEXAGON_WIDTH_UNIT_RATIO,
} from '../../../../../constants/music/domino'
import { DIRECTION_X, DIRECTION_Y } from '../../../../../constants/music/game'

export const getDominoTranslateStyling = ({ orientation }) => ({
    transform: `translate(${[
        `-${getFixed((
            orientation === DIRECTION_X ?
                HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO :
                VERTICAL_HEXAGON_WIDTH_UNIT_RATIO * (
                    orientation === DIRECTION_Y ? 1 : 2
                )
        ) * 100)}%`,
        `-${getFixed((
            orientation === DIRECTION_X ?
                HORIZONTAL_HEXAGON_HEIGHT_UNIT_RATIO :
                VERTICAL_HEXAGON_HEIGHT_UNIT_RATIO * 5 / 2
        ) * 100)}%`,
    ].join(', ')})`,
})
