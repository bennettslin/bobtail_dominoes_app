import { GAME_DEFAULT } from './default'
import { GAME_STORE } from './reducer'

export const updateGame = (payload = GAME_DEFAULT) => ({
    type: GAME_STORE,
    payload,
})
