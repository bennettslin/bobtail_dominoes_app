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

export const getLinkForPage = ({
    topLevelPage,
    id,
    date = {},
}) => {
    const {
            year,
            month,
            day,
        } = date,
        datePath = (
            year && month && day ?
                `${year}/${month}-${day}-` :
                ''
        )

    return (
        `${topLevelPage}/${datePath}${id}`
    )
}
