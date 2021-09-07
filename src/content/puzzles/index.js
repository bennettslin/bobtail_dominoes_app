import content210731 from './2021/7-31'
import content210822 from './2021/8-22'
import { getMarkdownLinkFromEssayDate } from './helper'

export default {
    title: `Essays`,
    body: `
### 2021
${getMarkdownLinkFromEssayDate(content210822.date)}
${getMarkdownLinkFromEssayDate(content210731.date)}
    `,
}
