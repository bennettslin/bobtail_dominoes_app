import { CHORDS_STORE } from '../../constants/store'
import { CHORDS_DEFAULT } from './default'

export const chordsReducer = (
    state = CHORDS_DEFAULT,
    { type, payload },
) => {
    switch (type) {
        case CHORDS_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
