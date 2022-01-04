import { populateDateMappedPages } from '.'
import { DATE_MAPPED_PAGES } from '../../../../__mocks__/dateMapped'

describe('populateDateMappedPages', () => {
    it('populates date mapped pages', () => {
        expect(
            populateDateMappedPages({
                dateMappedPages: DATE_MAPPED_PAGES,
                points: 25,
            }),
        ).toStrictEqual({
            1983: {
                5: {
                    4: {
                        date: { year: 1983, month: 5, day: 4 },
                        points: 25,
                        topLevelPage: 'birthdays',
                    },
                },
            },
            2021: {
                11: {
                    13: {
                        date: { year: 2021, month: 11, day: 13 },
                        points: 25,
                        topLevelPage: 'birthdays',
                    },
                    18: {
                        date: { year: 2021, month: 11, day: 18 },
                        points: 25,
                        topLevelPage: 'birthdays',
                    },
                },
                12: {
                    25: {
                        date: { year: 2021, month: 12, day: 25 },
                        points: 25,
                        topLevelPage: 'birthdays',
                    },
                },
            },
            2022: {
                1: {
                    1: {
                        date: { year: 2022, month: 1, day: 1 },
                        points: 25,
                        topLevelPage: 'birthdays',
                    },
                },
            },
        })
    })
})
