import { getPageDefaults } from './default'

export const PAGE_STORE = 'page'

export const getPageReducer = ({ initialPage }) => (
    state = getPageDefaults({ initialPage }),
    { type, payload },
) => {
    switch (type) {
        case PAGE_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
