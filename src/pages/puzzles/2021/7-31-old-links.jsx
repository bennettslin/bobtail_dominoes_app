import { getPageElementForConfig } from '../../../containers/Page'
import { pagesMap } from '../../../content/puzzles/2021'

const id = 'old-links'

export default getPageElementForConfig({
    ...pagesMap[id],
    body: `
Temporary content.
    `,
})
