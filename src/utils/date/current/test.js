import { getIsTimeEligibleDate, getCurrentDate } from '.'
import { getAfterAll, getBeforeAll } from '../../../__mocks__/currentDate'

describe('getCurrentDate', () => {
    beforeAll(getBeforeAll())
    afterAll(getAfterAll())

    it('returns current date', () => {
        expect(
            getCurrentDate(),
        ).toStrictEqual({ day: 4, month: 5, year: 1983 })
    })
})

describe('getIsTimeEligibleDate', () => {
    beforeAll(getBeforeAll())
    afterAll(getAfterAll())

    it('returns true for past date', () => {
        expect(getIsTimeEligibleDate(
            { year: 1983, month: 5, day: 3 },
        )).toBe(true)
    })

    it('returns true for present date', () => {
        expect(getIsTimeEligibleDate(
            { year: 1983, month: 5, day: 4 },
        )).toBe(true)
    })

    it('returns false for future date', () => {
        expect(getIsTimeEligibleDate(
            { year: 1983, month: 5, day: 5 },
        )).toBe(false)
    })
})
