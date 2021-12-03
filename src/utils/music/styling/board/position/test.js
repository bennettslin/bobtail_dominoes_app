import { getBoardPositionStyling } from '.'

describe('getBoardPositionStyling', () => {
    test.each([
        [
            {
                board: [
                    { placement: [[-10, -10], [-9, 10]] },
                    { placement: [[9, 10], [10, 10]] },
                ],
                boardHexagonalWidth: 20,
            },
            { left: '50%', top: '50%' },
        ],
        [
            {
                board: [
                    { placement: [[0, 0], [1, 0]] },
                    { placement: [[19, 20], [20, 20]] },
                ],
                boardHexagonalWidth: 20,
            },
            { left: '-25%', top: '93.3%' },
        ],
    ])('%p returns %p', (board, result) => {
        expect(getBoardPositionStyling(board)).toStrictEqual(result)
    })
})
