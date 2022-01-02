import { getFormattedPageLink, getTabbedBackLinkText } from '.'

describe('getFormattedPageLink', () => {
    it('returns empty string for no page', () => {
        expect(getFormattedPageLink()).toBe('')
    })

    it('returns formatted page link for id', () => {
        expect(getFormattedPageLink({ id: 'liz' })).toBe('Liz')
    })

    it('returns formatted page link for not full date', () => {
        expect(
            getFormattedPageLink({ date: { year: 1983, month: 5 } }),
        ).toBe('May 1983')
    })

    it('returns formatted page link for full date', () => {
        expect(
            getFormattedPageLink({ date: { year: 1983, month: 5, day: 4 } }),
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
