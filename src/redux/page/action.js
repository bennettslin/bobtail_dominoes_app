import { HOME_PAGE } from '../../constants/pages'
import { PAGE_STORE } from './reducer'

export const updateSelectedPagePath = (selectedPagePath = HOME_PAGE) => ({
    type: PAGE_STORE,
    payload: { selectedPagePath: selectedPagePath || HOME_PAGE },
})
