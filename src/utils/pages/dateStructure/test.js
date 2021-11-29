import { flattenDateStructuredPages, getDateValueFromMaps, parseDateStructuredPages } from '.'

const PARSED_DATE_STRUCTURED_PAGES = [
    {
        2021: [
            {
                11: [
                    {
                        date: { day: 13, month: 11, year: 2021 },
                        topLevelPage: 'birthdays',
                    },
                    {
                        date: { day: 18, month: 11, year: 2021 },
                        topLevelPage: 'birthdays',
                    },
                ],
            },
            {
                12: [
                    {
                        date: { day: 25, month: 12, year: 2021 },
                        topLevelPage: 'birthdays',
                    },
                ],
            },
        ],
    },
    {
        2022: [
            {
                1: [
                    {
                        date: { day: 1, month: 1, year: 2022 },
                        topLevelPage: 'birthdays',
                    },
                ],
            },
        ],
    },
]

describe('getDateValueFromMaps', () => {
    it('returns date value from maps', () => {
        expect(
            getDateValueFromMaps({ 2021: {} }),
        ).toBe(2021)
    })
})

describe('parseDateStructuredPages', () => {
    it('returns date-structured pages', () => {
        expect(
            parseDateStructuredPages({
                dateStructuredPages: [
                    {
                        2021: [
                            {
                                11: [
                                    { day: 13 },
                                    { day: 18 },
                                ],
                            },
                            {
                                12: [
                                    { day: 25 },
                                ],
                            },
                        ],
                    },
                    {
                        2022: [
                            {
                                1: [
                                    { day: 1 },
                                ],
                            },
                        ],
                    },
                ],
                topLevelPage: 'birthdays',
            }),
        ).toStrictEqual(PARSED_DATE_STRUCTURED_PAGES)
    })
})

describe('flattenDateStructuredPages', () => {
    it('returns flattened date-structured pages', () => {
        expect(
            flattenDateStructuredPages(PARSED_DATE_STRUCTURED_PAGES),
        ).toStrictEqual([
            {
                context: {
                    pageMap: {
                        date: { day: 13, month: 11, year: 2021 },
                        topLevelPage: 'birthdays',
                    },
                },
                path: 'birthdays/2021/11-13',
            },
            {
                context: {
                    pageMap: {
                        date: { day: 18, month: 11, year: 2021 },
                        topLevelPage: 'birthdays',
                    },
                },
                path: 'birthdays/2021/11-18',
            },
            {
                context: {
                    pageMap: {
                        date: { day: 25, month: 12, year: 2021 },
                        topLevelPage: 'birthdays',
                    },
                },
                path: 'birthdays/2021/12-25',
            },
            {
                context: {
                    pageMap: {
                        date: { day: 1, month: 1, year: 2022 },
                        topLevelPage: 'birthdays',
                    },
                },
                path: 'birthdays/2022/1-1',
            },
        ])
    })
})
