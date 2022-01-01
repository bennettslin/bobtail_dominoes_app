import { flattenDateStructuredPages, flattenMonthStructuredPages, flattenYearStructuredPages } from '.'
import { DATE_STRUCTURED_PAGES } from '../../../__mocks__/dateStructuredPages'

describe('flattenYearStructuredPages', () => {
    it('returns flattened year-structured pages', () => {
        expect(
            flattenYearStructuredPages(DATE_STRUCTURED_PAGES),
        ).toStrictEqual([{ year: 1983 }, { year: 2021 }, { year: 2022 }])
    })
})

describe('flattenMonthStructuredPages', () => {
    it('returns flattened month-structured pages', () => {
        expect(
            flattenMonthStructuredPages(DATE_STRUCTURED_PAGES),
        ).toStrictEqual([
            { month: 5, year: 1983 },
            { month: 11, year: 2021 },
            { month: 12, year: 2021 },
            { month: 1, year: 2022 },
        ])
    })
})

describe('flattenDateStructuredPages', () => {
    it('returns flattened date-structured pages', () => {
        expect(
            flattenDateStructuredPages(DATE_STRUCTURED_PAGES),
        ).toStrictEqual([
            {
                date: { day: 5, month: 4, year: 1983 },
                topLevelPage: 'birthdays',
            },
            {
                date: { day: 13, month: 11, year: 2021 },
                topLevelPage: 'birthdays',
            },
            {
                date: { day: 18, month: 11, year: 2021 },
                topLevelPage: 'birthdays',
            },
            {
                date: { day: 25, month: 12, year: 2021 },
                topLevelPage: 'birthdays',
            },
            {
                date: { day: 1, month: 1, year: 2022 },
                topLevelPage: 'birthdays',
            },
        ])
    })
})
