import { getIsPastOrPresentDate, getCurrentDate } from '.'
import { getDateObjectForDate } from '..'

describe('getCurrentDate', () => {
    beforeAll(() => {
        global.adminCurrentDate = getDateObjectForDate(
            { year: 1983, month: 5, day: 4 },
        )
    })

    afterAll(() => {
        delete global.adminCurrentDate
    })

    it('returns current date', () => {
        expect(getCurrentDate()).toStrictEqual({ day: 4, month: 5, year: 1983 })
    })
})

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
