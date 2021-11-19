import { setBoolInStorage } from '../../utils/storage'
import {
    GAME_DEFAULT,
    INITIALISE_GAME,
    REGISTER_GAME_TURN,
} from './default'
import { GAME_STORE } from './reducer'

export const updateIsDemoAutoplayOn = (
    isDemoAutoplayOn = GAME_DEFAULT.isDemoAutoplayOn,
) => {
    setBoolInStorage('isDemoAutoplayOn', isDemoAutoplayOn)

    return {
        type: GAME_STORE,
        payload: { isDemoAutoplayOn },
    }
}

export const initialiseGame = () => ({
    type: INITIALISE_GAME,
})

export const registerGameTurn = payload => ({
    type: REGISTER_GAME_TURN,
    payload,
})
