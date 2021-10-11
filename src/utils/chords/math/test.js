import { mod12, getArrayOfPitches, getArrayOfPitchesForCircleOfFifths } from '.'

describe('mod12', () => {
    it('returns correct number for less than zero', () => {
        expect(mod12(-5)).toBe(7)
    })

    it('returns same number for less than 12', () => {
        expect(mod12(5)).toBe(5)
    })

    it('returns correct number for 12', () => {
        expect(mod12(12)).toBe(0)
    })

    it('returns correct number for greater than 12', () => {
        expect(mod12(15)).toBe(3)
    })
})

describe('getArrayOfPitches', () => {
    it('returns array of all twelve pitches', () => {
        expect(
            getArrayOfPitches(),
        ).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    })
})

describe('getArrayOfPitches', () => {
    it('returns array of all twelve pitches', () => {
        expect(
            getArrayOfPitchesForCircleOfFifths(),
        ).toStrictEqual([0, 11, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6])
    })
})
