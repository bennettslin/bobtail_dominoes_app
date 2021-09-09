import { getMarkdownLinksForPages } from '../../utils/format/markdown'
import { PUZZLES_PAGE } from '../../constants/pages'

export const getMarkdownLinksForPuzzlesPages = pages => (
    getMarkdownLinksForPages({
        rootPage: PUZZLES_PAGE,
        pages,
    })
)
