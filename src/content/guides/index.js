import { getPagesMap } from '../../utils/pages/config'
import { GUIDES_PAGE } from '../../constants/pages'

export const guidesPageIds = [
    'chords',
    'strategy',
]

export default getPagesMap({
    pageIds: guidesPageIds,
    topLevelPage: GUIDES_PAGE,
})
