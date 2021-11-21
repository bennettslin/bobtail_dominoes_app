import { getBoardOrderedByZIndex } from '.'

describe('getBoardOrderedByZIndex', () => {
    test.each([
        [
            [
                // Different y.
                { placement: [[1, 0], [0, 1]] },
                { placement: [[-1, 1], [-1, 2]] },
                { placement: [[0, 2], [1, 2]] },
            ],
            [
                { placement: [[0, 2], [1, 2]] },
                { placement: [[-1, 1], [-1, 2]] },
                { placement: [[1, 0], [0, 1]] },
            ],
        ],
        [
            [
                // Same y, direction Y has lower x, other is direction Y.
                { placement: [[2, 0], [2, 1]] },
                { placement: [[1, 0], [1, 1]] },
            ],
            [
                { placement: [[1, 0], [1, 1]] },
                { placement: [[2, 0], [2, 1]] },
            ],
        ],
        [
            [
                // Same y, direction XY has higher x, other is direction XY.
                { placement: [[0, 0], [-1, 1]] },
                { placement: [[1, 0], [0, 1]] },
            ],
            [
                { placement: [[1, 0], [0, 1]] },
                { placement: [[0, 0], [-1, 1]] },
            ],
        ],
        [
            [
                // Same y, direction Y has lower x, other is direction X.
                { placement: [[0, 1], [1, 1]] },
                { placement: [[-1, 1], [-1, 2]] },
            ],
            [
                { placement: [[-1, 1], [-1, 2]] },
                { placement: [[0, 1], [1, 1]] },
            ],
        ],
        [
            [
                // Same y, direction XY has higher x, other is direction X.
                { placement: [[0, 1], [1, 1]] },
                { placement: [[2, 1], [1, 2]] },
            ],
            [
                { placement: [[2, 1], [1, 2]] },
                { placement: [[0, 1], [1, 1]] },
            ],
        ],
        [
            [
                // Direction Y has lower y when upside down.
                { placement: [[1, 1], [1, 0]] },
                { placement: [[-1, 1], [0, 1]] },
            ],
            [
                { placement: [[-1, 1], [0, 1]] },
                { placement: [[1, 1], [1, 0]] },
            ],
        ],
        [
            [
                // Direction XY has lower y when upside down.
                { placement: [[-1, 1], [0, 0]] },
                { placement: [[0, 1], [1, 1]] },
            ],
            [
                { placement: [[0, 1], [1, 1]] },
                { placement: [[-1, 1], [0, 0]] },
            ],
        ],
        [
            [
                // Combination.
                { placement: [[1, 0], [2, 0]] },
                { placement: [[0, 0], [-1, 1]] },
                { placement: [[0, 1], [1, 1]] },
                { placement: [[2, 1], [1, 2]] },
                { placement: [[-1, 2], [0, 2]] },
            ],
            [
                { placement: [[-1, 2], [0, 2]] },
                { placement: [[2, 1], [1, 2]] },
                { placement: [[0, 1], [1, 1]] },
                { placement: [[0, 0], [-1, 1]] },
                { placement: [[1, 0], [2, 0]] },
            ],
        ],
    ])('%p returns %p', (board, result) => {
        expect(getBoardOrderedByZIndex(board)).toStrictEqual(result)
    })
})
