import { getIdPagesMap } from '../../utils/pages/config'
import { GUIDES_PAGE } from '../../constants/pages'

const PAGE_IDS = [
    'chords',
    'strategy',
]

export default getIdPagesMap({
    pageIds: PAGE_IDS,
    topLevelPage: GUIDES_PAGE,
})
