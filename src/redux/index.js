import { combineReducers } from 'redux'
import { audioReducer } from './audio/reducer'
import { chordsReducer } from './chords/reducer'
import { optionReducer } from './option/reducer'
import { getPageReducer } from './page/reducer'
import {
    AUDIO_STORE,
    CHORDS_STORE,
    OPTION_STORE,
    PAGE_STORE,
} from '../constants/store'

export const getReducers = ({ initialPage }) => combineReducers({
    [AUDIO_STORE]: audioReducer,
    [CHORDS_STORE]: chordsReducer,
    [OPTION_STORE]: optionReducer,
    [PAGE_STORE]: getPageReducer({ initialPage }),
})
