import { getMapFromPageConfigs } from '../../utils/pages/config'
import { ABOUT_PAGE } from '../../constants/pages'

const PAGE_CONFIGS = [
    {
        id: `story`,
    },
    {
        id: `design`,
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: ABOUT_PAGE,
    pageConfigs: PAGE_CONFIGS,
})
