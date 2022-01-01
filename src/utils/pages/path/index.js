import { join } from '../../general'
import {
    BACK_LINKED_PAGES_SET,
    DOMAIN_NAME,
    HOME_PAGE,
    TABBED_PAGES_SET,
} from '../../../constants/pages'

export const getTopLevelPageFromPath = (path = '') => (
    path.split('/')[0]
)

export const getChildPageFromPath = (path = '') => (
    path.split('/').reverse()[0]
)

export const getIsTabbedPath = path => (
    TABBED_PAGES_SET.has(getTopLevelPageFromPath(path))
)

export const getIsBackLinkedPath = path => (
    BACK_LINKED_PAGES_SET.has(getTopLevelPageFromPath(path))
)

export const getLinkFromPath = path => (
    path === HOME_PAGE ? '/' : `/${path}`
)

export const getPathFromLink = (link = '') => (
    link[0] === '/' ? link.replace('/', '') : link
)

export const getUrlFromPath = (path = '') => {
    // Include ending forward slash because Twitter warns about redirects.
    const finalSlash = (
        path === HOME_PAGE ||

        // Exclude if it's a file path.
        path.includes('.')
    ) ? '' : '/'

    return `${DOMAIN_NAME}${getLinkFromPath(path)}${finalSlash}`
}

export const getPagePathFromConfig = ({
    topLevelPage,
    id,
    date: { year, month, day } = {},
}) => (
    join([
        topLevelPage,
        year,
        month,
        day,
        id,
    ], '/')
)
