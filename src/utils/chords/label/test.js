import { getChordAbbreviation, getChordLabel, getIsPitchBlack } from '.'

describe('getIsPitchBlack', () => {
    test.each([
        [0, false],
        [1, true],
        [2, false],
        [3, true],
        [4, false],
        [5, false],
        [6, true],
        [7, false],
        [8, true],
        [9, false],
        [10, true],
        [11, false],
    ])('%p returns %p', (pitch, result) => {
        expect(getIsPitchBlack(pitch)).toBe(result)
    })
})

describe('getChordAbbreviation', () => {
    test.each([
        // Undefined.
        [undefined, {}],
        // Empty set.
        [new Set(), {}],
        // Single pitch.
        [new Set([3]), {}],
        // Dyad.
        [new Set([3, 10]), {}],
        // Triad.
        [new Set([3, 6, 10]), { root: `D♯`, type: 'm' }],
        [new Set([11, 7, 2]), { root: 'G' }],
        [new Set([5, 8, 2]), { root: 'D', sup: 'o' }],
        [new Set([4, 0, 8]), { root: 'C', type: '+' }],
        [new Set([11, 0, 6]), {}],
        // Tetrad.
        [new Set([2, 4, 7, 11]), { root: 'E', type: 'm', sup: '7' }],
        [new Set([11, 9, 6, 3]), { root: 'B', sup: '7' }],
        [new Set([1, 6, 5, 10]), { root: `G♭`, type: 'maj', sup: '7' }],
        [new Set([9, 4, 8, 0]), { root: 'A', type: 'm', sup: 'M7' }],
        [new Set([11, 2, 6, 8]), { root: `G♯`, sup: 'ø7' }],
        [new Set([10, 7, 4, 1]), { root: `C♯`, sup: 'o7' }],
        [new Set([2, 9, 6, 10]), { root: `B♭`, type: '+', sup: 'M7' }],
        [new Set([2, 0, 7, 5]), {}],
        // Greater.
        [new Set([9, 3, 7, 1, 5]), {}],
    ])('%p returns %p', (primeFormKey, result) => {
        expect(getChordAbbreviation(primeFormKey)).toStrictEqual(result)
    })
})

describe('getChordLabel', () => {
    test.each([
        // Undefined.
        [undefined, null],
        // Empty set.
        [new Set(), null],
        // Single pitch.
        [new Set([3]), null],
        // Dyad.
        [new Set([3, 10]), null],
        // Triad.
        [new Set([3, 6, 10]), `D♯ minor triad`],
        [new Set([11, 7, 2]), 'G major triad'],
        [new Set([5, 8, 2]), 'D diminished triad'],
        [new Set([4, 0, 8]), `C augmented triad`],
        [new Set([11, 0, 6]), null],
        // Tetrad.
        [new Set([2, 4, 7, 11]), 'E minor seventh'],
        [new Set([11, 9, 6, 3]), 'B dominant seventh'],
        [new Set([1, 6, 5, 10]), `G♭ major seventh`],
        [new Set([9, 4, 8, 0]), `A minor-major seventh`],
        [new Set([11, 2, 6, 8]), `G♯ half-diminished seventh`],
        [new Set([10, 7, 4, 1]), `C♯ diminished seventh`],
        [new Set([2, 9, 6, 10]), `B♭ augmented major seventh`],
        [new Set([2, 0, 7, 5]), null],
        // Greater.
        [new Set([9, 3, 7, 1, 5]), null],
    ])('%p returns %p', (primeFormKey, result) => {
        expect(getChordLabel(primeFormKey)).toBe(result)
    })
})
