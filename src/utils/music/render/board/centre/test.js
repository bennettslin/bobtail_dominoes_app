import { getCartesianCentreCoordinates, getMovableBoardStyling } from '.'

describe('getCartesianCentreCoordinates', () => {
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
        expect(getCartesianCentreCoordinates(board)).toStrictEqual(result)
    })
})

describe('getMovableBoardStyling', () => {
    test.each([
        [
            {
                board: [
                    { placement: [[-10, -10], [-9, 10]] },
                    { placement: [[9, 10], [10, 10]] },
                ],
            },
            { left: '50%', top: '50%' },
        ],
        [
            {
                board: [
                    { placement: [[0, 0], [1, 0]] },
                    { placement: [[19, 20], [20, 20]] },
                ],
            },
            { left: '-25%', top: '93.3%' },
        ],
    ])('%p returns %p', (board, result) => {
        expect(getMovableBoardStyling(board)).toStrictEqual(result)
    })
})
