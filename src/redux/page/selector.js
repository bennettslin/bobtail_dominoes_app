import { createSelector } from 'reselect'
import { DEMO_PAGE } from '../../constants/pages'
import { getTopLevelPageFromPath } from '../../utils/pages/path'
import { getIsTabbedBackLinkPath, getIsTabbedPath } from '../../utils/pages/path/tabbed'
import { PAGE_STORE } from './reducer'

export const mapSelectedPagePath = (
    { [PAGE_STORE]: { selectedPagePath } },
) => selectedPagePath

export const getMapIsSelectedPagePath = pagePath => createSelector(
    mapSelectedPagePath,
    selectedPagePath => pagePath === selectedPagePath,
)

export const mapIsFullPage = createSelector(
    mapSelectedPagePath,
    selectedPagePath => selectedPagePath === DEMO_PAGE,
)

export const mapShowTabbedMenu = createSelector(
    mapSelectedPagePath,
    selectedPagePath => (
        getIsTabbedPath(selectedPagePath)
    ),
)

export const mapShowTabbedMenuBackLink = createSelector(
    mapSelectedPagePath,
    selectedPagePath => (
        getIsTabbedBackLinkPath(selectedPagePath)
    ),
)

export const getMapIsSelectedMenuPath = topLevelPage => createSelector(
    mapSelectedPagePath,
    selectedPagePath => (
        getTopLevelPageFromPath(selectedPagePath) === topLevelPage
    ),
)
