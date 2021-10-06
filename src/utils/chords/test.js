import { getNormalForm } from '.'

describe('getNormalForm', () => {
    test.each([
        // Empty set.
        [new Set(), []],
        // Single pitch.
        [new Set([0]), [0]],
        [new Set([6]), [6]],
        // Dyad.
        [new Set([1, 5]), [1, 5]], // Simple.
        [new Set([2, 11]), [11, 2]], // Modulus.
        [new Set([9, 3]), [3, 9]], // Symmetric.
        // Triad.
        [new Set([1, 4, 8]), [1, 4, 8]], // Simple.
        [new Set([9, 6, 2]), [2, 6, 9]], // Reverse.
        [new Set([2, 7, 11]), [7, 11, 2]], // Modulus.
        [new Set([0, 9, 5]), [5, 9, 0]], // Reverse and modulus.
        [new Set([10, 6, 2]), [2, 6, 10]], // Symmetric.
        // Tetrad.
        [new Set([2, 5, 7, 10]), [2, 5, 7, 10]], // Simple
        [new Set([4, 1, 8, 11]), [8, 11, 1, 4]], // Reverse.
        [new Set([0, 4, 7, 11]), [11, 0, 4, 7]], // Modulus.
        [new Set([10, 1, 5, 8]), [5, 8, 10, 1]], // Reverse.
        [new Set([10, 4, 7, 1]), [1, 4, 7, 10]], // Symmetric.
        // Other.
        [new Set([11, 9, 7, 5, 3, 1]), [1, 3, 5, 7, 9, 11]], // Symmetric.
    ])('%p returns normal form %p', (set, normalForm) => {
        expect(getNormalForm(set)).toStrictEqual(normalForm)
    })
})

// describe('getPrimeForm', () => {
//     test.each([
//         // Empty.
//         [[], []],
//         // Single pitch.
//         [[0], [0]],
//         [[6], [0]],
//         // Dyad.
//         [[1, 5], [0, 4]], // Simple.
//         [[2, 11], [0, 3]], // Modulus.
//         [[9, 3], [0, 6]], // Symmetric.
//         // Triad.
//         [[1, 4, 8], [0, 3, 7]], // Simple.
//         [[9, 6, 2], [2, 6, 9]], // Reverse.
//         [[2, 7, 11], [7, 11, 2]], // Modulus.
//         [[0, 9, 5], [5, 9, 0]], // Reverse and modulus.
//         [[10, 6, 2], [2, 6, 10]], // Symmetric.
//         // Tetrad.
//         [[2, 5, 7, 10], [2, 5, 7, 10]], // Simple
//         [[4, 1, 8, 11], [8, 11, 1, 4]], // Reverse.
//         [[0, 4, 7, 11], [11, 0, 4, 7]], // Modulus.
//         [[10, 1, 5, 8], [5, 8, 10, 1]], // Reverse.
//         [[10, 4, 7, 1], [1, 4, 7, 10]], // Symmetric.
//         // Other.
//         [[11, 9, 7, 5, 3, 1], [1, 3, 5, 7, 9, 11]], // Symmetric.
//     ])('%p returns prime form %p', (set, normalForm) => {
//         expect(getPrimeForm(set)).toStrictEqual(normalForm)
//     })
// })
