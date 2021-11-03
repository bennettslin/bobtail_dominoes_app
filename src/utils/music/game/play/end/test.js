import { getIsGameEnd } from '.'
import { MOCK_POOL_LIST } from '../../../../../__mocks__/pool'
import { MOCK_MOVE_1, MOCK_MOVE_2, MOCK_TURNS } from '../../../../../__mocks__/turns'

describe('getIsGameEnd', () => {
    it('returns false if no conditions are met', () => {
        expect(getIsGameEnd({
            pool: new Set(MOCK_POOL_LIST),
            hands: [new Set([5, 10]), new Set([15, 20])],
            turns: [...MOCK_TURNS],
            playersCount: 2,
        })).toBe(false)
    })

    it('returns true if pool and hands are empty', () => {
        expect(getIsGameEnd({
            pool: new Set([]),
            hands: [new Set([]), new Set([]), new Set([])],
            turns: [...MOCK_TURNS],
            playersCount: 3,
        })).toBe(true)
    })

    it('returns false if has no moves but game is too early', () => {
        expect(getIsGameEnd({
            pool: new Set(MOCK_POOL_LIST),
            hands: [new Set([15]), new Set([20]), new Set([30])],
            turns: [
                ...MOCK_TURNS,
                { discardedIndices: [5] },
                { discardedIndices: [10] },
            ],
            playersCount: 3,
        })).toBe(false)
    })

    it('returns false if has no moves but not enough turns passed', () => {
        expect(getIsGameEnd({
            pool: new Set(MOCK_POOL_LIST),
            hands: [new Set([15]), new Set([20]), new Set([30])],
            turns: [
                ...MOCK_TURNS,
                { discardedIndices: [5] },
                { discardedIndices: [10] },
                { discardedIndices: [35] },
                { discardedIndices: [45] },
                { discardedIndices: [50] },
            ],
            playersCount: 3,
        })).toBe(false)
    })

    it('returns true if has no moves and enough turns passed', () => {
        expect(getIsGameEnd({
            pool: new Set(MOCK_POOL_LIST),
            hands: [new Set([15]), new Set([20]), new Set([30])],
            turns: [
                ...MOCK_TURNS,
                { discardedIndices: [5] },
                { discardedIndices: [10] },
                { discardedIndices: [35] },
                { discardedIndices: [45] },
                { discardedIndices: [50] },
                { discardedIndices: [60] },
            ],
            playersCount: 3,
        })).toBe(true)
    })

    it('returns false if empty pool but game is too early', () => {
        expect(getIsGameEnd({
            pool: new Set(MOCK_POOL_LIST),
            hands: [new Set([15]), new Set([20])],
            turns: [
                ...MOCK_TURNS,
                { ...MOCK_MOVE_2, isEmptyPool: true },
            ],
            playersCount: 2,
        })).toBe(false)
    })

    it('returns false if empty pool but not enough turns passed', () => {
        expect(getIsGameEnd({
            pool: new Set(MOCK_POOL_LIST),
            hands: [new Set([15]), new Set([20])],
            turns: [
                ...MOCK_TURNS,
                { ...MOCK_MOVE_2, isEmptyPool: true },
                { ...MOCK_MOVE_1, isEmptyPool: true },
            ],
            playersCount: 2,
        })).toBe(false)
    })

    it('returns true if empty pool and enough turns passed', () => {
        expect(getIsGameEnd({
            pool: new Set(MOCK_POOL_LIST),
            hands: [new Set([15]), new Set([20])],
            turns: [
                ...MOCK_TURNS,
                { ...MOCK_MOVE_2, isEmptyPool: true },
                { ...MOCK_MOVE_1, isEmptyPool: true },
                { ...MOCK_MOVE_2, isEmptyPool: true },
            ],
            playersCount: 2,
        })).toBe(true)
    })
})
