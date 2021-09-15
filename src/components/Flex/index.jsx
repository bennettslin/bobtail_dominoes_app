import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Flex = forwardRef(({
    className,
    flexDirection,
    justifyContent = 'center',
    alignItems = 'center',
    children,
    Tag = 'div',
    ...rest
}, ref) => (
    <Tag
        {...{
            ref,
            ...className && {
                className,
            },
            style: {
                display: 'flex',
                ...flexDirection && { flexDirection },
                justifyContent,
                alignItems,
            },
            ...rest,
        }}
    >
        {children}
    </Tag>
))

Flex.propTypes = {
    className: PropTypes.string,
    flexDirection: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    children: PropTypes.node.isRequired,
    Tag: PropTypes.any,
}

export default Flex
