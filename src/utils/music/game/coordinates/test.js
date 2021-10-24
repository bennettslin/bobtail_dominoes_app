import { getHasPitchAtCoordinates, getHasPitchAtPlacement, getNextCoordinates, getPitchAtCoordinates } from '.'
import { DIRECTION_X } from '../../../../constants/music/game'

describe('getNextCoordinates', () => {
    test.each([
        [[0, 1], DIRECTION_X, undefined, [0, 1]],
    ])('%p, %p, and %p return %p', (coordinates, direction, sign, result) => {
        expect(getNextCoordinates(coordinates, direction, sign)).toBe(result)
    })
})

describe('getPitchAtCoordinates', () => {
    test.each([
        [[0, 1], {}, 5],
    ])('%p and %p return %p', (coordinates, matrix, result) => {
        expect(getPitchAtCoordinates(coordinates, matrix)).toBe(result)
    })
})

describe('getHasPitchAtCoordinates', () => {
    test.each([
        [[0, 1], {}, true],
    ])('%p and %p return %p', (coordinates, matrix, result) => {
        expect(getHasPitchAtCoordinates(coordinates, matrix)).toBe(result)
    })
})

describe('getHasPitchAtPlacement', () => {
    test.each([
        [[[0, 0], [0, 1]], {}, true],
    ])('%p and %p return %p', (placement, matrix, result) => {
        expect(getHasPitchAtPlacement(placement, matrix)).toBe(result)
    })
})
