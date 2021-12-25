import { getPagesMap, getPagesMapForIds } from '.'

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
                directionLeftPage: {
                    date: { day: 4, month: 5, year: 2021 },
                },
                topLevelPage: 'birthdays',
            },
            '5-4': {
                date: { day: 4, month: 5, year: 2021 },
                directionRightPage: {
                    date: { day: 13, month: 11, year: 2021 },
                },
                topLevelPage: 'birthdays',
            },
        })
    })
})

describe('getPagesMapForIds', () => {
    it('returns pages map for ids', () => {
        expect(
            getPagesMapForIds({
                pageIds: ['dogs', 'cats', 'mice'],
                topLevelPage: 'animals',
            }),
        ).toStrictEqual({
            cats: {
                directionLeftPage: { id: 'dogs' },
                directionRightPage: { id: 'mice' },
                id: 'cats',
                topLevelPage: 'animals',
            },
            dogs: {
                directionRightPage: { id: 'cats' },
                id: 'dogs',
                topLevelPage: 'animals',
            },
            mice: {
                directionLeftPage: { id: 'cats' },
                id: 'mice',
                topLevelPage: 'animals',
            },
        })
    })
})
