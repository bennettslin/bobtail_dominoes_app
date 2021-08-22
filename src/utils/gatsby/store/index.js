import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { getReducers } from '../../../redux'
import { getIsServerSide } from '../../browser'
import { getParsedLocation } from '../path'

export const getReduxStore = element => {
    const { page } = getParsedLocation(element)

    return createStore(
        getReducers({ initialPage: page }),
        getIsServerSide() ?
            undefined :
            devToolsEnhancer(),
    )
}
