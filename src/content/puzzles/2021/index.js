import { getMapFromPageConfigs } from '../../../utils/pages/config'
import { PUZZLES_PAGE } from '../../../constants/pages'

export const pageConfigs = [
    {
        title: `9/27 - 10/3`,
        date: { year: 2021, month: 9, day: 27 },
    },
    {
        title: `10/4 - 10/10`,
        date: { year: 2021, month: 10, day: 4 },
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: PUZZLES_PAGE,
    pageConfigs,
})
