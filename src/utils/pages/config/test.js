import { getPagePathFromConfig, getPagesMap, getPagesMapForIds } from '.'

describe('getPagesMap', () => {
    it('returns pages map', () => {
        expect(
            getPagesMap(
                [
                    { date: { year: 2021, month: 5, day: 4 } },
                    { date: { year: 2021, month: 11, day: 13 } },
                ],
                'birthdays',
            ),
        ).toStrictEqual({
            '5-4': {
                date: { day: 4, month: 5, year: 2021 },
                pages: [
                    { date: { day: 4, month: 5, year: 2021 } },
                    { date: { day: 13, month: 11, year: 2021 } },
                ],
                topLevelPage: 'birthdays',
            },
            '11-13': {
                date: { day: 13, month: 11, year: 2021 },
                pages: [
                    { date: { day: 4, month: 5, year: 2021 } },
                    { date: { day: 13, month: 11, year: 2021 } },
                ],
                topLevelPage: 'birthdays',
            },
        })
    })
})

describe('getPagesMapForIds', () => {
    it('returns pages map for ids', () => {
        expect(
            getPagesMapForIds(
                ['dogs', 'cats', 'mice'],
                'animals',
            ),
        ).toStrictEqual({
            cats: {
                id: 'cats',
                pages: [{ id: 'dogs' }, { id: 'cats' }, { id: 'mice' }],
                topLevelPage: 'animals',
            },
            dogs: {
                id: 'dogs',
                pages: [{ id: 'dogs' }, { id: 'cats' }, { id: 'mice' }],
                topLevelPage: 'animals',
            },
            mice: {
                id: 'mice',
                pages: [{ id: 'dogs' }, { id: 'cats' }, { id: 'mice' }],
                topLevelPage: 'animals',
            },
        },
        )
    })
})

describe('getPagePathFromConfig', () => {
    it('returns page path from config', () => {
        expect(
            getPagePathFromConfig({
                topLevelPage: 'birthdays',
                id: 'bennett',
                date: { year: 2021, month: 11, day: 13 },
            }),
        ).toBe('birthdays/2021/11-13/bennett')
    })
})
