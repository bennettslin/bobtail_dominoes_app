import { getChildPageFromPath } from '../../../../utils/pages/path'

export const getDirectionPage = ({
    direction,
    pages,
    selectedPagePath,
}) => {
    if (!pages) {
        return null
    }

    const
        childPage = getChildPageFromPath(selectedPagePath),
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
}
