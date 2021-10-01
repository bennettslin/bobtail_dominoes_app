import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledFrameBody = ({
    className,
    children,
}) => (
    <div
        {...{
            className: cx(
                'StyledFrameBody',
                className,
            ),
        }}
    >
        {children}
    </div>
)

StyledFrameBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledFrameBody
