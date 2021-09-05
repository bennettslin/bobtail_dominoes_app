import { combineReducers } from 'redux'
import { getOptionReducer } from './option/reducer'
import { getPageReducer } from './page/reducer'
import { OPTION_STORE, PAGE_STORE } from '../constants/store'

export const getReducers = ({ initialPage }) => combineReducers({
    [OPTION_STORE]: getOptionReducer(),
    [PAGE_STORE]: getPageReducer({ initialPage }),
})
