import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import MainFooter from './Footer'
import './style'

const Main = ({ children }) => (
    <div
        {...{
            className: cx(
                'Main',
            ),
        }}
    >
        {children}
        <MainFooter />
    </div>
)

Main.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Main
