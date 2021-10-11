import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledPlatform from '../../Styled/Platform'
import ChordDisplay from '../ChordDisplay'
import PitchButton from './PitchButton'
import { mapCurrentPitchSet } from '../../../redux/chords/selector'
import { getArrayOfPitchesForCircleOfFifths } from '../../../utils/chords/math'
import './style'

const PitchButtons = ({
    onClick,

}) => {
    const currentPitchSet = useSelector(mapCurrentPitchSet)

    return (
        <StyledPlatform>
            <div
                {...{
                    className: cx(
                        'PitchButtons',
                    ),
                }}
            >
                {getArrayOfPitchesForCircleOfFifths().map(pitch => (
                    <PitchButton
                        {...{
                            key: pitch,
                            pitch,
                            isOn: currentPitchSet.has(pitch),
                            onClick,
                        }}
                    />
                ))}
                <ChordDisplay />
            </div>
        </StyledPlatform>
    )
}

PitchButtons.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default PitchButtons
