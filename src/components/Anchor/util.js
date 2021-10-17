export const getInternalLink = ({ href = '', pagePath }) => {
    if (pagePath) {
        return pagePath
    }
    // Markdown will return page link beginning with forward slash.
    if (href[0] === '/') {
        return href.substring(1)
    }

    return null
}
