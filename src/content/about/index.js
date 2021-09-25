import { getMapFromPageConfigs } from '../../utils/pages/config'
import { ABOUT_PAGE } from '../../constants/pages'

const pageConfigs = [
    {
        id: `story`,
        title: `Story`,
    },
    {
        id: `design`,
        title: `Design`,
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: ABOUT_PAGE,
    pageConfigs,
})
