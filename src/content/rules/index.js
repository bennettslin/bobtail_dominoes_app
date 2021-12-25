import { getPagesMapForIds } from '../../utils/pages/config'
import { RULES_PAGE } from '../../constants/pages'

const PAGE_IDS = [
    'setup',
    'playing',
    'rotating',
    'scoring',
]

export default getPagesMapForIds({
    pageIds: PAGE_IDS,
    topLevelPage: RULES_PAGE,
})
