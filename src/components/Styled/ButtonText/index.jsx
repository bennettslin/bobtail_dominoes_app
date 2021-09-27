import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledButtonText = ({ children }) => (
    <>
        <div
            {...{
                className: cx(
                    'StyledButtonText__rear',
                ),
            }}
        >
            {children}
        </div>
        <div
            {...{
                className: cx(
                    'StyledButtonText__front',
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
