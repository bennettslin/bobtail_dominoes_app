import { getInternalLinkForPath, getPathFromWindowLocation, getTopLevelPageFromPath } from '.'
import { HOME_PAGE } from '../../../constants/pages'

describe('getTopLevelPageFromPath', () => {
    it('returns top level page for path', () => {
        expect(
            getTopLevelPageFromPath('about/story'),
        ).toBe('about')
    })
})

describe('getInternalLinkForPath', () => {
    it('returns internal link from home page', () => {
        expect(
            getInternalLinkForPath(HOME_PAGE),
        ).toBe('/')
    })

    it('returns internal link from child path', () => {
        expect(
            getInternalLinkForPath('about/story'),
        ).toBe('/about/story')
    })
})

describe('getPathFromWindowLocation', () => {
    it('returns path from window location', () => {
        expect(
            getPathFromWindowLocation('/'),
        ).toBe(HOME_PAGE)
    })

    it('returns path from window location', () => {
        expect(
            getPathFromWindowLocation('/about/story'),
        ).toBe('about/story')
    })
})
