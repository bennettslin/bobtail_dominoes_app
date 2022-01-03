import { filterTimeEligiblePages, getMostRecentPageFromDates, getTimeEligiblePage } from '.'
import { getAfterAll, getBeforeAll } from '../../../../__mocks__/currentDate'

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

describe('getMostRecentPageFromDates', () => {
    beforeAll(getBeforeAll())
    afterAll(getAfterAll())

    it('returns last date mapped page for link', () => {
        expect(
            getMostRecentPageFromDates([
                { year: 1983, month: 5, day: 4 },
                { year: 1987, month: 8, day: 22 },
            ]),
        ).toStrictEqual({
            date: { year: 1983, month: 5, day: 4 },
        })
    })
})
