import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Wrapper from '../Wrapper'
import AppFooter from './Footer'
import Helmet from '../../components/Helmet'
import './style'

const App = ({ children }) => (
    <div
        {...{
            className: cx(
                'App',
                'font__text',
            ),
        }}
    >
        <Helmet />
        <Wrapper>{children}</Wrapper>
        <AppFooter />
    </div>
)

App.propTypes = {
    children: PropTypes.node.isRequired,
}

export default App
