import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Paragraph from '../../Paragraph'
import StyledShadow from '../Shadow'
import './style'

const StyledParagraph = ({ className, children, ...rest }) => (
    <Paragraph
        {...{
            className: cx(
                'StyledParagraph',
                className,
            ),
            ...rest,
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
