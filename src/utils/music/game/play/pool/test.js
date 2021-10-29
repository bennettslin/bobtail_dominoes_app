import { exchangeDominoIndices, getInitialExtendedPool, getInitialStandardPool, getRandomDominoIndex } from '.'
import { MOCK_POOL_LIST } from '../../../../../__mocks__/pool'

describe('getInitialStandardPool', () => {
    it('generates and returns pool', () => {
        expect(getInitialStandardPool()).toStrictEqual(new Set([
            2, 3, 4, 5, 7, 8, 9, 10, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25, 26, 28, 29, 30, 32, 33, 34, 35, 37, 38, 40, 41, 42, 43, 45, 47, 48, 49, 50, 53, 54, 55, 56, 58, 59, 60, 62, 63, 65,
        ]))
    })
})

describe('getInitialExtendedPool', () => {
    it('generates and returns pool', () => {
        expect(getInitialExtendedPool()).toStrictEqual(new Set([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
        ]))
    })
})

describe('getRandomDominoIndex', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('returns 0 if pool is empty', () => {
        const pool = new Set([])
        expect(getRandomDominoIndex(pool)).toBe(0)
        expect(pool).toStrictEqual(new Set([]))
    })

    it('returns last domino removed from pool', () => {
        const pool = new Set([46])
        expect(getRandomDominoIndex(pool)).toBe(46)
        expect(pool).toStrictEqual(new Set([]))
    })

    it('returns domino removed from pool', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(getRandomDominoIndex(pool)).toBe(11)
        expect(pool).toStrictEqual(
            new Set([3, 13, 16, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })
})

describe('exchangeDominoIndices', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('returns null if exchanged dominoes are already in pool', () => {
        expect(exchangeDominoIndices({
            discardedIndices: [1, 21],
            pool: new Set(MOCK_POOL_LIST),
        })).toBeNull()
    })

    it('returns null if exchanged dominoes are greater than pool size', () => {
        expect(exchangeDominoIndices({
            discardedIndices: [1, 21],
            pool: new Set([10]),
        })).toBeNull()
    })

    it('returns for one-to-one swap', () => {
        const pool = new Set([7, 12, 17])
        expect(exchangeDominoIndices({
            discardedIndices: [5, 10, 15],
            pool,
        })).toStrictEqual([7, 12, 17])
        expect(pool).toStrictEqual(new Set([5, 10, 15]))
    })

    it('returns for exchange of single domino', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(exchangeDominoIndices({
            discardedIndices: [5],
            pool,
        })).toStrictEqual([11])
        expect(pool).toStrictEqual(
            new Set([3, 5, 13, 16, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })

    it('returns for exchange of multiple dominoes', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(exchangeDominoIndices({
            discardedIndices: [5, 10, 15],
            pool,
        })).toStrictEqual([11, 13, 16])
        expect(pool).toStrictEqual(
            new Set([3, 5, 10, 15, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })
})
