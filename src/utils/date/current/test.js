import { getIsPastOrPresentDate, getCurrentDate, filterDateStructuredPages } from '.'
import { getDateObjectForDate } from '..'

describe('getCurrentDate', () => {
    beforeAll(() => {
        global.adminCurrentDate = getDateObjectForDate(
            { year: 1983, month: 5, day: 4 },
        )
    })

    afterAll(() => {
        delete global.adminCurrentDate
    })

    it('returns current date', () => {
        expect(getCurrentDate()).toStrictEqual({ day: 4, month: 5, year: 1983 })
    })
})

describe('getIsPastOrPresentDate', () => {
    beforeAll(() => {
        global.adminCurrentDate = getDateObjectForDate(
            { year: 1983, month: 5, day: 4 },
        )
    })

    afterAll(() => {
        delete global.adminCurrentDate
    })

    it('returns true for past date', () => {
        expect(getIsPastOrPresentDate(
            { year: 1983, month: 5, day: 3 },
        )).toBe(true)
    })

    it('returns true for present date', () => {
        expect(getIsPastOrPresentDate(
            { year: 1983, month: 5, day: 4 },
        )).toBe(true)
    })

    it('returns false for future date', () => {
        expect(getIsPastOrPresentDate(
            { year: 1983, month: 5, day: 5 },
        )).toBe(false)
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
