import { getIsValidChord, getIsInvalidSonority, getIsValidSonority } from '.'

describe('getIsValidChord', () => {
    test.each([
        // Undefined.
        [undefined, false],
        // Empty set.
        [new Set(), false],
        // Single pitch.
        [new Set([3]), false],
        // Dyad.
        [new Set([3, 10]), false],
        // Triad.
        [new Set([0, 3, 7]), true], // Minor.
        [new Set([11, 7, 2]), true], // Major.
        [new Set([5, 8, 2]), true], // Diminished.
        [new Set([5, 1, 9]), true], // Augmented.
        [new Set([8, 5, 3]), false], // Non-chord.
        [new Set([11, 0, 6]), false], // Non-chord.
        // Tetrad.
        [new Set([2, 4, 7, 11]), true], // Minor
        [new Set([11, 9, 6, 3]), true], // Dominant.
        [new Set([1, 6, 5, 10]), true], // Major.
        [new Set([8, 1, 4, 0]), true], // Minor-major.
        [new Set([11, 2, 6, 8]), true], // Half-diminished.
        [new Set([9, 6, 3, 0]), true], // Diminished.
        [new Set([2, 9, 6, 10]), true], // Augmented major.
        [new Set([6, 11, 0, 5]), false], // Non-chord.
        [new Set([2, 0, 7, 5]), false], // Non-chord.
        // Greater.
        [new Set([9, 3, 7, 1, 5]), false],
    ])('%p returns %p', (set, result) => {
        expect(getIsValidChord(set)).toBe(result)
    })
})

describe('getIsValidSonority', () => {
    test.each([
        // Undefined.
        [undefined, true],
        // Empty set.
        [new Set(), true],
        // Single pitch.
        [new Set([3]), true],
        // Dyad.
        [new Set([3, 10]), true],
        // Triad.
        [new Set([0, 3, 7]), true], // Chord.
        [new Set([8, 5, 3]), false], // Non-chord.
        // Tetrad.
        [new Set([2, 4, 7, 11]), true], // Chord.
        [new Set([6, 11, 0, 5]), false], // Non-chord.
        // Greater.
        [new Set([9, 3, 7, 1, 5]), false],
    ])('%p returns %p', (set, result) => {
        expect(getIsValidSonority(set)).toBe(result)
    })
})

describe('getIsInvalidSonority', () => {
    test.each([
        // Undefined.
        [undefined, false],
        // Empty set.
        [new Set(), false],
        // Single pitch.
        [new Set([3]), false],
        // Dyad.
        [new Set([3, 10]), false],
        // Triad.
        [new Set([0, 3, 7]), false], // Chord.
        [new Set([8, 5, 3]), true], // Non-chord.
        // Tetrad.
        [new Set([2, 4, 7, 11]), false], // Chord.
        [new Set([6, 11, 0, 5]), true], // Non-chord.
        // Greater.
        [new Set([9, 3, 7, 1, 5]), true],
    ])('%p returns %p', (set, result) => {
        expect(getIsInvalidSonority(set)).toBe(result)
    })
})
