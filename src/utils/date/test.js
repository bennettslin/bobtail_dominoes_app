import { getDateForDateObject, getDateObjectForDate, addDaysToDate } from '.'

describe('getDateForDateObject', () => {
    it('returns date for date object', () => {
        expect(getDateForDateObject(
            new Date(1983, 4, 4),
        )).toStrictEqual({ year: 1983, month: 5, day: 4 })
    })
})

describe('getDateObjectForDate', () => {
    it('returns date object for date', () => {
        expect(getDateObjectForDate(
            { year: 1983, month: 5, day: 4 },
        )).toStrictEqual(new Date(1983, 4, 4))
    })
})

describe('addDaysToDate', () => {
    it('returns incremented date', () => {
        expect(addDaysToDate(
            { year: 1983, month: 5, day: 4 },
            31,
        )).toStrictEqual({ year: 1983, month: 6, day: 4 })
    })
})
