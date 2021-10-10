import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../Button'
import DominoSvg from '../../../Svgs/Domino'
import cPitchButton from '../../../../assets/svgs/chords/cPitchButton'
import './style'

const PitchButton = ({ pitch, isOn, onClick }) => {
    const handleButtonClick = () => {
        onClick(pitch)
    }

    return (
        <Button
            {...{
                className: cx(
                    'PitchButton',
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

            <DominoSvg
                {...{
                    src: cPitchButton,
                    isFigure: false,
                }}
            />
        </Button>
    )
}

PitchButton.propTypes = {
    pitch: PropTypes.number.isRequired,
    isOn: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default PitchButton
