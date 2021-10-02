import { createSelector } from 'reselect'
import {
    getIsTabbedPath,
    getTopLevelPageFromPath,
} from '../../utils/pages/path'
import { PAGE_STORE } from '../../constants/store'

export const mapSelectedPagePath = (
    { [PAGE_STORE]: { selectedPagePath } },
) => selectedPagePath

export const getMapIsSelectedPagePath = pagePath => createSelector(
    mapSelectedPagePath,
    selectedPagePath => (
        pagePath === selectedPagePath ||
        (
            getIsTabbedPath(pagePath) &&
            pagePath === getTopLevelPageFromPath(selectedPagePath)
        )
    ),
)

export const getMapShowTabbedMenu = pages => createSelector(
    mapSelectedPagePath,
    selectedPagePath => (
        getIsTabbedPath(selectedPagePath) && Boolean(pages)
    ),
)
