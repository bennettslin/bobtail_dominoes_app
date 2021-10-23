import { getPoints } from '.'

describe('getPoints', () => {
    test.each([
        // Undefined.
        [undefined, 0],
        // Empty set.
        [new Set(), 0],
        // Single pitch.
        [new Set([3]), 0],
        // Dyad.
        [new Set([3, 10]), 0],
        // Triad.
        [new Set([0, 3, 7]), 3], // Chord.
        [new Set([8, 5, 3]), 0], // Non-chord.
        // Tetrad.
        [new Set([2, 4, 7, 11]), 4], // Chord.
        [new Set([6, 11, 0, 5]), 0], // Non-chord.
        // Greater.
        [new Set([9, 3, 7, 1, 5]), 0],
    ])('%p returns %p points', (set, result) => {
        expect(getPoints(set)).toBe(result)
    })
})
