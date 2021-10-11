import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import StyledCheckerButton from '../../../Styled/CheckerButton'
import DominoSvg from '../../../Svgs/Domino'
import { updateCurrentPitchSet } from '../../../../redux/chords/action'
import { mapCurrentPitchSet } from '../../../../redux/chords/selector'
import cPitchButton from '../../../../assets/svgs/chords/cPitchButton'
import './style'

const COORDINATES = [0, 6.7, 25, 50, 75, 93.3, 100]

const PitchButton = ({ pitch }) => {
    const
        dispatch = useDispatch(),
        currentPitchSet = useSelector(mapCurrentPitchSet),
        isOn = currentPitchSet.has(pitch)

    const handleButtonClick = () => {
        const newPitchSet = new Set(currentPitchSet)
        if (isOn) {
            newPitchSet.delete(pitch)
        } else {
            newPitchSet.add(pitch)
        }

        dispatch(updateCurrentPitchSet(newPitchSet))
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
}

export default PitchButton
