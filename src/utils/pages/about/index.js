import { getMapFromPageConfigs } from '../../pages/config'
import { ABOUT_PAGE } from '../../../constants/pages'

const PAGE_IDS = [
    'story',
    'design',
]

const PAGES_MAP = getMapFromPageConfigs({
    topLevelPage: ABOUT_PAGE,
    pageConfigs: PAGE_IDS.map(id => ({ id })),
})

export const getPageConfigForId = id => (
    PAGES_MAP[id]
)
