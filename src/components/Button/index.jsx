import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import { Link } from 'gatsby'
import ButtonAnimatable from './Animatable'
import Tooltip from './Tooltip'
import { updateSelectedPage } from '../../redux/page/action'
import { getPathForPage } from '../../constants/pages'
import './style'

const Button = forwardRef(({
    className,
    analyticsLabel,
    pageLink,
    href,
    isSelected,
    tooltipId,
    tooltipText,
    isTooltipSuccess,
    handleButtonClick = () => {},
    handleTooltipHide = () => {},
    children,

}, ref) => {
    const
        dispatch = useDispatch(),
        isTooltipEnabled = Boolean(tooltipId)

    const onClick = e => {
        if (isSelected) {
            return
        }

        if (pageLink) {
            dispatch(updateSelectedPage(pageLink))
        }

        if (analyticsLabel) {
            logEvent(
                'Button',
                analyticsLabel,
            )
        }

        handleButtonClick(e)
    }

    let Tag = 'button'

    if (href) {
        Tag = 'a'
    } else if (pageLink) {
        Tag = Link
    }

    return (
        <Tag
            {...{
                ref,
                className: cx(
                    'Button',
                    className,
                ),
                onClick,
                ...pageLink && {
                    to: getPathForPage(pageLink),
                },
                ...href && {
                    href,
                    target: '_blank',
                },
                ...isTooltipEnabled && {
                    'data-for': tooltipId,
                    'data-tip': tooltipText,
                },
                disabled: isSelected,
            }}
        >
            <ButtonAnimatable {...{ isSelected }}>
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
        </Tag>
    )
})

Button.propTypes = {
    className: PropTypes.string,
    analyticsLabel: PropTypes.string,
    pageLink: PropTypes.string,
    href: PropTypes.string,
    isSelected: PropTypes.bool,
    tooltipId: PropTypes.string,
    tooltipText: PropTypes.string,
    isTooltipShown: PropTypes.bool,
    isTooltipSuccess: PropTypes.bool,
    handleButtonClick: PropTypes.func,
    handleTooltipHide: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Button
