import { pages as pages2021 } from './2021/map'
import { getMarkdownLinksForPuzzlesPages } from './helper'

export default {
    title: `Puzzles`,
    body: `
### 2021
${getMarkdownLinksForPuzzlesPages(pages2021)}
    `,
}
