import { GAME_DEFAULT, UPDATE_GAME } from './default'

export const updateGame = (payload = GAME_DEFAULT) => ({
    type: UPDATE_GAME,
    payload,
})
