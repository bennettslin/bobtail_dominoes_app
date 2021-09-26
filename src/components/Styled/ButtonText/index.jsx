import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledButtonText = ({ children }) => (
    <>
        <div
            {...{
                className: cx(
                    'StyledButtonText__bottom',
                ),
            }}
        >
            {children}
        </div>
        <div
            {...{
                className: cx(
                    'StyledButtonText__top',
                ),
            }}
        >
            {children}
        </div>
    </>
)

StyledButtonText.propTypes = {
    children: PropTypes.node.isRequired,
}

export default StyledButtonText
