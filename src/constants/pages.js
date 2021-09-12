import { DOMAIN } from '../utils/server'

const DOMAIN_NAME = `https://www.${DOMAIN}.com`

export const HOME_PAGE = 'home'
export const NOT_FOUND_PAGE = '404'

export const RULES_PAGE = 'rules'
export const CHORDS_PAGE = 'chords'
export const PUZZLES_PAGE = 'puzzles'
export const LINKS_PAGE = 'links'

const TABBED_PAGES_SET = new Set([RULES_PAGE])

export const getTopLevelPageFromPath = (path = '') => (
    path.split('/')[0]
)

export const getChildPageFromPath = (path = '') => (
    path.split('/').reverse()[0]
)

export const getIsTabbedPageFromPath = path => (
    TABBED_PAGES_SET.has(getTopLevelPageFromPath(path))
)

export const getLinkFromPath = path => (
    path === HOME_PAGE ? '/' : `/${path}`
)

export const getPathForChildPage = ({
    topLevelPage,
    id,
    date: {
        year,
        month,
        day,
    } = {},
}) => [
    topLevelPage && `${topLevelPage}/`,
    year && `${year}/`,
    month && `${year}-`,
    day && `${year}-`,
    id && `${id}`,
].filter(segment => Boolean(segment)).join('')

export const getUrlFromPath = path => {
    // Include ending forward slash to avoid redirect warnings.
    const finalSlash = (
        path === HOME_PAGE ||

        // Don't include final slash for file paths.
        getChildPageFromPath(path).includes('.')
    ) ? '' : '/'

    return `${DOMAIN_NAME}${getLinkFromPath(path)}${finalSlash}`
}
