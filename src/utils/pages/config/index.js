import { getWeekLinkForDate } from '../../date'
import { getFilteredAndJoinedList } from '../../format'

export const getMapFromPageConfigs = ({
    topLevelPage,
    pageConfigs,
}) => (
    pageConfigs.reduce((map, pageConfig) => {
        const { id, date: { month, day } = {} } = pageConfig

        map[id || [month, day].join('-')] = {
            ...pageConfig,
            topLevelPage,
            pages: pageConfigs,
        }

        return map
    }, {})
)

export const getPagePathFromConfig = ({
    topLevelPage,
    id,
    date: { year, month, day } = {},
}) => (
    getFilteredAndJoinedList([
        topLevelPage,
        year,
        getFilteredAndJoinedList([
            month,
            day,
        ], '-'),
        id,
    ], '/')
)

export const getPagesConfigsForDates = pagesConfigs => (
    pagesConfigs.map(date => ({
        id: 'monday',
        title: getWeekLinkForDate(date),
        date,
    }))
)
