import { fillHand, exchangeHand, generateHands } from '.'
import { MOCK_POOL_LIST } from '../../../../../__mocks__/pool'

describe('generateHands', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('generates one hand', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(generateHands({
            handsCount: 1,
            pool,
        })).toStrictEqual([
            new Set([11, 13, 16]),
        ])
        expect(pool).toStrictEqual(
            new Set([4, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })

    it('generates four hands', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(generateHands({
            handsCount: 4,
            pool,
        })).toStrictEqual([
            new Set([11, 13, 16]),
            new Set([21, 25, 4]),
            new Set([33, 34, 40]),
            new Set([46, 49, 55]),
        ])
        expect(pool).toStrictEqual(new Set([61]))
    })

    it('generates for custom hand count', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(generateHands({
            handsCount: 2,
            handCount: 5,
            pool,
        })).toStrictEqual([
            new Set([11, 13, 16, 21, 25]),
            new Set([4, 33, 34, 40, 46]),
        ])
        expect(pool).toStrictEqual(new Set([49, 55, 61]))
    })
})

describe('fillHand', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('returns for full hand', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(fillHand({ hand: new Set([5, 10, 15]), pool })).toStrictEqual(
            new Set([5, 10, 15]),
        )
        expect(pool).toStrictEqual(
            new Set([4, 11, 13, 16, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })

    it('returns for empty hand', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(fillHand({ hand: new Set([]), pool })).toStrictEqual(
            new Set([11, 13, 16]),
        )
        expect(pool).toStrictEqual(
            new Set([4, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })

    it('returns for incomplete hand', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(fillHand({ hand: new Set([1]), pool })).toStrictEqual(
            new Set([1, 11, 13]),
        )
        expect(pool).toStrictEqual(
            new Set([4, 16, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })

    it('returns for empty pool', () => {
        const pool = new Set([])
        expect(fillHand({ hand: new Set([1]), pool })).toStrictEqual(
            new Set([1]),
        )
        expect(pool).toStrictEqual(new Set([]))
    })

    it('returns for almost empty pool', () => {
        const pool = new Set([5])
        expect(fillHand({ hand: new Set([]), pool })).toStrictEqual(
            new Set([5]),
        )
        expect(pool).toStrictEqual(new Set([]))
    })

    it('returns for custom hand count', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(fillHand({
            hand: new Set([]),
            handCount: 7,
            pool,
        })).toStrictEqual(new Set([11, 13, 16, 21, 25, 4, 33]))
        expect(pool).toStrictEqual(new Set([34, 40, 46, 49, 55, 61]))
    })
})

describe('exchangeHand', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('returns null if pool already has domino indices', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(exchangeHand({
            exchangedIndices: [11],
            hand: new Set([11, 13, 16]),
            pool,
        })).toBeNull()
    })

    it('returns null if exchanged indices is greater than pool size', () => {
        const pool = new Set([20])
        expect(exchangeHand({
            exchangedIndices: [10, 15],
            hand: new Set([5, 10, 15]),
            pool,
        })).toBeNull()
    })

    it('returns if some domino indices are exchanged', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(exchangeHand({
            exchangedIndices: [10, 15],
            hand: new Set([5, 10, 15]),
            pool,
        })).toStrictEqual(new Set([5, 11, 13]))
        expect(pool).toStrictEqual(
            new Set([4, 10, 15, 16, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })

    it('returns if all domino indices are exchanged', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(exchangeHand({
            exchangedIndices: [5, 10, 15],
            hand: new Set([5, 10, 15]),
            pool,
        })).toStrictEqual(new Set([11, 13, 16]))
        expect(pool).toStrictEqual(
            new Set([4, 5, 10, 15, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })

    it('returns if custom number of domino indices are exchanged', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(exchangeHand({
            exchangedIndices: [5, 10, 15, 20],
            hand: new Set([5, 10, 15, 20]),
            pool,
        })).toStrictEqual(new Set([11, 13, 16, 21]))
        expect(pool).toStrictEqual(
            new Set([4, 5, 10, 15, 20, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })
})
