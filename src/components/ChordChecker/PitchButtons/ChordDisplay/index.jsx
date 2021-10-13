import React from 'react'
import cx from 'classnames'
import StyledDisplay from '../../../Styled/Display'
import ValidIcon from './ValidIcon'
import ChordAbbreviation from './ChordAbbreviation'
import './style'

const PitchChordDisplay = () => (
    <StyledDisplay
        {...{
            className: cx(
                'PitchChordDisplay',
            ),
            flexDirection: 'column',
        }}
    >
        <ValidIcon />
        <ChordAbbreviation />
    </StyledDisplay>
)

export default PitchChordDisplay
