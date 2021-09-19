import { getMapFromPageConfigs } from '../../utils/pages/config'
import { ABOUT_PAGE } from '../../constants/pages'

const pageConfigs = [
    {
        id: `design`,
        title: `Design`,
    },
    {
        id: `story`,
        title: `Story`,
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: ABOUT_PAGE,
    pageConfigs,
})
