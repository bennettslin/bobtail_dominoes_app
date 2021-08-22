import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactTooltip from 'react-tooltip'
import './style'

const Tooltip = ({
    tooltipId,
    isTooltipSuccess,
    handleTooltipHide,
}) => (
    <ReactTooltip
        {...{
            className: cx(
                'ReactTooltip',
                'font__text',
                'dropShadow',
            ),
            id: tooltipId,
            effect: 'solid',
            delayShow: isTooltipSuccess ? 0 : 750,
            delayHide: isTooltipSuccess ? 500 : 250,
            type: isTooltipSuccess ? 'success' : 'light',
            afterHide: handleTooltipHide,
        }}
    />
)

Tooltip.propTypes = {
    tooltipId: PropTypes.string.isRequired,
    isTooltipShown: PropTypes.bool,
    isTooltipSuccess: PropTypes.bool,
    handleTooltipHide: PropTypes.func,
}

export default Tooltip
