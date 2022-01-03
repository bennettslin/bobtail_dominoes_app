import { getPageLinkConfig, getIdPagesMap, getPagesList } from '.'

describe('getPageLinkConfig', () => {
    it('returns page link config', () => {
        expect(
            getPageLinkConfig({
                id: 'liz',
                date: { day: 4, month: 5, year: 2021 },
                topLevelPage: 'birthdays',
            }),
        ).toStrictEqual({
            id: 'liz',
            date: { day: 4, month: 5, year: 2021 },
        })
    })
})

describe('getPagesList', () => {
    it('returns pages list for ids', () => {
        expect(
            getPagesList({
                pageIds: ['dogs', 'cats', 'mice'],
                topLevelPage: 'animals',
            }),
        ).toStrictEqual([
            {
                directionRightPage: { id: 'cats' },
                id: 'dogs',
                pages: [{ id: 'dogs' }, { id: 'cats' }, { id: 'mice' }],
                topLevelPage: 'animals',
            },
            {
                directionLeftPage: { id: 'dogs' },
                directionRightPage: { id: 'mice' },
                id: 'cats',
                pages: [{ id: 'dogs' }, { id: 'cats' }, { id: 'mice' }],
                topLevelPage: 'animals',
            },
            {
                directionLeftPage: { id: 'cats' },
                id: 'mice',
                pages: [{ id: 'dogs' }, { id: 'cats' }, { id: 'mice' }],
                topLevelPage: 'animals',
            },
        ])
    })

    it('returns pages list for dates', () => {
        expect(
            getPagesList({
                pageDates: [
                    { year: 2021, month: 5, day: 4 },
                    { year: 2021, month: 11, day: 13 },
                ],
                topLevelPage: 'birthdays',
            }),
        ).toStrictEqual([
            {
                date: { day: 4, month: 5, year: 2021 },
                directionRightPage: {
                    date: { day: 13, month: 11, year: 2021 },
                },
                pages: [
                    { date: { day: 4, month: 5, year: 2021 } },
                    { date: { day: 13, month: 11, year: 2021 } },
                ],
                topLevelPage: 'birthdays',
            },
            {
                date: { day: 13, month: 11, year: 2021 },
                directionLeftPage: {
                    date: { day: 4, month: 5, year: 2021 },
                },
                pages: [
                    { date: { day: 4, month: 5, year: 2021 } },
                    { date: { day: 13, month: 11, year: 2021 } },
                ],
                topLevelPage: 'birthdays',
            },
        ])
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
