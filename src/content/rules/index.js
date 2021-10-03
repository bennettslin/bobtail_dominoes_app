import { getPagesMapForIds } from '../../utils/pages/config'
import { RULES_PAGE } from '../../constants/pages'

const PAGE_IDS = [
    'setup',
    'playing',
    'rotating',
    'scoring',
]

export default getPagesMapForIds(PAGE_IDS, RULES_PAGE)
