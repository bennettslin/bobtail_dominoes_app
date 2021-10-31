import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const Flex = forwardRef(({
    className,
    flexGrow,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    gap,
    columnGap,
    style,
    children,
    Tag = 'div',
    ...rest
}, ref) => (
    <Tag
        {...{
            ref,
            className: cx(
                'Flex',
                gap && [
                    gap === 'xxs' && 'gap__xxs',
                    gap === 'xs' && 'gap__xs',
                    gap === 'sm' && 'gap__sm',
                    gap === 'md' && 'gap__md',
                    gap?.xs === 'xs' && 'xs__gap__xs',
                    gap?.xs === 'sm' && 'xs__gap__sm',
                ],
                columnGap && [
                    columnGap?.default === 'sm' && 'columnGap__sm',
                    columnGap?.xs === 'md' && 'xs__columnGap__md',
                ],
                className,
            ),
            style: {
                ...flexGrow && { flexGrow },
                ...flexDirection && { flexDirection },
                ...justifyContent && { justifyContent },
                ...alignItems && { alignItems },
                ...flexWrap && { flexWrap },
                ...style,
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
    gap: PropTypes.oneOfType([
        PropTypes.oneOf(['xxs', 'xs', 'sm', 'md']),
        PropTypes.shape({
            xs: PropTypes.oneOf(['xs', 'sm']),
        }),
    ]),
    columnGap: PropTypes.oneOfType([
        PropTypes.shape({
            default: PropTypes.oneOf(['sm']),
            xs: PropTypes.oneOf(['md']),
        }),
    ]),
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    Tag: PropTypes.any,
}

export default Flex
