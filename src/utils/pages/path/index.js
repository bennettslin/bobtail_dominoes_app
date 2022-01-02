import { HOME_PAGE } from '../../../constants/pages'

export const getTopLevelPageFromPath = (path = '') => (
    path.split('/')[0]
)

export const getInternalLinkFromPath = path => (
    path === HOME_PAGE ? '/' : `/${path}`
)

export const getPathFromWindowLocation = (link = '') => (
    link[0] === '/' ? link.replace('/', '') : link
)
