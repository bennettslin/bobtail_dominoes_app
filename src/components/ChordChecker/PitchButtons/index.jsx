import React from 'react'
import cx from 'classnames'
import StyledPlatform from '../../Styled/Platform'
import PitchChordDisplay from './ChordDisplay'
import PitchButton from './PitchButton'
import { getArrayOfPitchesForCircleOfFifths } from '../../../utils/chords/math'
import './style'

const PitchButtons = () => (
    <StyledPlatform isLeftPlatform>
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
                    }}
                />
            ))}
            <PitchChordDisplay />
        </div>
    </StyledPlatform>
)

export default PitchButtons
