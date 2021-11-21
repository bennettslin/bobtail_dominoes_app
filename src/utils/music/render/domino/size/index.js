import { getFixed } from '../../../../general'
import { DIRECTION_X } from '../../../../../constants/music/game'
import { BOARD_HEXAGONAL_BASE_WIDTH } from '../../../../../constants/music/domino'

export const getDominoSizeStyling = ({
    orientation,
    boardHexagonalBaseWidth = BOARD_HEXAGONAL_BASE_WIDTH,
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
