import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledFrame = ({
    className,
    isShown = true,
    children,
}) => (
    <div
        {...{
            className: cx(
                'StyledFrame',
                'hidden',
                isShown && 'shown',
            ),
        }}
    >
        <div {...{ className: 'StyledFrame__frameInset' }} />
        <div
            {...{
                className: cx(
                    'StyledFrame__body',
                    className,
                ),
            }}
        >
            {children}
        </div>
    </div>
)

StyledFrame.propTypes = {
    className: PropTypes.string,
    isShown: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default StyledFrame
