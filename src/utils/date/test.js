import {
    getDateForDateObject, getDateObjectForDate, addDaysToDate, getFirstDayOfMonth, getFirstDayOfNextMonth, getIsSameDate,
} from '.'

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

describe('getIsSameDate', () => {
    it('returns false if either date does not exist', () => {
        expect(
            getIsSameDate(),
        ).toBe(false)
    })

    it('returns false if future date', () => {
        expect(
            getIsSameDate(
                { year: 1983, month: 5, day: 4 },
                { year: 1988, month: 8, day: 22 },
            ),
        ).toBe(false)
    })

    it('returns false if past date', () => {
        expect(
            getIsSameDate(
                { year: 1988, month: 8, day: 22 },
                { year: 1983, month: 5, day: 4 },
            ),
        ).toBe(false)
    })

    it('returns true if same date', () => {
        expect(
            getIsSameDate(
                { year: 1983, month: 5, day: 4 },
                { year: 1983, month: 5, day: 4 },
            ),
        ).toBe(true)
    })
})

describe('getFirstDayOfMonth', () => {
    it('returns first day of month', () => {
        expect(
            getFirstDayOfMonth({ year: 1983, month: 5, day: 4 }),
        ).toStrictEqual({ year: 1983, month: 5, day: 1 })
    })
})

describe('getFirstDayOfNextMonth', () => {
    it('returns first day of next month', () => {
        expect(
            getFirstDayOfNextMonth({ year: 1983, month: 5, day: 4 }),
        ).toStrictEqual({ year: 1983, month: 6, day: 1 })
    })
})
