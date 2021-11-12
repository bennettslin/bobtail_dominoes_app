import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledShadow = ({
    isHighlight,
    isInteractive,
    isInset,
    children,
}) => (children || Number.isFinite(children)) && (
    <>
        <span
            {...{
                className: cx(
                    'StyledShadow__rear',
                    isHighlight && 'StyledShadow__highlight',
                    isInteractive && 'StyledShadow__interactive',
                    isInset ?
                        'StyledShadow__rearInset' :
                        'StyledShadow__rearShadow',
                ),
            }}
        >
            {children}
        </span>
        <span
            {...{
                className: cx(
                    'StyledShadow__front',
                    isHighlight && 'StyledShadow__highlight',
                    isInteractive && 'StyledShadow__interactive',
                    isInset ?
                        'StyledShadow__frontInset' :
                        'StyledShadow__frontShadow',
                ),
            }}
        >
            {children}
        </span>
    </>
)

StyledShadow.propTypes = {
    isHighlight: PropTypes.bool,
    isInteractive: PropTypes.bool,
    isInset: PropTypes.bool,
    children: PropTypes.node,
}

export default StyledShadow
