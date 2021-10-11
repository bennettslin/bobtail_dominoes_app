import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import StyledCheckerButton from '../../../Styled/CheckerButton'
import DominoSvg from '../../../Svgs/Domino'
import cPitchButton from '../../../../assets/svgs/chords/cPitchButton'
import './style'

const COORDINATES = [0, 6.7, 25, 50, 75, 93.3, 100]

const PitchButton = ({ pitch, isOn, onClick }) => {
    const handleButtonClick = () => {
        onClick(pitch)
    }

    return (
        <StyledCheckerButton
            {...{
                className: cx(
                    'PitchButton',
                ),
                style: {
                    top: `${COORDINATES[6 - Math.abs(6 - pitch)]}%`,
                    left: `${COORDINATES[Math.abs(6 - (pitch + 9) % 12)]}%`,
                },
                isOn,
                handleButtonClick,
            }}
        >
            <DominoSvg
                {...{
                    src: cPitchButton,
                    isFigure: false,
                }}
            />
        </StyledCheckerButton>
    )
}

PitchButton.propTypes = {
    pitch: PropTypes.number.isRequired,
    isOn: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default PitchButton
