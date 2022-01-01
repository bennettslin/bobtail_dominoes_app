import { flattenDateStructuredPages, getDateValueFromMaps } from '.'

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

describe('flattenDateStructuredPages', () => {
    it('returns flattened date-structured pages', () => {
        expect(
            flattenDateStructuredPages(PARSED_DATE_STRUCTURED_PAGES),
        ).toStrictEqual([
            {
                date: { day: 13, month: 11, year: 2021 },
                topLevelPage: 'birthdays',
            }, {
                date: { day: 18, month: 11, year: 2021 },
                topLevelPage: 'birthdays',
            },
            {
                date: { day: 25, month: 12, year: 2021 },
                topLevelPage: 'birthdays',
            }, {
                date: { day: 1, month: 1, year: 2022 },
                topLevelPage: 'birthdays',
            },
        ])
    })
})
