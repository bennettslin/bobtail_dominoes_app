import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../Button'
import './style'

const CheckerPitchButton = ({ pitch, isOn, onClick }) => {
    const handleButtonClick = () => {
        onClick(pitch)
    }

    return (
        <Button
            {...{
                className: cx(
                    'CheckerPitchButton',
                    `CheckerPitchButton__${pitch}`,
                    `CheckerPitchButton__top${6 - Math.abs(6 - pitch)}`,
                    `CheckerPitchButton__left${Math.abs(6 - (pitch + 9) % 12)}`,
                    isOn && 'CheckerPitchButton__on',
                ),
                style: {

                },
                handleButtonClick,
            }}
        >
            {pitch}
        </Button>
    )
}

CheckerPitchButton.propTypes = {
    pitch: PropTypes.number.isRequired,
    isOn: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CheckerPitchButton
