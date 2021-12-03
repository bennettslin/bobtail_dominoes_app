import { getHexagonalMinWidthForBoard } from '.'

describe('getHexagonalMinWidthForBoard', () => {
    test.each([
        [
            {
                board: [
                    { placement: [[-10, -10], [-9, 10]] },
                    { placement: [[9, 10], [10, 10]] },
                ],
            },
            31,
        ],
        [
            {
                board: [
                    { placement: [[-10, -10], [-9, 10]] },
                    { placement: [[9, 10], [10, 10]] },
                ],
                minWidth: 10,
            },
            31,
        ],
        [
            {
                board: [
                    { placement: [[-10, -10], [-9, 10]] },
                    { placement: [[9, 10], [10, 10]] },
                ],
                padding: 5,
                minWidth: 40,
            },
            45,
        ],
    ])('%p returns %p', (props, result) => {
        expect(getHexagonalMinWidthForBoard(props)).toStrictEqual(result)
    })
})
