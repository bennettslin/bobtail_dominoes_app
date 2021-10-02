import { getFilteredAndJoinedList } from '../../format'

export const getMapFromPageConfigs = ({
    topLevelPage,
    pageConfigs,

}) => (
    pageConfigs.reduce((map, page) => {
        const { id, date: { month, day } = {} } = page
        map[id || [month, day].join('-')] = {
            topLevelPage,
            pages: pageConfigs,
            ...page,
        }

        return map
    }, {})
)

export const getPagePathFromConfig = ({
    topLevelPage,
    id,
    date: {
        year,
        month,
        day,
    } = {},
}) => (
    getFilteredAndJoinedList([
        topLevelPage,
        year,
        getFilteredAndJoinedList([
            month,
            day,
            id,
        ], '-'),
    ], '/')
)
