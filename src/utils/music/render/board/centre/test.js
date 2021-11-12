import { getBoardCentreCoordinates, getMovableBoardStyling } from '.'

describe.skip('getBoardCentreCoordinates', () => {
    test.each([
        [
            [
                { placement: [[0, 0], [1, 0]] },
                { placement: [[50, 50], [50, 49]] },
            ],
            [],
        ],
    ])('%p returns %p', (board, result) => {
        expect(getBoardCentreCoordinates(board)).toStrictEqual(result)
    })
})

describe.skip('getMovableBoardStyling', () => {
    test.each([
        [
            {
                board: [
                    { placement: [[0, 0], [1, 0]] },
                    { placement: [[50, 50], [50, 49]] },
                ],
            },
            null,
        ],
    ])('%p returns %p', (board, result) => {
        expect(getMovableBoardStyling(board)).toStrictEqual(result)
    })
})
