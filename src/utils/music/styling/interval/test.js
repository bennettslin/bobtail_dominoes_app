import { getIntervalPositionAndStyling } from '.'
import {
    DIRECTION_X,
    DIRECTION_XY,
    DIRECTION_Y,
} from '../../../../constants/music/game'

describe('getIntervalPositionAndStyling', () => {
    test.each([
        [
            DIRECTION_X,
            { left: '50%', top: '46.95%', width: '25%' },
        ],
        [
            DIRECTION_Y,
            { left: '50%', top: '48.21%', width: '33.33%' },
        ],
        [
            DIRECTION_XY,
            { left: '50%', top: '48.21%', width: '33.33%' },
        ],
    ])('%p returns %p', (board, result) => {
        expect(getIntervalPositionAndStyling(board)).toStrictEqual(result)
    })
})
