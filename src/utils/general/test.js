import { getAreSetsEqual } from '.'

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
