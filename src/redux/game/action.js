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

export const initialiseGame = ({ currentPlayerIndex } = {}) => ({
    type: INITIALISE_GAME,
    payload: { currentPlayerIndex },
})

export const registerGameTurn = () => ({
    type: REGISTER_GAME_TURN,
})

export const updateGame = payload => ({
    type: GAME_STORE,
    payload,
})
