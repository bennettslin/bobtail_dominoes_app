import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Paragraph from '../../Paragraph'
import StyledShadow from '../Shadow'
import './style'

const StyledParagraph = ({ className, children }) => (
    <Paragraph
        {...{
            className: cx(
                'StyledParagraph',
                'fontSize__md',
                'lineHeight__md',
                className,
            ),
        }}
    >
        <StyledShadow >
            {children}
        </StyledShadow>
    </Paragraph>
)

StyledParagraph.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default StyledParagraph
