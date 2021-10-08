import { getChordType, getRootNote, getChordLabel } from '.'
import { FLAT, SHARP } from '../../../constants/music'

describe('getRootNote', () => {
    test.each([
        // Undefined.
        [undefined, null],
        [-1, null],
        [0, 'C'],
        [1, `C${SHARP}/D${FLAT}`],
        [2, 'D'],
        [3, `D${SHARP}/E${FLAT}`],
        [4, 'E'],
        [5, 'F'],
        [6, `F${SHARP}/G${FLAT}`],
        [7, 'G'],
        [8, `G${SHARP}/A${FLAT}`],
        [9, 'A'],
        [10, `A${SHARP}/B${FLAT}`],
        [11, 'B'],
        [12, null],
    ])('%p returns root index %p', (primeFormKey, result) => {
        expect(getRootNote(primeFormKey)).toBe(result)
    })
})

describe('getChordType', () => {
    test.each([
        // Undefined.
        [undefined, null],
        // Empty set.
        ['', null],
        // Single pitch.
        ['0', null],
        // Dyad.
        ['5', null],
        // Triad.
        ['037', 'minor'],
        ['047', 'major'],
        ['036', 'diminished'],
        ['048', 'augmented'],
        ['012', null],
        // Tetrad.
        ['0358', 'minor'],
        ['0368', 'dominant'],
        ['0158', 'major'],
        ['0148', 'minor-major'],
        ['0258', 'half-diminished'],
        ['0369', 'diminished'],
        ['0348', 'augmented major'],
        ['0123', null],
        // Greater.
        ['02468t', null],
    ])('%p returns %p', (primeFormKey, result) => {
        expect(getChordType(primeFormKey)).toBe(result)
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
        [new Set([0, 3, 7]), 'C minor triad'],
        [new Set([11, 7, 2]), 'G major triad'],
        [new Set([5, 8, 2]), 'D diminished triad'],
        [new Set([5, 1, 9]), `C${SHARP}/D${FLAT} augmented triad`],
        [new Set([11, 0, 6]), null],
        // Tetrad.
        [new Set([2, 4, 7, 11]), 'E minor seventh'],
        [new Set([11, 9, 6, 3]), 'B dominant seventh'],
        [new Set([1, 6, 5, 10]), `F${SHARP}/G${FLAT} major seventh`],
        [new Set([8, 1, 4, 0]), `C${SHARP}/D${FLAT} minor-major seventh`],
        [new Set([11, 2, 6, 8]), `G${SHARP}/A${FLAT} half-diminished seventh`],
        [new Set([9, 6, 3, 0]), `C diminished seventh`],
        [new Set([2, 9, 6, 10]), `A${SHARP}/B${FLAT} augmented major seventh`],
        [new Set([2, 0, 7, 5]), null],
        // Greater.
        [new Set([9, 3, 7, 1, 5]), null],
    ])('%p returns %p', (primeFormKey, result) => {
        expect(getChordLabel(primeFormKey)).toBe(result)
    })
})
