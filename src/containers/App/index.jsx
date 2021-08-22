import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Wrapper from '../Wrapper'
import SubFooter from '../SubFooter'
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
        <Wrapper>{children}</Wrapper>
        <SubFooter />
    </div>
)

App.propTypes = {
    children: PropTypes.node.isRequired,
}

export default App
