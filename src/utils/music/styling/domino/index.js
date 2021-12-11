import { getFixed } from '../../../general'
import { getIsPlacementUpsideDown } from '../../mechanics/placement/orientation'
import { getCartesianX } from '../../render/cartesian'
import {
    HEXAGON_HEIGHT_RATIO,
    HORIZONTAL_HEXAGON_HEIGHT_UNIT_RATIO,
    HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO,
    VERTICAL_HEXAGON_HEIGHT_UNIT_RATIO,
    VERTICAL_HEXAGON_WIDTH_UNIT_RATIO,
} from '../../../../constants/music/domino'
import { DIRECTION_X, DIRECTION_Y } from '../../../../constants/music/game'

export const getDominoPositionStyling = ({
    placement,
    boardHexagonalBaseWidth,
}) => {
    const
        hexagonWidth = 1 / boardHexagonalBaseWidth,
        hexagonHeight = hexagonWidth * HEXAGON_HEIGHT_RATIO * 3 / 4,
        [x, y] = placement[getIsPlacementUpsideDown(placement) ? 1 : 0]

    return {
        top: `${getFixed((
            y * -hexagonHeight + 0.5
        ) * 100)}%`,
        left: `${getFixed((
            getCartesianX(x, y) * hexagonWidth + 0.5
        ) * 100)}%`,
    }
}

export const getDominoSizeStyling = ({
    orientation,
    boardHexagonalBaseWidth,
}) => ({
    width: `${getFixed((
        1 / boardHexagonalBaseWidth
    ) * (
        orientation === DIRECTION_X ? 2 : 1.5
    ) * 100)}%`,
})

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
