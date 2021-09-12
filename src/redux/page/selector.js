import { getIsTabbedPath, getTopLevelPageFromPath } from '../../utils/pages/path'
import { PAGE_STORE } from '../../constants/store'

export const mapSelectedPagePath = (
    { [PAGE_STORE]: { selectedPagePath } },
) => selectedPagePath

export const getMapIsSelectedPagePath = pagePath => (
    { [PAGE_STORE]: { selectedPagePath } },
) => pagePath === selectedPagePath

export const getMapIsSelectedTabbedPath = pagePath => (
    { [PAGE_STORE]: { selectedPagePath } },
) => (
    getIsTabbedPath(pagePath) &&
    pagePath === getTopLevelPageFromPath(selectedPagePath)
)
