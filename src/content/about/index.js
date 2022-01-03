import { getIdPagesMap } from '../../utils/pages/config'
import { ABOUT_PAGE } from '../../constants/pages'

export const aboutPageIds = [
    'story',
    'design',
]

export default getIdPagesMap({
    pageIds: aboutPageIds,
    topLevelPage: ABOUT_PAGE,
})
