import { getPrimeFormKey, getRoot } from '.'

describe('getPrimeFormKey', () => {
    test.each([
        // Undefined.
        [undefined, ''],
        // Empty set.
        [new Set(), ''],
        // Single pitch.
        [new Set([0]), '0'],
        [new Set([6]), '0'],
        // Dyad.
        [new Set([1, 5]), '04'], // Simple.
        [new Set([2, 11]), '03'], // Modulus.
        [new Set([9, 3]), '06'], // Symmetric.
        // Triad.
        [new Set([1, 4, 8]), '037'], // Simple.
        [new Set([9, 6, 2]), '047'], // Reverse.
        [new Set([2, 8, 11]), '036'], // Modulus.
        [new Set([0, 9, 5]), '047'], // Reverse and modulus.
        [new Set([10, 6, 2]), '048'], // Symmetric.
        [new Set([6, 8, 3]), '035'], // Non-chord.
        [new Set([11, 9, 1]), '024'], // Non-chord.
        // Tetrad.
        [new Set([1, 5, 7, 10]), '0258'], // Simple
        [new Set([5, 1, 8, 11]), '0368'], // Reverse.
        [new Set([0, 4, 7, 11]), '0158'], // Modulus.
        [new Set([10, 1, 5, 8]), '0358'], // Reverse and modulus.
        [new Set([10, 4, 7, 1]), '0369'], // Symmetric.
        [new Set([2, 7, 4, 9]), '0257'], // Non-chord.
        [new Set([11, 9, 7, 1]), '0246'], // Non-chord.
        // Other.
        [new Set([9, 5, 1, 8, 4, 0]), '014589'], // Symmetric.
        [new Set([11, 9, 7, 5, 3, 1]), '02468t'], // Symmetric.
        [new Set([9, 6, 3, 0, 11, 8, 5, 2]), '0134679t'], // Symmetric.
        [
            new Set([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]),
            '0123456789te',
        ], // All.
    ])('%p returns prime form %p', (set, result) => {
        expect(getPrimeFormKey(set)).toEqual(result)
    })
})

describe('getRoot', () => {
    test.each([
        // Undefined.
        [undefined, -1],
        // Empty set.
        [new Set(), -1],
        // Single pitch.
        [new Set([3]), -1],
        // Dyad.
        [new Set([3, 10]), -1],
        // Triad.
        [new Set([0, 3, 7]), 0], // Minor.
        [new Set([11, 7, 2]), 7], // Major.
        [new Set([5, 8, 2]), 2], // Diminished.
        [new Set([5, 1, 9]), 1], // Augmented.
        [new Set([11, 0, 6]), -1], // Non-chord.
        // Tetrad.
        [new Set([2, 4, 7, 11]), 4], // Minor
        [new Set([11, 9, 6, 3]), 11], // Dominant.
        [new Set([1, 6, 5, 10]), 6], // Major.
        [new Set([8, 1, 4, 0]), 1], // Minor-major.
        [new Set([11, 2, 6, 8]), 8], // Half-diminished.
        [new Set([9, 6, 3, 0]), 0], // Diminished.
        [new Set([2, 9, 6, 10]), 10], // Augmented major.
        [new Set([2, 0, 7, 5]), -1], // Non-chord.
        // Greater.
        [new Set([9, 3, 7, 1, 5]), -1],
    ])('%p returns root %p', (set, result) => {
        expect(getRoot(set)).toEqual(result)
    })
})
