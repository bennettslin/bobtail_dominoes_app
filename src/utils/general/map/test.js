import { getFirstIntegerKeyInMap, getKeyedListFromMap, getListFromMap } from '.'

describe('getFirstIntegerKeyInMap', () => {
    it('returns date value from maps', () => {
        expect(
            getFirstIntegerKeyInMap({ 2021: {} }),
        ).toBe(2021)
    })
})

describe('getListFromMap', () => {
    it('returns list from map', () => {
        expect(
            getListFromMap({
                5: { 4: {} },
                11: { 13: {} },
            }),
        ).toStrictEqual([{ 4: {} }, { 13: {} }])
    })
})

describe('getKeyedListFromMap', () => {
    it('returns keyed list from map', () => {
        expect(
            getKeyedListFromMap({
                5: { 4: {} },
                11: { 13: {} },
            }),
        ).toStrictEqual([{ 5: { 4: {} } }, { 11: { 13: {} } }])
    })
})
