import { getUrlForPath } from '.'
import { HOME_PAGE } from '../../../../constants/pages'

describe('getUrlForPath', () => {
    it('returns url for home page', () => {
        expect(getUrlForPath(
            HOME_PAGE,
        )).toBe(
            'https://www.bobtaildominoes.com/',
        )
    })

    it('returns url for child page', () => {
        expect(getUrlForPath('about/story')).toBe(
            'https://www.bobtaildominoes.com/about/story/',
        )
    })

    it('returns url for file name path', () => {
        expect(getUrlForPath(
            'share/image/twitter/bobtailDominoes.png',
        )).toBe(
            'https://www.bobtaildominoes.com/share/image/twitter/bobtailDominoes.png',
        )
    })
})
