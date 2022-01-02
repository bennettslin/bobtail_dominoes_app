import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'
import Flex from '../Flex'
import ButtonAnimatable from './Animatable'
import Tooltip from './Tooltip'
import { getInternalLinkForPath } from '../../utils/pages/path'
import './style'

const Button = forwardRef(({
    className,
    href,
    analyticsLabel,
    pagePath,
    isSelected,
    dropShadow,
    tooltipId,
    tooltipText,
    isTooltipSuccess,
    handleButtonClick = () => {},
    handleTooltipHide = () => {},
    children,
    ...rest

}, ref) => {
    const
        isTooltipEnabled = Boolean(tooltipId),
        isInternalLink = pagePath && !isSelected

    let Tag = 'button'

    if (isInternalLink) {
        Tag = Link
    } else if (href) {
        Tag = 'a'
    }

    const onClick = e => {
        if (isSelected) {
            return
        }

        if (analyticsLabel) {
            logEvent(
                'Button',
                analyticsLabel,
            )
        }

        handleButtonClick(e)
    }

    return (
        <Flex
            {...{
                ref,
                className: cx(
                    'Button',
                    isSelected ?
                        'Button__selected' :
                        'Button__enabled',
                    className,
                ),
                href,
                ...href && {
                    target: '_blank',
                },
                onClick,
                ...isInternalLink && {
                    to: getInternalLinkForPath(pagePath),
                },
                ...isTooltipEnabled && {
                    'data-for': tooltipId,
                    'data-tip': tooltipText,
                },
                disabled: isSelected,
                Tag,
                ...rest,
            }}
        >
            <ButtonAnimatable {...{ isSelected, dropShadow }}>
                {children}
            </ButtonAnimatable>
            {isTooltipEnabled && (
                <Tooltip
                    {...{
                        tooltipId,
                        isTooltipSuccess,
                        handleTooltipHide,
                    }}
                />
            )}
        </Flex>
    )
})

Button.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    analyticsLabel: PropTypes.string,
    pagePath: PropTypes.string,
    isSelected: PropTypes.bool,
    dropShadow: PropTypes.bool,
    tooltipId: PropTypes.string,
    tooltipText: PropTypes.string,
    isTooltipShown: PropTypes.bool,
    isTooltipSuccess: PropTypes.bool,
    handleButtonClick: PropTypes.func,
    handleTooltipHide: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Button
