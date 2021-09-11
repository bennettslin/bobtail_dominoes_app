import removeMarkdown from 'remove-markdown'
import { getLinkForPage } from '../../pages'

export const convertMarkdownToText = markdown => (
    removeMarkdown(markdown)
)

export const getLinkId = children => (
    (Array.isArray(children) ? children[0] : children)
        .toLowerCase().split(/[^a-z0-9]/)
        .filter(text => Boolean(text))
        .join('-')
)

export const getMarkdownLinkFromText = id => (
    `[${id}](#${getLinkId(id)})${'  '}`
)

export const getMarkdownLinkFromDate = ({ map, rootPage, year, month, day }) => {
    const { title, path } = map[year][month][day]

    return (
        `[${title}](/${rootPage}/${year}/${month}-${day}-${path})${'  '}`
    )
}

const getMarkdownLinksForPages = ({
    rootPage,
    pages,
    isReverse,
}) => {
    const links = (
        pages.map(page => {
            const { title } = page

            return (
                `[${title}](/${getLinkForPage({ rootPage, ...page })})${'  '}`
            )
        })
    )

    return (
        isReverse ? links.reverse() : links
    ).join(`\n`)
}

export const getMarkdownLinksForRootPage = ({
    rootPage,
    pagesList,
    isReverse,
}) => (
    pagesList.map(({ heading, pages }) => (
        `### ${heading}${'\n'}` +
        getMarkdownLinksForPages({
            rootPage,
            pages,
            isReverse,
        })
    ))
)
