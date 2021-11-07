import { getFixed } from '../../../../general'
import { HEXAGON_HEIGHT_RATIO, HORIZONTAL_HEXAGON_HEIGHT_UNIT_RATIO, HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO, VERTICAL_HEXAGON_HEIGHT_UNIT_RATIO, VERTICAL_HEXAGON_WIDTH_UNIT_RATIO } from '../../../../../constants/music/domino'
import { DIRECTION_X, DIRECTION_Y } from '../../../../../constants/music/game'
import { getIsPlacementUpsideDown } from '../../../game/placement/orientation'

export const getDominoPositionStyling = ({ placement, range = 20 }) => {
    const
        hexagonWidth = 1 / range,
        hexagonHeight = hexagonWidth * HEXAGON_HEIGHT_RATIO * 3 / 4,
        coordinate = placement[getIsPlacementUpsideDown(placement) ? 1 : 0]

    return {
        top: `${getFixed((
            coordinate[1] * -hexagonHeight + 0.5
        ) * 100)}%`,
        left: `${getFixed(((
            coordinate[0] * hexagonWidth +
            coordinate[1] * hexagonWidth * 0.5
        ) + 0.5) * 100)}%`,
    }
}

export const getDominoCentreStyling = ({ orientation }) => ({
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
