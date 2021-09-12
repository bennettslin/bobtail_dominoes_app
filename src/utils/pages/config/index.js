export const getMapFromPages = ({
    topLevelPage,
    pages,

}) => (
    pages.reduce((map, page) => {
        map[page.id] = {
            topLevelPage,
            pages,
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
}) => [
    topLevelPage && `${topLevelPage}/`,
    year && `${year}/`,
    month && `${month}-`,
    day && `${day}-`,
    id && `${id}`,
].filter(segment => Boolean(segment)).join('')
