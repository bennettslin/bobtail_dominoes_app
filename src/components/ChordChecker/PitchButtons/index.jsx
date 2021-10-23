import React from 'react'
import cx from 'classnames'
import StyledPlatform from '../../Styled/Platform'
import PitchButtonsDisplay from './Display'
import PitchButton from './PitchButton'
import { getArrayOfPitchesForCircleOfFifths } from '../../../utils/music/chords/math'
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
            <PitchButtonsDisplay />
        </div>
    </StyledPlatform>
)

export default PitchButtons
