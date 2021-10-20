import { getAreSetsEqual, getArrayOfIndices, getFixed } from '.'

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

describe('getFixed', () => {
    test.each([
        [0, undefined, '0'],
        [5, undefined, '5'],
        [10, undefined, '10'],
        [3.7, undefined, '3.7'],
        [7.23, undefined, '7.23'],
        [4.3142, undefined, '4.31'],
        [10.8195, undefined, '10.82'],
        [7.2, 4, '7.2'],
        [8.2649135, 5, '8.26491'],
    ])('%p to %p digits returns %p', (number, digits, result) => {
        expect(getFixed(number, digits)).toStrictEqual(result)
    })
})
