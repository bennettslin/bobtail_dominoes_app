import { getPagePathFromConfig } from '../config'

export const getIsTabbedPath = path => (
    path.includes('/')
)

export const getIsTabbedBackLinkPath = path => (
    path.indexOf('/') !== path.lastIndexOf('/')
)

export const getTabbedBackLinkPathForDate = ({
    date: { year, month, day },
    topLevelPage,
}) => (
    getPagePathFromConfig({
        topLevelPage,
        date: {
            year,
            ...day && { month },
        },
    })
)
