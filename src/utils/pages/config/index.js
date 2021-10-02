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
    [
        topLevelPage,
        year,
        [
            month,
            day,
            id,
        ].filter(segment => Boolean(segment)).join('-'),
    ].filter(segment => Boolean(segment)).join('/')
)
