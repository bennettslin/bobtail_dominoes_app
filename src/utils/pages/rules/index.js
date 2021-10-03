import { getMapFromPageConfigs } from '../config'
import { RULES_PAGE } from '../../../constants/pages'

const PAGE_IDS = [
    'setup',
    'playing',
    'rotating',
    'scoring',
]

const PAGES_MAP = getMapFromPageConfigs({
    topLevelPage: RULES_PAGE,
    pageConfigs: PAGE_IDS.map(id => ({ id })),
})

export const getPageConfigForId = id => (
    PAGES_MAP[id]
)
