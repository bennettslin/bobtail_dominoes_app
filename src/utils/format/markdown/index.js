import removeMarkdown from 'remove-markdown'
import { getPagePathFromConfig } from '../../pages/config'

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

const getMarkdownLinksForPages = ({
    topLevelPage,
    pages,
}) => (
    pages.map(page => {
        const { title } = page

        return (
            `[${title}](/${getPagePathFromConfig({ topLevelPage, ...page })})${'  '}`
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
