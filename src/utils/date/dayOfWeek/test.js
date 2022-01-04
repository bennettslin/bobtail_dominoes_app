import { getDayOfWeekIndex } from '.'

describe('getDayOfWeekIndex', () => {
    it('returns day of week index for date', () => {
        expect(getDayOfWeekIndex(
            { year: 1983, month: 5, day: 4 },
        )).toBe(3)
    })
})
