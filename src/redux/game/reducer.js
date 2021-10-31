import { GAME_DEFAULT } from './default'

export const GAME_STORE = 'game'

export const gameReducer = (
    state = GAME_DEFAULT,
    { type, payload },
) => {
    switch (type) {
        case GAME_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
