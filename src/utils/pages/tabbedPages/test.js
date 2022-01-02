import { addTabbedPages } from '.'

describe('addTabbedPages', () => {
    it('returns configs with tabbed page lists', () => {
        expect(
            addTabbedPages({
                configs: [
                    {
                        id: 'liz',
                        topLevelPage: 'birthdays',
                    },
                    {
                        id: 'bennett',
                        topLevelPage: 'birthdays',
                    },
                ],
            }),
        ).toStrictEqual([
            {
                id: 'liz',
                pages: [{ id: 'liz' }, { id: 'bennett' }],
                topLevelPage: 'birthdays',
            },
            {
                id: 'bennett',
                pages: [{ id: 'liz' }, { id: 'bennett' }],
                topLevelPage: 'birthdays',
            },
        ])
    })
})
