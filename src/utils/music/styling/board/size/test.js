import { getBoardSizeStyling } from '.'

describe('getBoardSizeStyling', () => {
    test.each([
        [{ boardHexagonalWidth: 10 }, { height: '120%', width: '120%' }],
        [{ boardHexagonalWidth: 12 }, { height: '100%', width: '100%' }],
        [{ boardHexagonalWidth: 15 }, { height: '80%', width: '80%' }],
        [
            {
                boardHexagonalWidth: 13,
                boardHexagonalBaseWidth: 10,
            },
            { height: '76.92%', width: '76.92%' },
        ],
        [
            {
                boardHexagonalWidth: 29,
                boardHexagonalBaseWidth: 40,
            },
            { height: '137.93%', width: '137.93%' },
        ],
    ])('%p returns %p', (props, result) => {
        expect(getBoardSizeStyling(props)).toStrictEqual(result)
    })
})
