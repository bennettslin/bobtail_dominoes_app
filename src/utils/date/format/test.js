import { formatDirectionTextForDate, formatHeadingForDate, formatMonthForDate } from '.'

describe('formatMonthForDate', () => {
    it('returns formatted month', () => {
        expect(formatMonthForDate(5)).toBe('May')
    })
})

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

describe('formatDirectionTextForDate', () => {
    it('returns false for undefined', () => {
        expect(formatDirectionTextForDate()).toBe(false)
    })

    it('returns formatted direction text for date', () => {
        expect(formatDirectionTextForDate(
            { year: 1983, month: 5, day: 4 },
        )).toBe('May 4')
    })
})
