import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Svg from '../../../Svg'
import button from '../../../../assets/svgs/chords/button'
import buttonPressed from '../../../../assets/svgs/chords/buttonPressed'
import './style'

const CheckerButtonSvg = ({
    isClicked,
    isOn,
    styleConfig,
    styleConfigOn,
}) => (
    <Svg
        {...{
            key: isOn,
            className: cx(
                'CheckerButtonSvg',
                isClicked && 'CheckerButtonSvg__pressed',
            ),
            src: isClicked ?
                buttonPressed :
                button,
            styleConfig: isOn ?
                styleConfigOn :
                styleConfig,
        }}
    />
)

CheckerButtonSvg.propTypes = {
    isClicked: PropTypes.bool,
    isOn: PropTypes.bool,
    styleConfig: PropTypes.object.isRequired,
    styleConfigOn: PropTypes.object,
}

export default CheckerButtonSvg
