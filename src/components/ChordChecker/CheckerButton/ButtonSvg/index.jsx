import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Svg from '../../../Svg'
import styleConfigPitch from '../../../../styles/checker/pitch'
import styleConfigPitchOn from '../../../../styles/checker/pitchOn'
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
                styleConfigOn || styleConfigPitchOn :
                styleConfig || styleConfigPitch,
        }}
    />
)

CheckerButtonSvg.propTypes = {
    isClicked: PropTypes.bool,
    isOn: PropTypes.bool,
    styleConfig: PropTypes.object,
    styleConfigOn: PropTypes.object,
}

export default CheckerButtonSvg
