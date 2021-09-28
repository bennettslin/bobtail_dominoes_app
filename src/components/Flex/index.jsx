import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Flex = forwardRef(({
    className,
    flexGrow,
    flexDirection,
    justifyContent = 'center',
    alignItems = 'center',
    flexWrap,
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
                ...flexGrow && { flexGrow },
                ...flexDirection && { flexDirection },
                justifyContent,
                alignItems,
                ...flexWrap && { flexWrap },
            },
            ...rest,
        }}
    >
        {children}
    </Tag>
))

Flex.propTypes = {
    className: PropTypes.string,
    flexGrow: PropTypes.number,
    flexDirection: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    flexWrap: PropTypes.string,
    children: PropTypes.node.isRequired,
    Tag: PropTypes.any,
}

export default Flex
