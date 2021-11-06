import { getZIndexDominoesList } from '.'

describe('getZIndexDominoesList', () => {
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
        expect(getZIndexDominoesList(board)).toStrictEqual(result)
    })
})
