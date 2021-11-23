import { getCartesianCentre, getCartesianRange, getCartesianX } from '.'

describe('getCartesianX', () => {
    test.each([
        [0, 0, 0],
        [8, -3, 6.5],
        [-5, 12, 1],
    ])('%p, %p returns %p', (x, y, result) => {
        expect(getCartesianX(x, y)).toStrictEqual(result)
    })
})

describe('getCartesianRange', () => {
    test.each([
        [
            [
                { placement: [[-10, -10], [-9, 10]] },
                { placement: [[9, 10], [10, 10]] },
            ],
            { maxX: 15, maxY: 10, minX: -15, minY: -10 },
        ],
        [
            [
                { placement: [[0, 0], [1, 0]] },
                { placement: [[19, 20], [20, 20]] },
            ],
            { maxX: 30, maxY: 20, minX: 0, minY: 0 },
        ],
    ])('%p returns %p', (board, result) => {
        expect(getCartesianRange(board)).toStrictEqual(result)
    })
})

describe('getCartesianCentre', () => {
    test.each([
        [
            [
                { placement: [[-10, -10], [-9, 10]] },
                { placement: [[9, 10], [10, 10]] },
            ],
            [0, 0],
        ],
        [
            [
                { placement: [[0, 0], [1, 0]] },
                { placement: [[19, 20], [20, 20]] },
            ],
            [15, 10],
        ],
    ])('%p returns %p', (board, result) => {
        expect(getCartesianCentre(board)).toStrictEqual(result)
    })
})
