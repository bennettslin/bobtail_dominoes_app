import { getChordAbbreviation, getChordLabel, getRootLetter } from '.'
import { FLAT, SHARP } from '../../../constants/music'

describe('getRootLetter', () => {
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
        expect(getRootLetter(set)).toBe(result)
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
        [new Set([3, 6, 10]), { root: `D${SHARP}/E${FLAT}`, type: 'm' }],
        [new Set([11, 7, 2]), { root: 'G' }],
        [new Set([5, 8, 2]), { root: 'D', sup: 'o' }],
        [new Set([4, 0, 8]), { root: 'C', type: '+' }],
        [new Set([11, 0, 6]), {}],
        // Tetrad.
        [new Set([2, 4, 7, 11]), { root: 'E', type: 'm', sup: '7' }],
        [new Set([11, 9, 6, 3]), { root: 'B', sup: '7' }],
        [new Set([1, 6, 5, 10]), { root: `F${SHARP}/G${FLAT}`, type: 'maj', sup: '7' }],
        [new Set([9, 4, 8, 0]), { root: 'A', type: 'm', sup: 'M7' }],
        [new Set([11, 2, 6, 8]), { root: `G${SHARP}/A${FLAT}`, sup: 'ø7' }],
        [new Set([10, 7, 4, 1]), { root: `C${SHARP}/D${FLAT}`, sup: 'o7' }],
        [new Set([2, 9, 6, 10]), { root: `A${SHARP}/B${FLAT}`, type: '+', sup: 'M7' }],
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
        [new Set([3, 6, 10]), `D${SHARP}/E${FLAT} minor triad`],
        [new Set([11, 7, 2]), 'G major triad'],
        [new Set([5, 8, 2]), 'D diminished triad'],
        [new Set([4, 0, 8]), `C augmented triad`],
        [new Set([11, 0, 6]), null],
        // Tetrad.
        [new Set([2, 4, 7, 11]), 'E minor seventh'],
        [new Set([11, 9, 6, 3]), 'B dominant seventh'],
        [new Set([1, 6, 5, 10]), `F${SHARP}/G${FLAT} major seventh`],
        [new Set([9, 4, 8, 0]), `A minor-major seventh`],
        [new Set([11, 2, 6, 8]), `G${SHARP}/A${FLAT} half-diminished seventh`],
        [new Set([10, 7, 4, 1]), `C${SHARP}/D${FLAT} diminished seventh`],
        [new Set([2, 9, 6, 10]), `A${SHARP}/B${FLAT} augmented major seventh`],
        [new Set([2, 0, 7, 5]), null],
        // Greater.
        [new Set([9, 3, 7, 1, 5]), null],
    ])('%p returns %p', (primeFormKey, result) => {
        expect(getChordLabel(primeFormKey)).toBe(result)
    })
})
