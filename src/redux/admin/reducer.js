import { ADMIN_DEFAULT } from './default'

export const ADMIN_STORE = 'admin'

export const adminReducer = (
    state = ADMIN_DEFAULT,
    { type, payload },
) => {
    switch (type) {
        case ADMIN_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
