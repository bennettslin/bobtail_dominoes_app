import { getFixed } from '../../../../general'
import { getCartesianRange } from '../../cartesian'
import {
    BOARD_HEXAGONAL_BASE_WIDTH,
    HEIGHT_BOTTOM_PIXELS,
    HEXAGON_BASE_WIDTH,
    HEXAGON_HEIGHT_RATIO,
    HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO,
} from '../../../../../constants/music/domino'

export const getBoardHexagonalWidth = (
    board,
    minWidth = BOARD_HEXAGONAL_BASE_WIDTH,
) => {
    const { minX, maxX, minY, maxY } = getCartesianRange(board)

    return Math.max(
        minWidth,

        // Include both ends. So if max is 1 and min is -1, total width is 3.
        maxX - minX + 1,

        // First hexagon is four units, each subsequent one adds three units.
        ((maxY - minY + 1) * 3 + 1)
            * HORIZONTAL_HEXAGON_WIDTH_UNIT_RATIO
            * HEXAGON_HEIGHT_RATIO

            // The bottom perspective of the hexagons.
            + HEIGHT_BOTTOM_PIXELS / HEXAGON_BASE_WIDTH,
    )
}

export const getBoardSizeStyling = ({
    boardHexagonalWidth,
    boardHexagonalBaseWidth = BOARD_HEXAGONAL_BASE_WIDTH,
}) => {
    const widthRatio = boardHexagonalBaseWidth / boardHexagonalWidth
    return {
        width: `${getFixed(widthRatio * 100)}%`,
        height: `${getFixed(widthRatio * 100)}%`,
    }
}
