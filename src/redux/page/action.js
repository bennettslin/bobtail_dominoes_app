import { HOME_PAGE } from '../../constants/pages'
import { PAGE_STORE } from '../../constants/store'

export const updateSelectedPagePath = (selectedPagePath = HOME_PAGE) => ({
    type: PAGE_STORE,
    payload: { selectedPagePath },
})
