import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledText = ({
    isInteractive,
    isInset,
    isShadow,
    children,
}) => (
    <>
        <span
            {...{
                className: cx(
                    'StyledText__rear',
                    isInteractive && 'StyledText__interactive',
                    isInset && 'StyledText__rearInset',
                    isShadow && 'StyledText__rearShadow',
                ),
            }}
        >
            {children}
        </span>
        <span
            {...{
                className: cx(
                    'StyledText__front',
                    isInteractive && 'StyledText__interactive',
                    isInset && 'StyledText__frontInset',
                    isShadow && 'StyledText__frontShadow',
                ),
            }}
        >
            {children}
        </span>
    </>
)

StyledText.propTypes = {
    isInteractive: PropTypes.bool,
    isInset: PropTypes.bool,
    isShadow: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default StyledText
