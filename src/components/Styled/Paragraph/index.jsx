import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Paragraph from '../../Paragraph'
import StyledText from '../Text'
import './style'

const StyledParagraph = ({ children }) => (
    <Paragraph
        {...{
            className: cx(
                'StyledParagraph',
                'fontSize__md',
            ),
        }}
    >
        <StyledText isShadow >
            {children}
        </StyledText>
    </Paragraph>
)

StyledParagraph.propTypes = {
    children: PropTypes.node.isRequired,
}

export default StyledParagraph
