import { getChordType, getRootIndex } from '.'

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

describe('getRootIndex', () => {
    test.each([
        // Undefined.
        [undefined, -1],
        // Empty set.
        ['', -1],
        // Single pitch.
        ['0', -1],
        // Dyad.
        ['5', -1],
        // Triad.
        ['037', 0],
        ['047', 0],
        ['036', 0],
        ['048', 0],
        ['012', -1],
        // Tetrad.
        ['0358', 2],
        ['0368', 3],
        ['0158', 1],
        ['0148', 1],
        ['0258', 1],
        ['0369', 0],
        ['0348', 2],
        ['0123', -1],
        // Greater.
        ['02468t', -1],
    ])('%p returns root index %p', (primeFormKey, result) => {
        expect(getRootIndex(primeFormKey)).toBe(result)
    })
})
