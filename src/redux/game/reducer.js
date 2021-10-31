import { GAME_DEFAULT, UPDATE_GAME } from './default'

export const GAME_STORE = 'game'

export const gameReducer = (
    state = GAME_DEFAULT,
    { type, payload },
) => {
    switch (type) {
        case UPDATE_GAME: {
            const {
                pool,
                board,
                hands,
                scores,
                turns,
                ...rest
            } = payload

            return {
                ...state,
                pool: new Set(pool),
                board: [...board],
                hands: [...hands],
                scores: [...scores],
                turns: [...turns],
                ...rest,
            }
        }
        case GAME_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
