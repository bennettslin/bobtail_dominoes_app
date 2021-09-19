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
        id: `rotating`,
        title: `Rotating`,
    },
    {
        id: `scoring`,
        title: `Scoring`,
    },
    {
        id: `example`,
        title: `Example`,
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: RULES_PAGE,
    pageConfigs,
})
