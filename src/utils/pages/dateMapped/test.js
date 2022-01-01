import { flattenDateMappedPages, flattenMonthMappedPages, flattenYearMappedPages } from '.'
import { DATE_MAPPED_PAGES } from '../../../__mocks__/dateMapped'

describe('flattenYearMappedPages', () => {
    it('returns flattened year mapped pages', () => {
        expect(
            flattenYearMappedPages(DATE_MAPPED_PAGES),
        ).toStrictEqual([{ year: 1983 }, { year: 2021 }, { year: 2022 }])
    })
})

describe('flattenMonthMappedPages', () => {
    it('returns flattened month mapped pages', () => {
        expect(
            flattenMonthMappedPages(DATE_MAPPED_PAGES),
        ).toStrictEqual([
            { month: 5, year: 1983 },
            { month: 11, year: 2021 },
            { month: 12, year: 2021 },
            { month: 1, year: 2022 },
        ])
    })
})

describe('flattenDateMappedPages', () => {
    it('returns flattened date mapped pages', () => {
        expect(
            flattenDateMappedPages(DATE_MAPPED_PAGES),
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
