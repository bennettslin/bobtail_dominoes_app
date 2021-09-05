// Reducers for options state.
import { OPTION_STORE } from '../../constants/store'
import { getOptionDefaults } from './default'

export const getOptionReducer = () => (
    state = getOptionDefaults(),
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
