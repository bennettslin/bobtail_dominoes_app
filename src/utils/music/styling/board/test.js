import { getBoardPositionStyling, getBoardSizeStyling } from '.'
import { DEMO_BOARD_HEXAGON_WIDTH } from '../../../../constants/music/demo'

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

describe('getBoardSizeStyling', () => {
    test.each([
        [
            {
                boardHexagonalWidth: 10,
                boardHexagonalBaseWidth: DEMO_BOARD_HEXAGON_WIDTH,
            },
            { height: '120%', width: '120%' }],
        [
            {
                boardHexagonalWidth: 12,
                boardHexagonalBaseWidth: DEMO_BOARD_HEXAGON_WIDTH,
            },
            { height: '100%', width: '100%' }],
        [
            {
                boardHexagonalWidth: 15,
                boardHexagonalBaseWidth: DEMO_BOARD_HEXAGON_WIDTH,
            },
            { height: '80%', width: '80%' }],
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
