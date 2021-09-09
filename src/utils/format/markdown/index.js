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

export const getMarkdownLinksForPages = ({
    rootPage,
    pages,

}) => (
    pages.map(page => {
        const { title } = page

        return (
            `[${title}](/${getLinkForPage({ rootPage, ...page })})${'  '}`
        )
    }).join(`
`)
)
