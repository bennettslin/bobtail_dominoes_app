import React from 'react'
import PropTypes from 'prop-types'
import StyledShadow from '../Shadow'

const StyledButtonText = ({
    isSelected,
    children,

}) => (
    <StyledShadow
        isInteractive
        {...{
            isInset: isSelected,
        }}
    >
        {children}
    </StyledShadow>
)

StyledButtonText.propTypes = {
    isSelected: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default StyledButtonText
