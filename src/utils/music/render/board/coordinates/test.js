import { getDominoPositionStyling, getDominoTranslateStyling } from '.'
import { DIRECTION_X, DIRECTION_XY, DIRECTION_Y } from '../../../../../constants/music/game'

describe('getDominoPositionStyling', () => {
    test.each([
        [
            // Direction X.
            { placement: [[0, 0], [1, 0]] },
            { left: '50%', top: '50%' },
        ],
        [
            // Direction Y.
            { placement: [[2, 0], [2, 1]] },
            { left: '60%', top: '50%' },
        ],
        [
            // Direction XY.
            { placement: [[2, 2], [1, 3]] },
            { left: '65%', top: '41.34%' },
        ],
        [
            // Direction X upside down.
            { placement: [[0, 0], [-1, 0]] },
            { left: '45%', top: '50%' },
        ],
        [
            // Direction Y upside down.
            { placement: [[2, 0], [2, -1]] },
            { left: '57.5%', top: '54.33%' },
        ],
        [
            // Direction XY upside down.
            { placement: [[2, 2], [3, 1]] },
            { left: '67.5%', top: '45.67%' },
        ],
        [
            // Custom x range.
            { placement: [[2, 0], [2, 1]], xRange: 10 },
            { left: '70%', top: '50%' },
        ],
        [
            // Custom x range upside down.
            { placement: [[2, 0], [2, -1]], xRange: 40 },
            { left: '53.75%', top: '52.17%' },
        ],
    ])('%p returns %p', (board, result) => {
        expect(getDominoPositionStyling(board)).toStrictEqual(result)
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
