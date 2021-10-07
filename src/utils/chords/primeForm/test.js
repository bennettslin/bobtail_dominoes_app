import { getPrimeFormKey } from '.'

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
        // Tetrad.
        [new Set([2, 5, 7, 10]), '0358'], // Simple
        [new Set([4, 1, 8, 11]), '0358'], // Reverse.
        [new Set([0, 4, 7, 11]), '0158'], // Modulus.
        [new Set([10, 1, 5, 8]), '0358'], // Reverse and modulus.
        [new Set([10, 4, 7, 1]), '0369'], // Symmetric.
        // Other.
        [new Set([9, 5, 1, 8, 4, 0]), '014589'], // Symmetric.
        [new Set([11, 9, 7, 5, 3, 1]), '02468t'], // Symmetric.
        [new Set([9, 6, 3, 0, 11, 8, 5, 2]), '0134679t'], // Symmetric.
        [
            new Set([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]),
            '0123456789te',
        ], // All.
    ])('%p returns prime form %p', (set, normalForm) => {
        expect(getPrimeFormKey(set)).toStrictEqual(normalForm)
    })
})
