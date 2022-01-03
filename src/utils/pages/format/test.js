import { getHelmetTitle, getPageLinkText, getTabbedBackLinkText } from '.'

describe('getHelmetTitle', () => {
    it('returns formatted page link for id', () => {
        expect(getHelmetTitle({ id: 'liz' })).toBe('Liz')
    })

    it('returns formatted page link for full date', () => {
        expect(
            getHelmetTitle({
                date: { year: 1983, month: 5, day: 4 },
                topLevelPage: 'birthdays',
            }),
        ).toBe('Birthdays: May 4, 1983')
    })
})

describe('getPageLinkText', () => {
    it('returns formatted page link for id', () => {
        expect(getPageLinkText({ id: 'liz' })).toBe('Liz')
    })

    it('returns formatted page link for not full date', () => {
        expect(
            getPageLinkText({ date: { year: 1983, month: 5 } }),
        ).toBe('May 1983')
    })

    it('returns formatted page link for full date', () => {
        expect(
            getPageLinkText({ date: { year: 1983, month: 5, day: 4 } }),
        ).toBe('May 4')
    })
})

describe('getTabbedBackLinkText', () => {
    it('returns tabbed back link text for month date', () => {
        expect(
            getTabbedBackLinkText({ date: { year: 1983, month: 5 } }),
        ).toBe('1983')
    })

    it('returns tabbed back link text for day date', () => {
        expect(
            getTabbedBackLinkText({ date: { year: 1983, month: 5, day: 4 } }),
        ).toBe('May 1983')
    })
})
