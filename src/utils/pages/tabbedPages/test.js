import { addTabbedPages } from '.'

const CONFIGS = [
    { id: 'ashley', topLevelPage: 'birthdays' },
    { id: 'joelle', topLevelPage: 'birthdays' },
    { id: 'julia', topLevelPage: 'birthdays' },
    { id: 'lauren', topLevelPage: 'birthdays' },
    { id: 'liz', topLevelPage: 'birthdays' },
    { id: 'bennett', topLevelPage: 'birthdays' },
]

const PAGES = [
    { id: 'ashley' },
    { id: 'joelle' },
    { id: 'julia' },
    { id: 'lauren' },
    { id: 'liz' },
    { id: 'bennett' },
]

describe('addTabbedPages', () => {
    it('returns configs with page lists', () => {
        expect(
            addTabbedPages({
                configs: CONFIGS,
            }),
        ).toStrictEqual([
            { id: 'ashley', pages: PAGES, topLevelPage: 'birthdays' },
            { id: 'joelle', pages: PAGES, topLevelPage: 'birthdays' },
            { id: 'julia', pages: PAGES, topLevelPage: 'birthdays' },
            { id: 'lauren', pages: PAGES, topLevelPage: 'birthdays' },
            { id: 'liz', pages: PAGES, topLevelPage: 'birthdays' },
            { id: 'bennett', pages: PAGES, topLevelPage: 'birthdays' },
        ])
    })

    it('returns configs with truncated page lists', () => {
        expect(
            addTabbedPages({
                configs: CONFIGS,
                truncatePages: true,
            }),
        ).toStrictEqual([
            {
                id: 'ashley',
                pages: [
                    { id: 'ashley' },
                    { id: 'joelle' },
                    { id: 'julia', isEllipsis: true },
                ],
                topLevelPage: 'birthdays',
            },
            {
                id: 'joelle',
                pages: [
                    { id: 'ashley' },
                    { id: 'joelle' },
                    { id: 'julia' },
                    { id: 'lauren', isEllipsis: true },
                ],
                topLevelPage: 'birthdays',
            },
            {
                id: 'julia',
                pages: [
                    { id: 'ashley', isEllipsis: true },
                    { id: 'joelle' },
                    { id: 'julia' },
                    { id: 'lauren' },
                    { id: 'liz', isEllipsis: true },
                ],
                topLevelPage: 'birthdays',
            },
            {
                id: 'lauren',
                pages: [
                    { id: 'joelle', isEllipsis: true },
                    { id: 'julia' },
                    { id: 'lauren' },
                    { id: 'liz' },
                    { id: 'bennett', isEllipsis: true },
                ],
                topLevelPage: 'birthdays',
            },
            {
                id: 'liz',
                pages: [
                    { id: 'julia', isEllipsis: true },
                    { id: 'lauren' },
                    { id: 'liz' },
                    { id: 'bennett' },
                ],
                topLevelPage: 'birthdays',
            },
            {
                id: 'bennett',
                pages: [
                    { id: 'lauren', isEllipsis: true },
                    { id: 'liz' },
                    { id: 'bennett' },
                ],
                topLevelPage: 'birthdays',
            },
        ])
    })
})
