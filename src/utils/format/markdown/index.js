import removeMarkdown from 'remove-markdown'

export const convertMarkdownToText = markdown => (
    removeMarkdown(markdown)
)
