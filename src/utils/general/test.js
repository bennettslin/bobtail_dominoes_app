import { getAreSetsEqual, getArrayOfIndices } from '.'

describe('getAreSetsEqual', () => {
    it('returns false for sets of unequal size', () => {
        expect(getAreSetsEqual(
            new Set([0, 1, 2, 3, 4]),
            new Set([0, 1, 2, 3, 4, 5]),
        )).toBe(false)
    })

    it('returns false for unequal sets of equal size', () => {
        expect(getAreSetsEqual(
            new Set([0, 1, 2, 3, 4]),
            new Set([0, 1, 2, 3, 5]),
        )).toBe(false)
    })

    it('returns true for equal sets', () => {
        expect(getAreSetsEqual(
            new Set([0, 1, 2, 3, 4]),
            new Set([0, 1, 2, 3, 4]),
        )).toBe(true)
    })
})

describe('getArrayOfIndices', () => {
    it('returns array with given length', () => {
        expect(getArrayOfIndices(6)).toStrictEqual([0, 1, 2, 3, 4, 5])
    })

    it('returns array with given base index', () => {
        expect(getArrayOfIndices(3, 7)).toStrictEqual([7, 8, 9])
    })
})
