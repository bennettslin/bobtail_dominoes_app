import { getInitialExtendedPool, getInitialStandardPool } from '../play/pool'
import { getIntervalCountsInPool, getPitchCountsInPool } from '.'
import { MOCK_POOL_LIST } from '../../../../__mocks__/pool'

describe('getPitchCountsInPool', () => {
    it('returns pitches for empty pool', () => {
        expect(getPitchCountsInPool(new Set([]))).toStrictEqual([
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ])
    })

    it('returns pitches for partial pool', () => {
        expect(getPitchCountsInPool(new Set(MOCK_POOL_LIST))).toStrictEqual([
            2, 3, 1, 4, 1, 2, 6, 1, 1, 2, 1, 2,
        ])
    })

    it('returns pitches for initial standard pool', () => {
        expect(getPitchCountsInPool(getInitialStandardPool())).toStrictEqual([
            8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
        ])
    })

    it('returns pitches for initial extended pool', () => {
        expect(getPitchCountsInPool(getInitialExtendedPool())).toStrictEqual([
            11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
        ])
    })
})

describe('getIntervalCountsInPool', () => {
    it('returns intervalCounts for empty pool', () => {
        expect(getIntervalCountsInPool(new Set([]))).toStrictEqual([
            0, 0, 0, 0, 0, 0,
        ])
    })

    it('returns intervalCounts for partial pool', () => {
        expect(getIntervalCountsInPool(new Set(MOCK_POOL_LIST))).toStrictEqual([
            3, 3, 2, 4, 1, 0,
        ])
    })

    it('returns intervalCounts for initial standard pool', () => {
        expect(getIntervalCountsInPool(getInitialStandardPool())).toStrictEqual([
            0, 12, 12, 12, 12, 0,
        ])
    })

    it('returns intervalCounts for initial extended pool', () => {
        expect(getIntervalCountsInPool(getInitialExtendedPool())).toStrictEqual([
            12, 12, 12, 12, 12, 6,
        ])
    })
})
