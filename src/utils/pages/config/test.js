import { getPageLinkConfig, getPagesMap, getIdPagesMap } from '.'

describe('getPageLinkConfig', () => {
    it('returns page link config', () => {
        expect(
            getPageLinkConfig({
                id: 'liz',
                date: { day: 4, month: 5, year: 2021 },
                topLevelPage: 'birthdays',
            }),
        ).toStrictEqual({
            date: { day: 4, month: 5, year: 2021 },
            id: 'liz',
        })
    })
})

describe('getPagesMap', () => {
    it('returns pages map', () => {
        expect(
            getPagesMap({
                configs: [
                    { date: { year: 2021, month: 5, day: 4 } },
                    { date: { year: 2021, month: 11, day: 13 } },
                ],
                topLevelPage: 'birthdays',
            }),
        ).toStrictEqual({
            '11-13': {
                date: { day: 13, month: 11, year: 2021 },
                topLevelPage: 'birthdays',
            },
            '5-4': {
                date: { day: 4, month: 5, year: 2021 },
                topLevelPage: 'birthdays',
            },
        })
    })
})

describe('getIdPagesMap', () => {
    it('returns pages map for ids', () => {
        expect(
            getIdPagesMap({
                pageIds: ['dogs', 'cats', 'mice'],
                topLevelPage: 'animals',
            }),
        ).toStrictEqual({
            cats: {
                directionLeftPage: { id: 'dogs' },
                directionRightPage: { id: 'mice' },
                id: 'cats',
                pages: [{ id: 'dogs' }, { id: 'cats' }, { id: 'mice' }],
                topLevelPage: 'animals',
            },
            dogs: {
                directionRightPage: { id: 'cats' },
                id: 'dogs',
                pages: [{ id: 'dogs' }, { id: 'cats' }, { id: 'mice' }],
                topLevelPage: 'animals',
            },
            mice: {
                directionLeftPage: { id: 'cats' },
                id: 'mice',
                pages: [{ id: 'dogs' }, { id: 'cats' }, { id: 'mice' }],
                topLevelPage: 'animals',
            },
        })
    })
})
