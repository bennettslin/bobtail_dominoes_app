import { createSelector } from 'reselect'
import {
    getIsBackLinkedPath,
    getIsTabbedPath,
    getTopLevelPageFromPath,
} from '../../utils/pages/path'
import { PAGE_STORE } from '../../constants/store'

export const mapSelectedPagePath = (
    { [PAGE_STORE]: { selectedPagePath } },
) => selectedPagePath

export const getMapIsSelectedPagePath = pagePath => createSelector(
    mapSelectedPagePath,
    selectedPagePath => pagePath === selectedPagePath,
)

export const getMapIsSelectedOrTabbedPagePath = pagePath => createSelector(
    mapSelectedPagePath,
    getMapIsSelectedPagePath(pagePath),
    (
        selectedPagePath,
        isSelectedPagePath,
    ) => (
        isSelectedPagePath ||
        (
            getIsTabbedPath(pagePath) &&
            pagePath === getTopLevelPageFromPath(selectedPagePath)
        )
    ),
)

export const getMapShowBackLink = pagePath => createSelector(
    getMapIsSelectedPagePath(pagePath),
    (
        isSelectedPagePath,
    ) => (
        getIsBackLinkedPath(pagePath) && !isSelectedPagePath
    ),
)

export const getMapShowTabbedMenu = pageIds => createSelector(
    mapSelectedPagePath,
    selectedPagePath => (
        getIsTabbedPath(selectedPagePath) && Boolean(pageIds)
    ),
)
