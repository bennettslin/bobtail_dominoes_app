import removeMarkdown from 'remove-markdown'
import { getPagePathFromConfig } from '../../pages/config'

export const convertMarkdownToText = markdown => (
    removeMarkdown(markdown)
)

export const getSlugForLinkId = children => (
    (Array.isArray(children) ? children[0] : children)
        .replace(/'/g, '')
        .toLowerCase().split(/[^a-z0-9]/)
        .filter(text => Boolean(text))
        .join('-')
)

export const getMarkdownLinkForText = id => (
    `[${id}](#${getSlugForLinkId(id)})${'  '}`
)

const getMarkdownLinksForPages = ({
    topLevelPage,
    pages,
}) => (
    pages.map(page => {
        const { id, title } = page

        return (
            `[${
                title || id.toUpperCase()
            }](/${
                getPagePathFromConfig({ topLevelPage, ...page })
            })${'  '}`
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
