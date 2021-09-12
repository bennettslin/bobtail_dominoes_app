import { DOMAIN_NAME, HOME_PAGE, TABBED_PAGES_SET } from '../../../constants/pages'

export const getTopLevelPageFromPath = (path = '') => (
    path.split('/')[0]
)

export const getChildPageFromPath = (path = '') => (
    path.split('/').reverse()[0]
)

export const getIsTabbedPath = path => (
    TABBED_PAGES_SET.has(getTopLevelPageFromPath(path))
)

export const getLinkFromPath = path => (
    path === HOME_PAGE ? '/' : `/${path}`
)

export const getUrlFromPath = path => {
    // Include ending forward slash because Twitter warns about redirects.
    const finalSlash = path === HOME_PAGE ? '' : '/'

    return `${DOMAIN_NAME}${getLinkFromPath(path)}${finalSlash}`
}
