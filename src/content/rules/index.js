import { getMapFromPageConfigs } from '../../utils/pages/config'
import { RULES_PAGE } from '../../constants/pages'

const pageConfigs = [
    {
        id: `setup`,
        title: `Setup`,
    },
    {
        id: `playing`,
        title: `Playing`,
    },
    {
        id: `scoring`,
        title: `Scoring`,
    },
    {
        id: `demo`,
        title: `Demo`,
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: RULES_PAGE,
    pageConfigs,
})
