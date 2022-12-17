import removeMarkdown from 'remove-markdown'
import slugify from 'slugify'
import { join } from '../../general'
import { getPagePathFromConfig } from '../../pages/path/config'

export const convertMarkdownToText = markdown => (
    removeMarkdown(markdown)
)

const joinArrayOfStrings = stringArray => (
    stringArray.map(entry => {
        if (typeof entry === 'string') {
            return entry
        }

        const entryObject = entry?.props?.children

        return Array.isArray(entryObject) ?
            joinArrayOfStrings(entryObject) :
            entryObject
    })
        .join('')
)

export const getLinkId = children => (
    slugify(
        joinArrayOfStrings(
            Array.isArray(children) ?
                children :
                [children],
        ),
        {
            lower: true,
            strict: true,
        },
    )
)

export const getMarkdownLinkForText = id => (
    `[${id}](#${getLinkId(id)})${'  '}`
)

const getMarkdownLinksForPages = ({
    topLevelPage,
    pages,
}) => (
    join(pages.map(page => {
        const { id, title } = page

        return (
            `[${
                title || id.toUpperCase()
            }](/${
                getPagePathFromConfig({ topLevelPage, ...page })
            })${'  '}`
        )
    }), `\n`)
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
