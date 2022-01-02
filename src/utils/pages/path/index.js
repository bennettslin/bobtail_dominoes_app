import { HOME_PAGE } from '../../../constants/pages'

export const getTopLevelPageFromPath = (path = '') => (
    path.split('/')[0]
)

export const getInternalLinkForPath = path => (
    path === HOME_PAGE ? '/' : `/${path}`
)

export const getPathFromWindowLocation = locationPath => (
    locationPath === '/' ? HOME_PAGE : locationPath.replace('/', '')
)
