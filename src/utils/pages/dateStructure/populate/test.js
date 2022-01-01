import { populateDateStructuredPages } from '.'
import { DATE_STRUCTURED_PAGES } from '../../../../__mocks__/dateStructuredPages'

describe('populateDateStructuredPages', () => {
    it('populates date-structured pages', () => {
        expect(
            populateDateStructuredPages({
                dateStructuredPages: DATE_STRUCTURED_PAGES,
                points: 25,
            }),
        ).toStrictEqual({
            1983: {
                5: {
                    4: {
                        date: { day: 5, month: 4, year: 1983 },
                        points: 25,
                        topLevelPage: 'birthdays',
                    },
                },
            },
            2021: {
                11: {
                    13: {
                        date: { day: 13, month: 11, year: 2021 },
                        points: 25,
                        topLevelPage: 'birthdays',
                    },
                    18: {
                        date: { day: 18, month: 11, year: 2021 },
                        points: 25,
                        topLevelPage: 'birthdays',
                    },
                },
                12: {
                    25: {
                        date: { day: 25, month: 12, year: 2021 },
                        points: 25,
                        topLevelPage: 'birthdays',
                    },
                },
            },
            2022: {
                1: {
                    1: {
                        date: { day: 1, month: 1, year: 2022 },
                        points: 25,
                        topLevelPage: 'birthdays',
                    },
                },
            },
        })
    })
})
