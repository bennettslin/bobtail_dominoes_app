import { getMapFromPageConfigs } from '../../../../utils/pages/config'
import { PUZZLES_PAGE } from '../../../../constants/pages'

const pageConfigs = [
    {
        title: `Monday`,
        date: { year: 2021, month: 10, day: 4 },
    },
    {
        title: `Wednesday`,
        date: { year: 2021, month: 10, day: 6 },
    },
    {
        title: `Friday`,
        date: { year: 2021, month: 10, day: 8 },
    },
    {
        title: `Sunday`,
        date: { year: 2021, month: 10, day: 10 },
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: PUZZLES_PAGE,
    pageConfigs,
})
