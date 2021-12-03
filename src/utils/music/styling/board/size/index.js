import { getFixed } from '../../../../general'
import { DEMO_BOARD_HEXAGON_WIDTH } from '../../../../../constants/music/demo'

export const getBoardSizeStyling = ({
    boardHexagonalWidth,
    boardHexagonalBaseWidth = DEMO_BOARD_HEXAGON_WIDTH,
}) => {
    const widthRatio = boardHexagonalBaseWidth / boardHexagonalWidth
    return {
        width: `${getFixed(widthRatio * 100)}%`,
        height: `${getFixed(widthRatio * 100)}%`,
    }
}
