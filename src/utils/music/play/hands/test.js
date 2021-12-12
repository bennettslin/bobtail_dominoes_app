import { exchangeHand, getInitialHands, playHand } from '.'
import { MOCK_POOL_LIST } from '../../../../__mocks__/pool'
import { HAND_COUNT } from '../../../../constants/music/play'

describe('getInitialHands', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('generates one hand', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(getInitialHands({
            playersCount: 1,
            handCount: HAND_COUNT,
            pool,
        })).toStrictEqual([
            new Set([11, 13, 16]),
        ])
        expect(pool).toStrictEqual(
            new Set([3, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })

    it('generates four hands', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(getInitialHands({
            playersCount: 4,
            handCount: HAND_COUNT,
            pool,
        })).toStrictEqual([
            new Set([11, 13, 16]),
            new Set([21, 25, 3]),
            new Set([33, 34, 40]),
            new Set([46, 49, 55]),
        ])
        expect(pool).toStrictEqual(new Set([61]))
    })

    it('generates for custom hand count', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(getInitialHands({
            playersCount: 2,
            handCount: 5,
            pool,
        })).toStrictEqual([
            new Set([11, 13, 16, 21, 25]),
            new Set([3, 33, 34, 40, 46]),
        ])
        expect(pool).toStrictEqual(new Set([49, 55, 61]))
    })
})

describe('playHand', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('plays entire hand', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(playHand({
            hand: new Set([5, 10, 15]),
            handCount: HAND_COUNT,
            moves: [
                { dominoIndex: 5 },
                { dominoIndex: 10 },
                { dominoIndex: 15 },
            ],
            pool,
        })).toStrictEqual(new Set([11, 13, 16]))
        expect(pool).toStrictEqual(
            new Set([3, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })

    it('plays partial hand', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(playHand({
            hand: new Set([5, 10, 15]),
            handCount: HAND_COUNT,
            moves: [
                { dominoIndex: 10 },
                { dominoIndex: 15 },
            ],
            pool,
        })).toStrictEqual(new Set([5, 11, 13]))
        expect(pool).toStrictEqual(
            new Set([3, 16, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })

    it('returns remaining hand if empty pool', () => {
        const pool = new Set([])
        expect(playHand({
            hand: new Set([5, 10]),
            handCount: HAND_COUNT,
            moves: [{ dominoIndex: 5 }],
            pool,
        })).toStrictEqual(new Set([10]))
        expect(pool).toStrictEqual(new Set([]))
    })

    it('returns for almost empty pool', () => {
        const pool = new Set([5])
        expect(playHand({
            hand: new Set([10, 15]),
            handCount: HAND_COUNT,
            moves: [{ dominoIndex: 10 }],
            pool,
        })).toStrictEqual(new Set([5, 15]))
        expect(pool).toStrictEqual(new Set([]))
    })

    it('returns for custom hand count', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(playHand({
            hand: new Set([5, 10, 15, 20]),
            handCount: 4,
            moves: [
                { dominoIndex: 5 },
                { dominoIndex: 10 },
                { dominoIndex: 15 },
                { dominoIndex: 20 },
            ],
            pool,
        })).toStrictEqual(new Set([11, 13, 16, 21]))
        expect(pool).toStrictEqual(new Set([3, 25, 33, 34, 40, 46, 49, 55, 61]))
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
            discardedIndices: [11],
            hand: new Set([11, 13, 16]),
            pool,
        })).toBeNull()
    })

    it('returns null if exchanged indices is greater than pool size', () => {
        const pool = new Set([20])
        expect(exchangeHand({
            discardedIndices: [10, 15],
            hand: new Set([5, 10, 15]),
            pool,
        })).toBeNull()
    })

    it('returns if some domino indices are exchanged', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(exchangeHand({
            discardedIndices: [10, 15],
            hand: new Set([5, 10, 15]),
            pool,
        })).toStrictEqual(new Set([5, 11, 13]))
        expect(pool).toStrictEqual(
            new Set([3, 10, 15, 16, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })

    it('returns if all domino indices are exchanged', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(exchangeHand({
            discardedIndices: [5, 10, 15],
            hand: new Set([5, 10, 15]),
            pool,
        })).toStrictEqual(new Set([11, 13, 16]))
        expect(pool).toStrictEqual(
            new Set([3, 5, 10, 15, 21, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })

    it('returns if custom number of domino indices are exchanged', () => {
        const pool = new Set(MOCK_POOL_LIST)
        expect(exchangeHand({
            discardedIndices: [5, 10, 15, 20],
            hand: new Set([5, 10, 15, 20]),
            pool,
        })).toStrictEqual(new Set([11, 13, 16, 21]))
        expect(pool).toStrictEqual(
            new Set([3, 5, 10, 15, 20, 25, 33, 34, 40, 46, 49, 55, 61]),
        )
    })
})
