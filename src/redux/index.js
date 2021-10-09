import { combineReducers } from 'redux'
import { chordsReducer } from './chords/reducer'
import { optionReducer } from './option/reducer'
import { getPageReducer } from './page/reducer'
import { CHORDS_STORE, OPTION_STORE, PAGE_STORE } from '../constants/store'

export const getReducers = ({ initialPage }) => combineReducers({
    [CHORDS_STORE]: chordsReducer,
    [OPTION_STORE]: optionReducer,
    [PAGE_STORE]: getPageReducer({ initialPage }),
})
