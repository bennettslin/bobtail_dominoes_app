import { getWindow } from '../../browser'
import { HOME_PAGE } from '../../../constants/pages'

const _getPathname = (pathname = '') => (
    pathname
        // Split by slashes and remove empty strings.
        .split('/')
        .filter(name => Boolean(name))
        // Get rid of beginning and end slashes.
        .join('/')
    || HOME_PAGE
)

export const getParsedLocation = ({
    props: {
        url: rootElementPathname,
        location: {
            pathname: pageElementPathname,
        } = {},
    } = {},
} = {}) => {
    const {
        location: {
            pathname: windowPathname,
        } = {},
    } = getWindow()

    return {
        page: _getPathname(
            rootElementPathname ||
            pageElementPathname ||
            windowPathname,
        ),
    }
}
