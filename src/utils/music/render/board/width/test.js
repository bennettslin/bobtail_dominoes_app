import { getHexagonalWidthForBoard } from '.'
import { DEMO_BOARD_HEXAGON_WIDTH } from '../../../../../constants/music/demo'

describe('getHexagonalWidthForBoard', () => {
    test.each([
        [
            [
                { placement: [[-10, -10], [-9, 10]] },
                { placement: [[9, 10], [10, 10]] },
            ],
            DEMO_BOARD_HEXAGON_WIDTH,
            31,
        ],
        [
            [
                { placement: [[-10, -10], [-9, 10]] },
                { placement: [[9, 10], [10, 10]] },
            ],
            10,
            31,
        ],
        [
            [
                { placement: [[-10, -10], [-9, 10]] },
                { placement: [[9, 10], [10, 10]] },
            ],
            40,
            40,
        ],
    ])('%p, %p returns %p', (board, minWidth, result) => {
        expect(getHexagonalWidthForBoard(board, minWidth)).toStrictEqual(result)
    })
})
