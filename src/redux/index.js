import { combineReducers } from 'redux'
import { adminReducer, ADMIN_STORE } from './admin/reducer'
import { audioReducer, AUDIO_STORE } from './audio/reducer'
import { gameReducer, GAME_STORE } from './game/reducer'
import { optionReducer, OPTION_STORE } from './option/reducer'
import { getPageReducer, PAGE_STORE } from './page/reducer'

export const getReducers = ({ initialPage }) => combineReducers({
    [ADMIN_STORE]: adminReducer,
    [AUDIO_STORE]: audioReducer,
    [GAME_STORE]: gameReducer,
    [OPTION_STORE]: optionReducer,
    [PAGE_STORE]: getPageReducer({ initialPage }),
})
