import { getCartesianCentre } from '.'

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
