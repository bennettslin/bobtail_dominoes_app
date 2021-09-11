import { getChildPageFromPath } from '../../../../constants/pages'

export const getDirectionPage = ({
    direction,
    pages,
    selectedPage,
}) => {
    const
        childPage = getChildPageFromPath(selectedPage),
        pageIndex = pages.findIndex(({ id, date: { month, day } = {} }) => (
            childPage === (
                month && day ?
                    `${month}-${day}-${id}` :
                    id
            )
        ))

    if (direction === -1 && pageIndex > 0) {
        return pages[pageIndex - 1]
    } else if (direction === 1 && pageIndex < pages.length - 1) {
        return pages[pageIndex + 1]
    }

    return null
}
