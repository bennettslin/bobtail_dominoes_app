import { addDirectionPages } from '.'

describe('addDirectionPages', () => {
    it('returns configs with direction page links', () => {
        expect(
            addDirectionPages([
                {
                    date: { year: 2021, month: 5, day: 4 },
                    topLevelPage: 'birthdays',
                },
                {
                    date: { year: 2021, month: 11, day: 13 },
                    topLevelPage: 'birthdays',
                },
            ]),
        ).toStrictEqual([
            {
                date: { day: 4, month: 5, year: 2021 },
                directionRightPage: {
                    date: { day: 13, month: 11, year: 2021 },
                },
                topLevelPage: 'birthdays',
            },
            {
                date: { day: 13, month: 11, year: 2021 },
                directionLeftPage: {
                    date: { day: 4, month: 5, year: 2021 },
                },
                topLevelPage: 'birthdays',
            },
        ])
    })
})
