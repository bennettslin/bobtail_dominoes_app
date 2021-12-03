import { getFacePositionAndSizeStyling } from '.'
import {
    DIRECTION_X,
    DIRECTION_XY,
    DIRECTION_Y,
} from '../../../../constants/music/game'

describe('getFacePositionAndSizeStyling', () => {
    test.each([
        [
            { pitchIndex: 0, orientation: DIRECTION_X },
            { left: '25%', top: '46.95%', width: '50%' },
        ],
        [
            { pitchIndex: 0, orientation: DIRECTION_Y },
            { left: '33.33%', top: '68.87%', width: '66.67%' },
        ],
        [
            { pitchIndex: 0, orientation: DIRECTION_XY },
            { left: '66.67%', top: '68.87%', width: '66.67%' },
        ],
        [
            { pitchIndex: 1, orientation: DIRECTION_X },
            { left: '75%', top: '46.95%', width: '50%' },
        ],
        [
            { pitchIndex: 1, orientation: DIRECTION_Y },
            { left: '66.67%', top: '27.55%', width: '66.67%' },
        ],
        [
            { pitchIndex: 1, orientation: DIRECTION_XY },
            { left: '33.33%', top: '27.55%', width: '66.67%' },
        ],
    ])('%p returns %p', (board, result) => {
        expect(getFacePositionAndSizeStyling(board)).toStrictEqual(result)
    })
})
