import { getMapFromPages } from '../../utils/pages'
import { RULES_PAGE } from '../../constants/pages'

export const pages = [
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
    rootPage: RULES_PAGE,
    pages,
})

export const pagesList = [
    {
        heading: 'Standard rules',
        pages,
    },
]
