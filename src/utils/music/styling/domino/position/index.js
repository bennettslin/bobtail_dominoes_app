import { getFixed } from '../../../../general'
import { getIsPlacementUpsideDown } from '../../../game/placement/orientation'
import { getCartesianX } from '../../../render/cartesian'
import { DEMO_BOARD_HEXAGON_WIDTH } from '../../../../../constants/music/demo'
import { HEXAGON_HEIGHT_RATIO } from '../../../../../constants/music/domino'

export const getDominoPositionStyling = ({
    placement,
    boardHexagonalBaseWidth = DEMO_BOARD_HEXAGON_WIDTH,
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
