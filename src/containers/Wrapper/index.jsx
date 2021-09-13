import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Background from './Background'
import Header from '../Header'
import Main from '../Main'
import UpsellPopup from '../../components/Popups/Upsell'
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
        <Header />
        <UpsellPopup />
    </div>
)

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrapper
