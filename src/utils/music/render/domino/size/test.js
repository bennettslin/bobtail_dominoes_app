import { getDominoSizeStyling } from '.'
import { DIRECTION_X, DIRECTION_XY, DIRECTION_Y } from '../../../../../constants/music/game'

describe('getDominoSizeStyling', () => {
    test.each([
        [{ orientation: DIRECTION_X }, { width: '16.67%' }],
        [{ orientation: DIRECTION_Y }, { width: '12.5%' }],
        [{ orientation: DIRECTION_XY }, { width: '12.5%' }],
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
