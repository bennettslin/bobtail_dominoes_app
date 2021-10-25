import { getHasPitchAtCoordinates, getHasPitchAtPlacement, getNextCoordinates, getPitchAtCoordinates } from '.'
import { DIRECTION_X, DIRECTION_XY, DIRECTION_Y } from '../../../../constants/music/game'

const MOCK_MATRIX = { '-25': { 25: 6, 26: 0 } }

describe('getNextCoordinates', () => {
    test.each([
        [[-25, 25], DIRECTION_X, undefined, [-24, 25]],
        [[-25, 25], DIRECTION_Y, undefined, [-25, 26]],
        [[-25, 25], DIRECTION_XY, undefined, [-26, 26]],
        [[-25, 25], DIRECTION_X, 1, [-24, 25]],
        [[-25, 25], DIRECTION_Y, 1, [-25, 26]],
        [[-25, 25], DIRECTION_XY, 1, [-26, 26]],
        [[-25, 25], DIRECTION_X, -1, [-26, 25]],
        [[-25, 25], DIRECTION_Y, -1, [-25, 24]],
        [[-25, 25], DIRECTION_XY, -1, [-24, 24]],
    ])('%p, %p, and %p return %p', (coordinates, direction, sign, result) => {
        expect(getNextCoordinates(
            coordinates, direction, sign,
        )).toStrictEqual(result)
    })
})

describe('getPitchAtCoordinates', () => {
    test.each([
        [[0, 0], MOCK_MATRIX, undefined],
        [[-25, 25], MOCK_MATRIX, 6],
        [[-25, 26], MOCK_MATRIX, 0],
    ])('%p and %p return %p', (coordinates, matrix, result) => {
        expect(getPitchAtCoordinates(coordinates, matrix)).toBe(result)
    })
})

describe('getHasPitchAtCoordinates', () => {
    test.each([
        [[0, 0], MOCK_MATRIX, false],
        [[-25, 25], MOCK_MATRIX, true],
        [[-25, 26], MOCK_MATRIX, true],
    ])('%p and %p return %p', (coordinates, matrix, result) => {
        expect(getHasPitchAtCoordinates(coordinates, matrix)).toBe(result)
    })
})

describe('getHasPitchAtPlacement', () => {
    test.each([
        [[[0, 0], [0, 1]], MOCK_MATRIX, false],
        [[[-25, 25], [-25, 24]], MOCK_MATRIX, true],
        [[[-26, 26], [-25, 26]], MOCK_MATRIX, true],
        [[[-25, 25], [-25, 26]], MOCK_MATRIX, true],
    ])('%p and %p return %p', (placement, matrix, result) => {
        expect(getHasPitchAtPlacement(placement, matrix)).toBe(result)
    })
})
