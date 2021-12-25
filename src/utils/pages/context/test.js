import { contextualisePageConfigs } from '.'

describe('contextualisePageConfigs', () => {
    it('returns contextualized page maps', () => {
        expect(
            contextualisePageConfigs([
                {
                    date: { year: 2021, month: 5, day: 4 },
                    topLevelPage: 'birthdays',
                },
                {
                    date: { year: 2021, month: 11, day: 13 },
                    topLevelPage: 'birthdays',
                },
            ]),
        ).toStrictEqual([
            {
                context: {
                    pageMap: {
                        date: { day: 4, month: 5, year: 2021 },
                        topLevelPage: 'birthdays',
                    },
                },
                path: 'birthdays/2021/5-4',
            },
            {
                context: {
                    pageMap: {
                        date: { day: 13, month: 11, year: 2021 },
                        topLevelPage: 'birthdays',
                    },
                },
                path: 'birthdays/2021/11-13',
            },
        ])
    })
})
