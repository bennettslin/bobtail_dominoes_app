import {
    flattenDateStructuredPages, flattenMonthStructuredPages, flattenYearStructuredPages, getDateValueFromMaps, getKeyedListFromMap, getListFromMap,
} from '.'
import { DATE_STRUCTURED_PAGES } from '../../../__mocks__/dateStructuredPages'

describe('getDateValueFromMaps', () => {
    it('returns date value from maps', () => {
        expect(
            getDateValueFromMaps({ 2021: {} }),
        ).toBe(2021)
    })
})

describe('getListFromMap', () => {
    it('returns list from map', () => {
        expect(
            getListFromMap({
                5: { 4: {} },
                11: { 13: {} },
            }),
        ).toStrictEqual([{ 4: {} }, { 13: {} }])
    })
})

describe('getKeyedListFromMap', () => {
    it('returns keyed list from map', () => {
        expect(
            getKeyedListFromMap({
                5: { 4: {} },
                11: { 13: {} },
            }),
        ).toStrictEqual([{ 5: { 4: {} } }, { 11: { 13: {} } }])
    })
})

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
