import React from 'react'
import cx from 'classnames'
import StyledDisplay from '../../../Styled/Display'
import DisplayChordLabel from './ChordLabel'
import ValidIcon from './ValidIcon'
import './style'

const PitchButtonsDisplay = () => (
    <StyledDisplay
        {...{
            className: cx(
                'PitchButtonsDisplay',
            ),
            flexDirection: 'column',
        }}
    >
        <ValidIcon />
        <DisplayChordLabel />
    </StyledDisplay>
)

export default PitchButtonsDisplay
