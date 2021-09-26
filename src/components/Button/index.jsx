import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import { Link } from 'gatsby'
import Flex from '../Flex'
import ButtonAnimatable from './Animatable'
import Tooltip from './Tooltip'
import { updateSelectedPagePath } from '../../redux/page/action'
import { getLinkFromPath } from '../../utils/pages/path'
import './style'

const Button = forwardRef(({
    className,
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

}, ref) => {
    const
        dispatch = useDispatch(),
        isTooltipEnabled = Boolean(tooltipId),
        isInternalLink = pagePath && !isSelected,
        Tag = isInternalLink ? Link : 'button'

    const onClick = e => {
        if (isSelected) {
            return
        }

        if (pagePath) {
            dispatch(updateSelectedPagePath(pagePath))
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
                onClick,
                ...isInternalLink && {
                    to: getLinkFromPath(pagePath),
                },
                ...isTooltipEnabled && {
                    'data-for': tooltipId,
                    'data-tip': tooltipText,
                },
                disabled: isSelected,
                Tag,
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
