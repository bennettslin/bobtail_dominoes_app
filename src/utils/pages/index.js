export const getMapFromPages = ({
    rootPage,
    pages,

}) => (
    pages.reduce((map, page) => {
        map[page.id] = {
            rootPage,
            pages,
            ...page,
        }

        return map
    }, {})
)

export const getLinkForPage = ({
    rootPage,
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
        `${rootPage}/${datePath}${id}`
    )
}
