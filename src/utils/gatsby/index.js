import React from 'react'
import { Provider } from 'react-redux'
import App from '../../containers/App'
import { getReduxStore } from './store'

export const wrapRootElement = ({ element }) => (
    <Provider {...{ store: getReduxStore(element) }}>
        <App>{element}</App>
    </Provider>
)
