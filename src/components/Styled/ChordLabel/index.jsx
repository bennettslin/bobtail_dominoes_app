import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import StyledParagraph from '../Paragraph'
import './style'

const StyledChordLabel = ({ className, children }) => (
    <Flex
        {...{
            className: cx(
                'StyledChordLabel',
                className,
            ),
        }}
    >
        <StyledParagraph
            {...{
                className: cx(
                    'StyledChordLabel__paragraph',
                ),
            }}
        >
            {children}
        </StyledParagraph>
    </Flex>
)

StyledChordLabel.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledChordLabel
