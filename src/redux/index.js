import { combineReducers } from 'redux'
import { audioReducer, AUDIO_STORE } from './audio/reducer'
import { checkerReducer, CHECKER_STORE } from './checker/reducer'
import { gameReducer, GAME_STORE } from './game/reducer'
import { getPageReducer, PAGE_STORE } from './page/reducer'
import { adminReducer, ADMIN_STORE } from './admin/reducer'
import { puzzleReducer, PUZZLE_STORE } from './puzzle/reducer'
import { getIsAdmin } from '../utils/admin'

export const getReducers = ({ initialPage }) => combineReducers({
    [AUDIO_STORE]: audioReducer,
    [CHECKER_STORE]: checkerReducer,
    [GAME_STORE]: gameReducer,
    [PAGE_STORE]: getPageReducer({ initialPage }),

    ...getIsAdmin() && {
        [ADMIN_STORE]: adminReducer,
        [PUZZLE_STORE]: puzzleReducer,
    },
})
