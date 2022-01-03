import { getIdPagesMap } from '../../utils/pages/config'
import { GUIDES_PAGE } from '../../constants/pages'

export const guidesPageIds = [
    'chords',
    'strategy',
]

export default getIdPagesMap({
    pageIds: guidesPageIds,
    topLevelPage: GUIDES_PAGE,
})
