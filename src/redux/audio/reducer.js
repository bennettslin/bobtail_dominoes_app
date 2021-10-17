import { AUDIO_DEFAULT } from './default'

export const AUDIO_STORE = 'audio'

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
