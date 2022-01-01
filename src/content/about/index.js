import { getPagesMap } from '../../utils/pages/config'
import { ABOUT_PAGE } from '../../constants/pages'

export const aboutPageIds = [
    'story',
    'design',
]

export default getPagesMap({
    pageIds: aboutPageIds,
    topLevelPage: ABOUT_PAGE,
})
