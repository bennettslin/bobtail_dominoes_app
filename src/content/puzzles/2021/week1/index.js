import { getMapFromPageConfigs } from '../../../../utils/pages/config'
import { PUZZLES_PAGE } from '../../../../constants/pages'

const pageConfigs = [
    {
        title: `Monday`,
        date: { year: 2021, month: 9, day: 27 },
    },
    {
        title: `Wednesday`,
        date: { year: 2021, month: 9, day: 29 },
    },
    {
        title: `Friday`,
        date: { year: 2021, month: 10, day: 1 },
    },
    {
        title: `Sunday`,
        date: { year: 2021, month: 10, day: 3 },
    },
]

export const pagesMap = getMapFromPageConfigs({
    topLevelPage: PUZZLES_PAGE,
    pageConfigs,
})
