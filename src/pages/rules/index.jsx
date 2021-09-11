import { getPageElementForConfig } from '../../containers/Page'
import { getMarkdownLinksForRootPage } from '../../utils/format/markdown'
import { pagesList } from '../../content/rules'
import { RULES_PAGE } from '../../constants/pages'

export default getPageElementForConfig({
    title: `Standard rules`,
    body: getMarkdownLinksForRootPage({ rootPage: RULES_PAGE, pagesList }),
})
