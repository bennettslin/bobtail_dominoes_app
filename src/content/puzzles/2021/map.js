import { getMapFromPages } from '../../../utils/pages'
import { PUZZLES_PAGE } from '../../../constants/pages'

export const pages = [
    {
        id: `old-links`,
        title: `Old links`,
        date: { year: 2021, month: 7, day: 31 },
    },
    {
        id: `music-getting-worse`,
        title: `Yes, music is getting worse`,
        date: { year: 2021, month: 8, day: 22 },
    },
]

const pagesMap = getMapFromPages({
    rootPage: PUZZLES_PAGE,
    pages,
})

export default pagesMap
