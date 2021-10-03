import { getFilteredAndJoinedList } from '../../format'

export const getPagesMap = (
    initialConfigs,
    topLevelPage,
) => (
    initialConfigs.reduce((map, initialConfig) => {
        const { id, date: { month, day } = {} } = initialConfig

        map[id || [month, day].join('-')] = {
            ...initialConfig,
            topLevelPage,
            pages: initialConfigs,
        }

        return map
    }, {})
)

export const getPagesMapForIds = (pageIds, topLevelPage) => (
    getPagesMap(
        pageIds.map(id => ({ id })),
        topLevelPage,
    )
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
