import { getMapFromPages } from '../../utils/pages'
import { RULES_PAGE } from '../../constants/pages'

const pages = [
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

export const pagesMap = getMapFromPages({
    topLevelPage: RULES_PAGE,
    pages,
})
