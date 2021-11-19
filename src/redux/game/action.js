import { getShuffledArray } from '../../utils/general/random'
import { getInitialGame } from '../../utils/music/game/play'
import { setBoolInStorage } from '../../utils/storage'
import { PLAYERS } from '../../constants/music/play'
import { GAME_DEFAULT, UPDATE_GAME } from './default'
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
    type: UPDATE_GAME,
    payload: {
        ...getInitialGame(),
        players: getShuffledArray(PLAYERS),
    },
})

export const updateGame = (payload = GAME_DEFAULT) => ({
    type: UPDATE_GAME,
    payload,
})
