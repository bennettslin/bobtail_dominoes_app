import { combineReducers } from 'redux'
import { audioReducer, AUDIO_STORE } from './audio/reducer'
import { chordsReducer, CHORDS_STORE } from './chords/reducer'
import { optionReducer, OPTION_STORE } from './option/reducer'
import { getPageReducer, PAGE_STORE } from './page/reducer'

export const getReducers = ({ initialPage }) => combineReducers({
    [AUDIO_STORE]: audioReducer,
    [CHORDS_STORE]: chordsReducer,
    [OPTION_STORE]: optionReducer,
    [PAGE_STORE]: getPageReducer({ initialPage }),
})
