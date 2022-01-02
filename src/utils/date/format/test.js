import { formatDate } from '.'

describe('formatDate', () => {
    it('returns undefined for no date', () => {
        expect(formatDate()).toBeUndefined()
    })

    it('returns for just year', () => {
        expect(formatDate({ date: { year: 1983 } })).toBe('1983')
    })

    it('returns for just month', () => {
        expect(formatDate({ date: { month: 5 } })).toBe('May')
    })

    it('returns for just day and month', () => {
        expect(formatDate({ date: { month: 5, day: 4 } })).toBe('May 4')
    })

    it('returns for day, month, and year', () => {
        expect(
            formatDate({ date: { year: 1983, month: 5, day: 4 } }),
        ).toBe('May 4, 1983')
    })
})
