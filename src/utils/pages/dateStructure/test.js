import { filterDateStructuredPages, flattenDateStructuredPages, parseDateStructuredPages } from '.'
import { getDateObjectForDate } from '../../date'

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

describe('filterDateStructuredPages', () => {
    beforeAll(() => {
        global.adminCurrentDate = getDateObjectForDate(
            { year: 1983, month: 5, day: 4 },
        )
    })

    afterAll(() => {
        delete global.adminCurrentDate
    })

    it('returns filtered date-structured pages', () => {
        expect(
            filterDateStructuredPages([
                {
                    1982: [
                        {
                            12: [
                                { date: { day: 1, month: 12, year: 1982 } },
                            ],
                        },
                    ],
                },
                {
                    1983: [
                        {
                            4: [
                                { date: { day: 12, month: 4, year: 1983 } },
                            ],
                        },
                        {
                            5: [
                                { date: { day: 3, month: 5, year: 1983 } },
                                { date: { day: 4, month: 5, year: 1983 } },
                                { date: { day: 5, month: 5, year: 1983 } },
                            ],
                        },
                        {
                            6: [
                                { date: { day: 3, month: 6, year: 1983 } },
                            ],
                        },
                    ],
                },
                {
                    1984: [
                        {
                            3: [
                                { date: { day: 15, month: 3, year: 1984 } },
                            ],
                        },
                    ],
                },
            ]),
        ).toStrictEqual([
            {
                1982: [
                    {
                        12: [
                            { date: { day: 1, month: 12, year: 1982 } },
                        ],
                    },
                ],
            }, {
                1983: [
                    {
                        4: [
                            { date: { day: 12, month: 4, year: 1983 } },
                        ],
                    }, {
                        5: [
                            { date: { day: 3, month: 5, year: 1983 } },
                            { date: { day: 4, month: 5, year: 1983 } },
                        ],
                    },
                ],
            },
        ])
    })
})
