import React from 'react'
import PropTypes from 'prop-types'
import StyledText from '../Text'

const StyledButtonText = ({
    isSelected,
    children,

}) => (
    <StyledText
        isInteractive
        {...{
            isInset: isSelected,
            isShadow: !isSelected,
        }}
    >
        {children}
    </StyledText>
)

StyledButtonText.propTypes = {
    isSelected: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default StyledButtonText
