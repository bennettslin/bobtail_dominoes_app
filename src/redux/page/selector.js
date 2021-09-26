import {
    getIsTabbedPath,
    getTopLevelPageFromPath,
} from '../../utils/pages/path'
import { PAGE_STORE } from '../../constants/store'
import { createSelector } from 'reselect'

export const mapSelectedPagePath = (
    { [PAGE_STORE]: { selectedPagePath } },
) => selectedPagePath

export const getMapIsSelectedPagePath = pagePath => (
    { [PAGE_STORE]: { selectedPagePath } },
) => pagePath === selectedPagePath

export const getMapIsSelectedOrTabbedPath = pagePath => createSelector(
    mapSelectedPagePath,
    getMapIsSelectedPagePath(pagePath),
    (
        selectedPagePath,
        isSelectedPagePath,
    ) => isSelectedPagePath || (
        getIsTabbedPath(pagePath) &&
        pagePath === getTopLevelPageFromPath(selectedPagePath)
    ),
)

export const getMapIsSelectedOrTopLevelTabbedPath = ({
    pagePath,
    topLevelPage,
    isFirstPage,
}) => createSelector(
    mapSelectedPagePath,
    getMapIsSelectedPagePath(pagePath),
    (
        selectedPagePath,
        isSelectedPagePath,
    ) => isSelectedPagePath || (
        isFirstPage && selectedPagePath === topLevelPage
    ),
)
