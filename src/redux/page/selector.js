import { PAGE_STORE } from '../../constants/store'

export const mapSelectedPage = (
    { [PAGE_STORE]: { selectedPage } },
) => selectedPage

export const getMapIsSelectedPage = page => (
    { [PAGE_STORE]: { selectedPage } },
) => page === selectedPage
