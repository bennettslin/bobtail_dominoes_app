import { getIsTabbedPageFromPath, getTopLevelPageFromPath } from '../../utils/pages/path'
import { PAGE_STORE } from '../../constants/store'

export const mapSelectedPagePath = (
    { [PAGE_STORE]: { selectedPagePath } },
) => selectedPagePath

export const getMapIsSelectedPagePath = page => (
    { [PAGE_STORE]: { selectedPagePath } },
) => page === selectedPagePath

export const getMapIsSelectedTabbedPage = page => (
    { [PAGE_STORE]: { selectedPagePath } },
) => getIsTabbedPageFromPath(page) && page === getTopLevelPageFromPath(selectedPagePath)
