import { OPTION_DEFAULTS } from './default'

export const OPTION_STORE = 'option'

export const optionReducer = (
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
