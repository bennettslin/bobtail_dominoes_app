import React from 'react'
import PropTypes from 'prop-types'
import StyledShadow from '../Shadow'

const StyledButtonText = ({
    disabled,
    isSelected,
    children,

}) => (
    <StyledShadow
        {...{
            isGold: !disabled,
            isInset: isSelected,
        }}
    >
        {children}
    </StyledShadow>
)

StyledButtonText.propTypes = {
    disabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default StyledButtonText
