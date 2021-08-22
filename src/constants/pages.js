export const BOBTAIL_DOMINOES_DOMAIN = `https://www.bobtaildominoes.com`

export const HOME_PAGE = 'home'
export const NOT_FOUND_PAGE = '404'

export const getPathForPage = page => (
    page === HOME_PAGE ? '/' : `/${page}`
)

export const getUrlForPage = page => {
    const
        pagePath = getPathForPage(page),
        // Include ending forward slash because Twitter warns about redirects.
        finalSlash = page === HOME_PAGE ? '' : '/'

    return `${BOBTAIL_DOMINOES_DOMAIN}${pagePath}${finalSlash}`
}

export const getUrlForFile = filePath => (
    `${BOBTAIL_DOMINOES_DOMAIN}${getPathForPage(filePath)}`
)
