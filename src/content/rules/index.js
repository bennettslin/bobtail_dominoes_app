import { getIdPagesMap } from '../../utils/pages/config'
import { RULES_PAGE } from '../../constants/pages'

export const rulesPageIds = [
    'setup',
    'playing',
    // 'rotating',
    'scoring',
    'fun',
]

export default getIdPagesMap({
    pageIds: rulesPageIds,
    topLevelPage: RULES_PAGE,
})
