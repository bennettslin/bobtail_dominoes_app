import { getDominoPositionStyling } from '.'

describe('getDominoPositionStyling', () => {
    test.each([
        [
            // Direction X.
            { placement: [[0, 0], [1, 0]] },
            { left: '50%', top: '50%' },
        ],
        [
            // Direction Y.
            { placement: [[2, 0], [2, 1]] },
            { left: '66.67%', top: '50%' },
        ],
        [
            // Direction XY.
            { placement: [[2, 2], [1, 3]] },
            { left: '75%', top: '35.57%' },
        ],
        [
            // Direction X upside down.
            { placement: [[0, 0], [-1, 0]] },
            { left: '41.67%', top: '50%' },
        ],
        [
            // Direction Y upside down.
            { placement: [[2, 0], [2, -1]] },
            { left: '62.5%', top: '57.22%' },
        ],
        [
            // Direction XY upside down.
            { placement: [[2, 2], [3, 1]] },
            { left: '79.17%', top: '42.78%' },
        ],
        [
            // Custom x range.
            { placement: [[2, 0], [2, 1]], boardHexagonalBaseWidth: 10 },
            { left: '70%', top: '50%' },
        ],
        [
            // Custom x range upside down.
            { placement: [[2, 0], [2, -1]], boardHexagonalBaseWidth: 40 },
            { left: '53.75%', top: '52.17%' },
        ],
    ])('%p returns %p', (board, result) => {
        expect(getDominoPositionStyling(board)).toStrictEqual(result)
    })
})
