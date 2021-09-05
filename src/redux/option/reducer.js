// Reducers for options state.
import { OPTION_STORE } from '../../constants/store'
import { OPTION_DEFAULTS } from './default'

export const getOptionReducer = () => (
    state = OPTION_DEFAULTS,
    { type, payload },
) => {
    switch (type) {
        case OPTION_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
