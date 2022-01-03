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
                        date: { day: 5, month: 4, year: 1983 },
                        topLevelPage: 'birthdays',
                    },
                },
            },
            2021: {
                11: {
                    13: {
                        date: { day: 13, month: 11, year: 2021 },
                        topLevelPage: 'birthdays',
                    },
                },
            },
        })
    })
})
