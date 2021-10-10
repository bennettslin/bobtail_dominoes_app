import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledDisplay = ({ className, children }) => (
    <div
        {...{
            className: cx(
                'StyledDisplay',
                className,
            ),
        }}
    >
        {children}
    </div>
)

StyledDisplay.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default StyledDisplay
