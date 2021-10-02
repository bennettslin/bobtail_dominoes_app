import { getMapFromPageConfigs } from '../../../../utils/pages/config'
import { PUZZLES_PAGE } from '../../../../constants/pages'

const pageConfigs = [
    {
        id: `monday`,
        title: `Monday`,
    },
    {
        id: `wednesday`,
        title: `Wednesday`,
    },
    {
        id: `friday`,
        title: `Friday`,
    },
    {
        id: `sunday`,
        title: `Sunday`,
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: `${PUZZLES_PAGE}/2021/9-27`,
    pageConfigs,
})
