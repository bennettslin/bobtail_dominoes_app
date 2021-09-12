import { getPageElementForConfig } from '../../containers/Page'
import { getMarkdownLinksForRootPage } from '../../utils/format/markdown'
import { pagesList } from '../../content/puzzles'
import { PUZZLES_PAGE } from '../../constants/pages'

export default getPageElementForConfig({
    body: getMarkdownLinksForRootPage({ topLevelPage: PUZZLES_PAGE, pagesList }),
})
