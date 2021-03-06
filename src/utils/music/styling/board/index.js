import { getFixed } from '../../../general'
import { getCartesianCentre } from '../../render/cartesian'
import { HEXAGON_HEIGHT_RATIO } from '../../../../constants/music/domino'

export const getBoardPositionStyling = ({
    board,
    boardHexagonalWidth,
}) => {
    const
        hexagonWidth = 1 / boardHexagonalWidth,
        hexagonHeight = hexagonWidth * HEXAGON_HEIGHT_RATIO * 3 / 4,
        [cartesianX, cartesianY] = getCartesianCentre(board)

    return {
        top: `${getFixed((cartesianY * hexagonHeight + 0.5) * 100)}%`,
        left: `${getFixed((cartesianX * -hexagonWidth + 0.5) * 100)}%`,
    }
}

export const getBoardSizeStyling = ({
    boardHexagonalWidth,
    boardHexagonalBaseWidth,
}) => {
    const widthRatio = boardHexagonalBaseWidth / boardHexagonalWidth
    return {
        width: `${getFixed(widthRatio * 100)}%`,
        height: `${getFixed(widthRatio * 100)}%`,
    }
}
