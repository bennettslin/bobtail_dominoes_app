import { AUDIO_STORE } from '../../constants/store'
import { AUDIO_DEFAULT } from './default'

export const audioReducer = (
    state = AUDIO_DEFAULT,
    { type, payload },
) => {
    switch (type) {
        case AUDIO_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
