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

export const getMarkdownLinkFromDate = ({ map, topLevelPage, year, month, day }) => {
    const { title, path } = map[year][month][day]

    return (
        `[${title}](/${topLevelPage}/${year}/${month}-${day}-${path})${'  '}`
    )
}

const getMarkdownLinksForPages = ({
    topLevelPage,
    pages,
}) => (
    pages.map(page => {
        const { title } = page

        return (
            `[${title}](/${getLinkForPage({ topLevelPage, ...page })})${'  '}`
        )
    }).join(`\n`)
)

export const getMarkdownLinksForRootPage = ({
    topLevelPage,
    pagesList,
}) => (
    pagesList.map(({ heading, pages }) => (
        `### ${heading}${'\n'}` +
        getMarkdownLinksForPages({
            topLevelPage,
            pages,
        })
    ))
)
