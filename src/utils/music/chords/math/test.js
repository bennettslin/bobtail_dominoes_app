import {
    modOctave,
    getArrayOfPitches,
    getArrayOfPitchesForCircleOfFifths,
    transposePitchSet,
} from '.'

describe('modOctave', () => {
    it('returns correct number for less than zero', () => {
        expect(modOctave(-5)).toBe(7)
    })

    it('returns same number for less than 12', () => {
        expect(modOctave(5)).toBe(5)
    })

    it('returns correct number for 12', () => {
        expect(modOctave(12)).toBe(0)
    })

    it('returns correct number for greater than 12', () => {
        expect(modOctave(15)).toBe(3)
    })
})

describe('transposePitchSet', () => {
    test.each([
        // Undefined.
        [undefined, 0, new Set()],
        // Empty set.
        [new Set(), 1, new Set()],
        // Single pitch.
        [new Set([3]), 2, new Set([5])],
        // Dyad.
        [new Set([3, 10]), -2, new Set([1, 8])],
        // Triad.
        [new Set([0, 3, 7]), 3, new Set([3, 6, 10])], // Chord.
        // Tetrad.
        [new Set([2, 4, 7, 11]), -3, new Set([11, 1, 4, 8])], // Chord.
    ])('%p transposed by %p yields %p', (set, direction, result) => {
        expect(transposePitchSet(set, direction)).toStrictEqual(result)
    })
})

describe('getArrayOfPitches', () => {
    it('returns array of all twelve pitches', () => {
        expect(
            getArrayOfPitches(),
        ).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    })
})

describe('getArrayOfPitchesForCircleOfFifths', () => {
    it('returns array of all twelve pitches', () => {
        expect(
            getArrayOfPitchesForCircleOfFifths(),
        ).toStrictEqual([0, 11, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6])
    })
})
