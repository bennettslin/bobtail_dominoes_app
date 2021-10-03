import { getMapFromPageConfigs } from '../../utils/pages/config'
import { RULES_PAGE } from '../../constants/pages'

const PAGE_CONFIGS = [
    {
        id: `setup`,
    },
    {
        id: `playing`,
    },
    {
        id: `rotating`,
    },
    {
        id: `scoring`,
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: RULES_PAGE,
    pageConfigs: PAGE_CONFIGS,
})
