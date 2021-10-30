import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'
import Flex from '../Flex'

const Paragraph = ({
    className,
    children,
}) => (
    <Flex
        {...{
            className: cx(
                'Paragraph',
                className,
            ),
            tag: 'p',
        }}
    >
        {children}
    </Flex>
)

Paragraph.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Paragraph
