import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const Paragraph = ({
    className,
    fontSize,
    children,
    ...rest
}) => (
    <p
        {...{
            className: cx(
                'Paragraph',
                fontSize === 'md' && 'fontSize__md',
                className,
            ),
            ...rest,
        }}
    >
        {children}
    </p>
)

Paragraph.propTypes = {
    className: PropTypes.string,
    fontSize: PropTypes.oneOf(['md']),
    children: PropTypes.node.isRequired,
}

export default Paragraph
