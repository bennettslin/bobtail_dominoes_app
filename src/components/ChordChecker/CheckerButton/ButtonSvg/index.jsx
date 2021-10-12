import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Svg from '../../../Svg'
import styleConfigPitch from '../../../../styles/checker/pitch'
import styleConfigPitchOn from '../../../../styles/checker/pitchOn'
import button from '../../../../assets/svgs/chords/button'
import buttonClicked from '../../../../assets/svgs/chords/buttonClicked'
import './style'

const CheckerButtonSvg = ({
    isClicked,
    isOn,
    styleConfig,
}) => (
    <Svg
        {...{
            key: isOn,
            className: cx(
                'CheckerButtonSvg',
                isClicked && 'CheckerButtonSvg__clicked',
            ),
            src: isClicked ?
                buttonClicked :
                button,
            styleConfig: styleConfig || (
                isOn ?
                    styleConfigPitchOn :
                    styleConfigPitch
            ),
        }}
    />
)

CheckerButtonSvg.propTypes = {
    isClicked: PropTypes.bool,
    isOn: PropTypes.bool,
    styleConfig: PropTypes.object,
}

export default CheckerButtonSvg
