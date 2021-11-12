import { getFixed } from '../../../../general'
import { getIsPlacementUpsideDown } from '../../../game/placement/orientation'
import { HEXAGON_HEIGHT_RATIO, HORIZONTAL_HEXAGON_HEIGHT_UNIT_RATIO, HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO, VERTICAL_HEXAGON_HEIGHT_UNIT_RATIO, VERTICAL_HEXAGON_WIDTH_UNIT_RATIO } from '../../../../../constants/music/domino'
import { DIRECTION_X, DIRECTION_Y } from '../../../../../constants/music/game'
import { BOARD_X_RANGE } from '../../../../../constants/music/play'

export const getDominoPositionStyling = ({
    placement,
    xRange = BOARD_X_RANGE,
}) => {
    const
        hexagonWidth = 1 / xRange,
        hexagonHeight = hexagonWidth * HEXAGON_HEIGHT_RATIO * 3 / 4,
        [x, y] = placement[getIsPlacementUpsideDown(placement) ? 1 : 0]

    return {
        top: `${getFixed((
            y * -hexagonHeight + 0.5
        ) * 100)}%`,
        left: `${getFixed(((
            x * hexagonWidth +
            y * hexagonWidth * 0.5
        ) + 0.5) * 100)}%`,
    }
}

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
