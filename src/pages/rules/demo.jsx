import { getPageElementForConfig } from '../../containers/Page'
import { pagesMap } from '../../content/rules'

const id = 'demo'

export default getPageElementForConfig({
    ...pagesMap[id],
    body: `
TODO!
    `,
})
