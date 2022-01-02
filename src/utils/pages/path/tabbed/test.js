import { getIsTabbedBackLinkPath, getIsTabbedPath, getTabbedBackLinkPath } from '.'

describe('getIsTabbedPath', () => {
    it('returns false for top level page', () => {
        expect(getIsTabbedPath('demo')).toBe(false)
    })

    it('returns true for child page', () => {
        expect(getIsTabbedPath('about/story')).toBe(true)
    })
})

describe('getIsTabbedBackLinkPath', () => {
    it('returns false for top child page', () => {
        expect(getIsTabbedBackLinkPath('about/story')).toBe(false)
    })

    it('returns true for nested child page', () => {
        expect(getIsTabbedBackLinkPath('puzzles/1983/5/4')).toBe(true)
    })
})

describe('getTabbedBackLinkPath', () => {
    it('returns tabbed back link path for month date', () => {
        expect(
            getTabbedBackLinkPath({
                date: { year: 1983, month: 5 },
                topLevelPage: 'birthdays',
            }),
        ).toBe('birthdays/1983')
    })

    it('returns tabbed back link path for day date', () => {
        expect(
            getTabbedBackLinkPath({
                date: { year: 1983, month: 5, day: 4 },
                topLevelPage: 'birthdays',
            }),
        ).toBe('birthdays/1983/5')
    })
})
