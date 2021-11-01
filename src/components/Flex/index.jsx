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

                (flexDirection === 'column' || flexDirection?.default === 'column') && 'fD__column',
                (flexDirection === 'columnReverse' || flexDirection?.default === 'columnReverse') && 'fD__columnReverse',
                flexDirection?.sm === 'row' && 'sm__fD__row',
                flexDirection?.md === 'row' && 'md__fD__row',
                flexDirection?.md === 'column' && 'md__fD__column',
                flexDirection?.lg === 'row' && 'lg__fD__row',
                flexDirection?.lg === 'column' && 'lg__fD__column',
                flexDirection?.lg === 'columnReverse' && 'lg__fD__columnReverse',

                justifyContent === 'normal' && 'jC__normal',
                justifyContent === 'spaceBetween' && 'jC__spaceBetween',
                justifyContent === 'spaceEvenly' && 'jC__spaceEvenly',
                justifyContent === 'start' && 'jC__start',

                alignItems === 'normal' && 'aI__normal',
                alignItems === 'start' && 'aI__start',
                alignItems?.md === 'normal' && 'md__aI__normal',

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
        PropTypes.shape({
            sm: PropTypes.oneOf(['row']),
            md: PropTypes.oneOf(['column', 'row']),
            lg: PropTypes.oneOf(['column', 'columnReverse', 'row']),
        }),
    ]),
    justifyContent: PropTypes.oneOf([
        'normal', 'spaceBetween', 'spaceEvenly', 'start',
    ]),
    alignItems: PropTypes.oneOfType([
        PropTypes.oneOf(['normal', 'start']),
        PropTypes.shape({
            md: PropTypes.oneOf(['normal']),
        }),
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
    children: PropTypes.node,
    Tag: PropTypes.any,
}

export default Flex
