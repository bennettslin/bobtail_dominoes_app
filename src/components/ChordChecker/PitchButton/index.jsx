import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
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
                    isOn && 'CheckerPitchButton__on',
                ),
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
