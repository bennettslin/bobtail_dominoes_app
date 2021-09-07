export const getInternalLink = ({ href = '', pageLink }) => {
    if (pageLink) {
        return pageLink
    }
    // Markdown will return page link beginning with forward slash.
    if (href[0] === '/') {
        return href.substring(1)
    }

    return null
}
