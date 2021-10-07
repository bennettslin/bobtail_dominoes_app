import { formatHeadingForDate, formatWeekLinkForDate } from '.'

describe('formatHeadingForDate', () => {
    it('returns false for undefined', () => {
        expect(formatHeadingForDate()).toBe(false)
    })

    it('returns formatted header for date', () => {
        expect(formatHeadingForDate(
            { year: 1983, month: 5, day: 4 },
        )).toBe('May 4, 1983')
    })
})

describe('formatWeekLinkForDate', () => {
    it('returns formatted week link for date', () => {
        expect(formatWeekLinkForDate(
            { year: 1983, month: 5, day: 4 },
        )).toBe('5/4 - 5/10')
    })
})
