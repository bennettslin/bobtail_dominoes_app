import { getDominoTranslateStyling } from '.'
import { DIRECTION_X, DIRECTION_XY, DIRECTION_Y } from '../../../../../constants/music/game'

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
