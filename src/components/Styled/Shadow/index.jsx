import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledShadow = ({
    isCurrentHighlight,
    isPlayedHighlight,
    isGold,
    isInset,
    children,
}) => (children || Number.isFinite(children)) && (
    <>
        <span
            {...{
                className: cx(
                    'StyledShadow__rear',
                    isCurrentHighlight && 'StyledShadow__currentHighlight',
                    isPlayedHighlight && 'StyledShadow__playedHighlight',
                    isGold && 'StyledShadow__gold',
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
                    isCurrentHighlight && 'StyledShadow__currentHighlight',
                    isPlayedHighlight && 'StyledShadow__playedHighlight',
                    isGold && 'StyledShadow__gold',
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
    isCurrentHighlight: PropTypes.bool,
    isPlayedHighlight: PropTypes.bool,
    isGold: PropTypes.bool,
    isInset: PropTypes.bool,
    children: PropTypes.node,
}

export default StyledShadow
