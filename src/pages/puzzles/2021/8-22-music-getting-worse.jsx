import { getPageElementForConfig } from '../../../containers/Page'
import { pagesMap } from '../../../content/puzzles/2021'

const id = 'music-getting-worse'

export default getPageElementForConfig({
    ...pagesMap[id],
    body: `
Temporary content.
    `,
})
