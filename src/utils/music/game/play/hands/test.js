import { generateHands } from '.'
import { MOCK_POOL_LIST } from '../../../../../__mocks__/pool'

describe('generateHands', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('generates one hand', () => {
        expect(generateHands({
            handsCount: 1,
            pool: new Set(MOCK_POOL_LIST),
        })).toStrictEqual([
            [11, 13, 16],
        ])
    })

    it('generates four hands', () => {
        expect(generateHands({
            handsCount: 4,
            pool: new Set(MOCK_POOL_LIST),
        })).toStrictEqual([
            [11, 13, 16],
            [21, 25, 4],
            [33, 34, 40],
            [46, 49, 55],
        ])
    })

    it('generates for custom dominoes count', () => {
        expect(generateHands({
            handsCount: 2,
            dominoesCount: 5,
            pool: new Set(MOCK_POOL_LIST),
        })).toStrictEqual([
            [11, 13, 16, 21, 25],
            [4, 33, 34, 40, 46],
        ])
    })
})
