import { getChildPageFromPath } from '../../../../constants/pages'

export const getDirectionPage = ({
    direction,
    pages,
    selectedPage,
}) => {
    if (!pages) {
        return null
    }

    const
        childPage = getChildPageFromPath(selectedPage),
        foundIndex = pages.findIndex(({ id, date: { month, day } = {} }) => (
            childPage === (
                month && day ?
                    `${month}-${day}-${id}` :
                    id
            )
        )),
        // If no index found, default to first page.
        pageIndex = foundIndex === -1 ? 0 : foundIndex

    if (direction === -1 && pageIndex > 0) {
        return pages[pageIndex - 1]
    } else if (direction === 1 && pageIndex < pages.length - 1) {
        return pages[pageIndex + 1]
    }

    return null
}
