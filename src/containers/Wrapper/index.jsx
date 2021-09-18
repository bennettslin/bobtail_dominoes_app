import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Background from './Background'
import Main from '../Main'
import Popups from '../../components/Popups'
import './style'

const Wrapper = ({ children }) => (
    <div
        {...{
            className: cx(
                'Wrapper',
            ),
        }}
    >
        <Background />
        <Main>{children}</Main>
        <Popups />
    </div>
)

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrapper
