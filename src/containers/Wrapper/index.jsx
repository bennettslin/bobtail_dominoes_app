import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Header from '../Header'
import Main from '../Main'
import './style'

const Wrapper = ({ children }) => (
    <div
        {...{
            className: cx(
                'Wrapper',
            ),
        }}
    >
        <Header />
        <Main>{children}</Main>
    </div>
)

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrapper
