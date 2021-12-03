import {
    getDominoPositionStyling,
    getDominoSizeStyling,
    getDominoTranslateStyling,
} from '.'
import { DEMO_BOARD_HEXAGON_WIDTH } from '../../../../constants/music/demo'
import {
    DIRECTION_X,
    DIRECTION_XY,
    DIRECTION_Y,
} from '../../../../constants/music/game'

describe('getDominoPositionStyling', () => {
    test.each([
        [
            // Direction X.
            {
                placement: [[0, 0], [1, 0]],
                boardHexagonalBaseWidth: DEMO_BOARD_HEXAGON_WIDTH,
            },
            { left: '50%', top: '50%' },
        ],
        [
            // Direction Y.
            {
                placement: [[2, 0], [2, 1]],
                boardHexagonalBaseWidth: DEMO_BOARD_HEXAGON_WIDTH,
            },
            { left: '66.67%', top: '50%' },
        ],
        [
            // Direction XY.
            {
                placement: [[2, 2], [1, 3]],
                boardHexagonalBaseWidth: DEMO_BOARD_HEXAGON_WIDTH,
            },
            { left: '75%', top: '35.57%' },
        ],
        [
            // Direction X upside down.
            {
                placement: [[0, 0], [-1, 0]],
                boardHexagonalBaseWidth: DEMO_BOARD_HEXAGON_WIDTH,
            },
            { left: '41.67%', top: '50%' },
        ],
        [
            // Direction Y upside down.
            {
                placement: [[2, 0], [2, -1]],
                boardHexagonalBaseWidth: DEMO_BOARD_HEXAGON_WIDTH,
            },
            { left: '62.5%', top: '57.22%' },
        ],
        [
            // Direction XY upside down.
            {
                placement: [[2, 2], [3, 1]],
                boardHexagonalBaseWidth: DEMO_BOARD_HEXAGON_WIDTH,
            },
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

describe('getDominoSizeStyling', () => {
    test.each([
        [
            {
                orientation: DIRECTION_X,
                boardHexagonalBaseWidth: DEMO_BOARD_HEXAGON_WIDTH,
            },
            { width: '16.67%' }],
        [
            {
                orientation: DIRECTION_Y,
                boardHexagonalBaseWidth: DEMO_BOARD_HEXAGON_WIDTH,
            },
            { width: '12.5%' }],
        [
            {
                orientation: DIRECTION_XY,
                boardHexagonalBaseWidth: DEMO_BOARD_HEXAGON_WIDTH,
            },
            { width: '12.5%' }],
        [
            {
                orientation: DIRECTION_X,
                boardHexagonalBaseWidth: 10,
            },
            { width: '20%' },
        ],
        [
            {
                orientation: DIRECTION_Y,
                boardHexagonalBaseWidth: 40,
            },
            { width: '3.75%' },
        ],
    ])('%p returns %p', (props, result) => {
        expect(getDominoSizeStyling(props)).toStrictEqual(result)
    })
})

describe('getDominoTranslateStyling', () => {
    test.each([
        [
            { orientation: DIRECTION_X },
            { transform: 'translate(-25%, -46.95%)' },
        ],
        [
            { orientation: DIRECTION_Y },
            { transform: 'translate(-33.33%, -68.87%)' },
        ],
        [
            { orientation: DIRECTION_XY },
            { transform: 'translate(-66.67%, -68.87%)' },
        ],
    ])('%p returns %p', (board, result) => {
        expect(getDominoTranslateStyling(board)).toStrictEqual(result)
    })
})
