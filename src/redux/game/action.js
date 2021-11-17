import { GAME_DEFAULT, UPDATE_GAME } from './default'
import { GAME_STORE } from './reducer'

export const updateIsDemoAutoplayOn = (
    isDemoAutoplayOn = GAME_DEFAULT.isDemoAutoplayOn,
) => ({
    type: GAME_STORE,
    payload: { isDemoAutoplayOn },
})

export const updateGame = (payload = GAME_DEFAULT) => ({
    type: UPDATE_GAME,
    payload,
})
