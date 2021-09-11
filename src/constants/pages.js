import { DOMAIN } from '../utils/server'

const DOMAIN_NAME = `https://www.${DOMAIN}.com`

export const HOME_PAGE = 'home'
export const NOT_FOUND_PAGE = '404'

export const RULES_PAGE = 'rules'
export const CHORDS_PAGE = 'chords'
export const PUZZLES_PAGE = 'puzzles'
export const LINKS_PAGE = 'links'

const TABBED_PAGES_SET = new Set([RULES_PAGE])

export const getRootPageFromPath = (path = '') => (
    path.split('/')[0]
)

export const getIsTabbedPage = path => (
    TABBED_PAGES_SET.has(getRootPageFromPath(path))
)

export const getPathForPage = page => (
    page === HOME_PAGE ? '/' : `/${page}`
)

export const getUrlForPage = page => {
    const
        pagePath = getPathForPage(page),
        // Include ending forward slash because Twitter warns about redirects.
        finalSlash = page === HOME_PAGE ? '' : '/'

    return `${DOMAIN_NAME}${pagePath}${finalSlash}`
}

export const getUrlForFile = filePath => (
    `${DOMAIN_NAME}${getPathForPage(filePath)}`
)
