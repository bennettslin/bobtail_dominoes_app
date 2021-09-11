import { getMapFromPages } from '../../../utils/pages'
import { PUZZLES_PAGE } from '../../../constants/pages'

export const pages = [
    {
        id: `music-getting-worse`,
        title: `Yes, music is getting worse`,
        date: { year: 2021, month: 8, day: 22 },
    },
    {
        id: `old-links`,
        title: `Old links`,
        date: { year: 2021, month: 7, day: 31 },
    },
]

export const pagesMap = getMapFromPages({
    rootPage: PUZZLES_PAGE,
    pages,
})
