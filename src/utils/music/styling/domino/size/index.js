import { getFixed } from '../../../../general'
import { DIRECTION_X } from '../../../../../constants/music/game'
import { DEMO_BOARD_HEXAGON_WIDTH } from '../../../../../constants/music/demo'

export const getDominoSizeStyling = ({
    orientation,
    boardHexagonalBaseWidth = DEMO_BOARD_HEXAGON_WIDTH,
}) => {
    const
        hexagonWidth = 1 / boardHexagonalBaseWidth,
        width = hexagonWidth * (
            orientation === DIRECTION_X ?
                2 : 1.5
        )

    return {
        width: `${getFixed(width * 100)}%`,
    }
}
