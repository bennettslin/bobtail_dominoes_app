import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Svg from '../../Svg'
import button from '../../../assets/svgs/checker/button'
import buttonPressed from '../../../assets/svgs/checker/buttonPressed'
import { join } from '../../../utils/general'
import './style'

const ArcadeButtonSvg = ({
    isOn,
    styleConfig,
    styleConfigOn,
}) => (
    <>
        {/* Two svgs allows for showing pressed UI when button is active. */}
        <Svg
            {...{
                key: join(['pressed', isOn]),
                className: cx(
                    'ArcadeButtonSvg',
                    'ArcadeButtonSvg__pressed',
                ),
                src: buttonPressed,
                styleConfig: isOn ?
                    styleConfigOn :
                    styleConfig,
            }}
        />
        <Svg
            {...{
                key: isOn,
                className: cx(
                    'ArcadeButtonSvg',
                ),
                src: button,
                styleConfig: isOn ?
                    styleConfigOn :
                    styleConfig,
            }}
        />
    </>
)

ArcadeButtonSvg.propTypes = {
    isOn: PropTypes.bool,
    styleConfig: PropTypes.object.isRequired,
    styleConfigOn: PropTypes.object,
}

export default ArcadeButtonSvg
