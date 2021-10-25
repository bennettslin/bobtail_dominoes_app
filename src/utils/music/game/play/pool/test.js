import { exchangeDominoes, generatePool, getRandomDomino } from '.'
import { MOCK_POOL_LIST } from '../../../../../__mocks__/pool'

describe('generatePool', () => {
    it('generates and returns pool', () => {
        expect(generatePool()).toStrictEqual(new Set([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
        ]))
    })
})

describe('getRandomDomino', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('returns null if pool empty', () => {
        expect(getRandomDomino(new Set([]))).toBeNull()
    })

    it('returns lone domino and empty pool', () => {
        expect(getRandomDomino(new Set([46]))).toStrictEqual({
            dominoIndex: 46,
            pool: new Set([]),
        })
    })

    it('returns domino removed from pool', () => {
        expect(getRandomDomino(new Set(MOCK_POOL_LIST))).toStrictEqual({
            dominoIndex: 11,
            pool: new Set([4, 13, 16, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        })
    })

    it('returns mutated pool', () => {
        const
            pool = new Set(MOCK_POOL_LIST),
            { pool: returnedPool } = getRandomDomino(pool)
        expect(returnedPool).toBe(pool)
    })
})

describe('exchangeDominoes', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('returns null if exchanged dominoes are already in pool', () => {
        expect(exchangeDominoes({
            dominoIndices: [1, 21],
            pool: new Set(MOCK_POOL_LIST),
        })).toBeNull()
    })

    it('returns null if exchanged dominoes are greater than pool size', () => {
        expect(exchangeDominoes({
            dominoIndices: [1, 21],
            pool: new Set([10]),
        })).toBeNull()
    })

    it('returns for one-to-one swap', () => {
        expect(exchangeDominoes({
            dominoIndices: [5, 10, 15],
            pool: new Set([7, 12, 17]),
        })).toStrictEqual({
            dominoIndices: [7, 12, 17],
            pool: new Set([5, 10, 15]),
        })
    })

    it('returns for exchange of single domino', () => {
        expect(exchangeDominoes({
            dominoIndices: [5],
            pool: new Set(MOCK_POOL_LIST),
        })).toStrictEqual({
            dominoIndices: [11],
            pool: new Set([4, 5, 13, 16, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        })
    })

    it('returns for exchange of multiple dominoes', () => {
        expect(exchangeDominoes({
            dominoIndices: [5, 10, 15],
            pool: new Set(MOCK_POOL_LIST),
        })).toStrictEqual({
            dominoIndices: [11, 13, 16],
            pool: new Set([4, 5, 10, 15, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        })
    })

    it('returns mutated pool', () => {
        const
            pool = new Set(MOCK_POOL_LIST),
            { pool: returnedPool } = exchangeDominoes({
                dominoIndices: [5, 10, 15],
                pool,
            })
        expect(returnedPool).toBe(pool)
    })
})
