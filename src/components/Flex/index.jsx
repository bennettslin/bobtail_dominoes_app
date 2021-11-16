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
    order,
    children,
    Tag = 'div',
    ...rest
}, ref) => (
    <Tag
        {...{
            ref,
            className: cx(
                'Flex',

                flexGrow === 1 && 'fG__1',

                flexDirection === 'column' && 'fD__column',
                flexDirection === 'columnReverse' && 'fD__columnReverse',

                justifyContent === 'normal' && 'jC__normal',
                justifyContent === 'spaceBetween' && 'jC__spaceBetween',
                justifyContent === 'spaceEvenly' && 'jC__spaceEvenly',
                justifyContent === 'start' && 'jC__start',
                justifyContent === 'end' && 'jC__end',
                justifyContent?.xs === 'spaceBetween' && 'xs__jC__spaceBetween',

                alignItems === 'normal' && 'aI__normal',
                alignItems === 'start' && 'aI__start',
                alignItems === 'flexEnd' && 'aI__flexEnd',

                flexWrap === 'wrap' && 'fW__wrap',

                gap === 'xxs' && 'gap__xxs',
                gap === 'xs' && 'gap__xs',
                gap === 'sm' && 'gap__sm',
                gap === 'md' && 'gap__md',
                gap?.xs === 'xs' && 'xs__gap__xs',
                gap?.xs === 'sm' && 'xs__gap__sm',

                columnGap?.default === 'sm' && 'columnGap__sm',
                columnGap?.xs === 'md' && 'xs__columnGap__md',
                className,
            ),
            style: {
                order,
            },
            ...rest,
        }}
    >
        {children}
    </Tag>
))

Flex.propTypes = {
    className: PropTypes.string,
    flexGrow: PropTypes.oneOf([1]),
    flexDirection: PropTypes.oneOfType([
        PropTypes.oneOf(['column', 'columnReverse']),
    ]),
    justifyContent: PropTypes.oneOfType([
        PropTypes.oneOf(
            ['normal', 'spaceBetween', 'spaceEvenly', 'start', 'end'],
        ),
        PropTypes.shape({
            xs: PropTypes.oneOf(['spaceBetween']),
        }),
    ]),
    alignItems: PropTypes.oneOfType([
        PropTypes.oneOf(['normal', 'start', 'flexEnd']),
    ]),
    flexWrap: PropTypes.oneOf(['wrap']),
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
    order: PropTypes.number,
    children: PropTypes.node,
    Tag: PropTypes.any,
}

export default Flex
