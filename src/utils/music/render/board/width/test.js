import { getHexagonalWidthForBoard } from '.'

describe('getHexagonalWidthForBoard', () => {
    test.each([
        [
            [
                { placement: [[-10, -10], [-9, 10]] },
                { placement: [[9, 10], [10, 10]] },
            ],
            undefined,
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
