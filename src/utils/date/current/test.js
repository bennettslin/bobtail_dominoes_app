import { getIsTimeEligibleDate, getCurrentDate, getTimeEligiblePage, filterTimeEligiblePages } from '.'
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

describe('getTimeEligiblePage', () => {
    beforeAll(getBeforeAll())
    afterAll(getAfterAll())

    it('returns null if no page', () => {
        expect(getTimeEligiblePage()).toBeNull()
    })

    it('returns page if no date', () => {
        expect(getTimeEligiblePage(
            { id: 'liz' },
        )).toStrictEqual({ id: 'liz' })
    })

    it('returns page if present date', () => {
        expect(getTimeEligiblePage(
            { date: { year: 1983, month: 5, day: 4 } },
        )).toStrictEqual({ date: { year: 1983, month: 5, day: 4 } })
    })

    it('returns null if future date', () => {
        expect(getTimeEligiblePage(
            { date: { year: 1987, month: 8, day: 22 } },
        )).toBeNull()
    })
})

describe('filterTimeEligiblePages', () => {
    beforeAll(getBeforeAll())
    afterAll(getAfterAll())

    it('returns list of past and present pages', () => {
        expect(filterTimeEligiblePages([
            { date: { year: 1983, month: 5, day: 4 } },
            { date: { year: 1987, month: 8, day: 22 } },
        ])).toStrictEqual([{ date: { year: 1983, month: 5, day: 4 } }])
    })
})
