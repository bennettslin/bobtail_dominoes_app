import { getInternalLinkForPath } from '..'
import { DOMAIN_NAME, HOME_PAGE } from '../../../../constants/pages'

export const getUrlForPath = (path = '') => {
    // Include ending forward slash because Twitter warns about redirects.
    const finalSlash = (
        path === HOME_PAGE ||

        // Exclude if it's a file path.
        path.includes('.')
    ) ? '' : '/'

    return `${DOMAIN_NAME}${getInternalLinkForPath(path)}${finalSlash}`
}
