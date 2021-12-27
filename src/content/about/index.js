import { getIdPagesMap } from '../../utils/pages/config'
import { ABOUT_PAGE } from '../../constants/pages'

const PAGE_IDS = [
    'story',
    'design',
]

export default getIdPagesMap({
    pageIds: PAGE_IDS,
    topLevelPage: ABOUT_PAGE,
})
