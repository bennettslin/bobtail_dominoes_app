import { join } from '../../general'

export const getPagesMap = (
    initialConfigs,
    topLevelPage,
) => (
    initialConfigs.reduce((map, initialConfig) => {
        const { id, date: { month, day } = {} } = initialConfig

        map[id || join([month, day], '-')] = {
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
    join([
        topLevelPage,
        year,
        join([
            month,
            day,
        ], '-'),
        id,
    ], '/')
)
