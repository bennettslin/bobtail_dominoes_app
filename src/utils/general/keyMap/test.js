import { getFirstNumberKeyInMap, getEntryListFromMap, getValueListFromMap, getNumberKeysFromMap } from '.'

describe('getFirstNumberKeyInMap', () => {
    it('returns first number key in map', () => {
        expect(
            getFirstNumberKeyInMap({ 2021: {} }),
        ).toBe(2021)
    })
})

describe('getValueListFromMap', () => {
    it('returns value list from map', () => {
        expect(
            getValueListFromMap({
                5: { 4: {} },
                11: { 13: {} },
            }),
        ).toStrictEqual([
            { 4: {} },
            { 13: {} },
        ])
    })
})

describe('getEntryListFromMap', () => {
    it('returns entry list from map', () => {
        expect(
            getEntryListFromMap({
                5: { 4: {} },
                11: { 13: {} },
            }),
        ).toStrictEqual([
            { 5: { 4: {} } },
            { 11: { 13: {} } },
        ])
    })
})

describe('getNumberKeysFromMap', () => {
    it('returns number keys from map', () => {
        expect(
            getNumberKeysFromMap({
                5: { 4: {} },
                11: { 13: {} },
            }),
        ).toStrictEqual([5, 11])
    })
})
