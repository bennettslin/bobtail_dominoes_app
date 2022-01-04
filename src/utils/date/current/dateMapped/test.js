import { filterTimeEligibleDateMappedPages } from '.'
import { getAfterAll, getBeforeAll } from '../../../../__mocks__/currentDate'
import { DATE_MAPPED_PAGES } from '../../../../__mocks__/dateMapped'

describe('filterTimeEligibleDateMappedPages', () => {
    beforeAll(getBeforeAll({ year: 2021, month: 11, day: 13 }))
    afterAll(getAfterAll())

    it('filters time eligible date mapped pages', () => {
        expect(
            filterTimeEligibleDateMappedPages(DATE_MAPPED_PAGES),
        ).toStrictEqual({
            1983: {
                5: {
                    4: {
                        date: { year: 1983, month: 5, day: 4 },
                        topLevelPage: 'birthdays',
                    },
                },
            },
            2021: {
                11: {
                    13: {
                        date: { year: 2021, month: 11, day: 13 },
                        topLevelPage: 'birthdays',
                    },
                },
            },
        })
    })
})
