import { getIsPastOrPresentDate, filterPastAndPresentDates } from '.'
import { getDateObjectForDate } from '..'

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

describe('filterPastAndPresentDates', () => {
    beforeAll(() => {
        global.adminCurrentDate = getDateObjectForDate(
            { year: 1983, month: 5, day: 4 },
        )
    })

    afterAll(() => {
        delete global.adminCurrentDate
    })

    it('filters list of dates', () => {
        expect(filterPastAndPresentDates([
            { year: 1983, month: 5, day: 3 },
            { year: 1983, month: 5, day: 4 },
            { year: 1983, month: 5, day: 5 },
        ])).toStrictEqual([
            { year: 1983, month: 5, day: 3 },
            { year: 1983, month: 5, day: 4 },
        ])
    })

    it('filters list of objects with dates', () => {
        expect(filterPastAndPresentDates([
            { date: { year: 1983, month: 5, day: 3 } },
            { date: { year: 1983, month: 5, day: 4 } },
            { date: { year: 1983, month: 5, day: 5 } },
        ])).toStrictEqual([
            { date: { year: 1983, month: 5, day: 3 } },
            { date: { year: 1983, month: 5, day: 4 } },
        ])
    })
})
