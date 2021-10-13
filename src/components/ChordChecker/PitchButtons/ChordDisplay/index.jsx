import React from 'react'
import cx from 'classnames'
import StyledDisplay from '../../../Styled/Display'
import DisplayChordLabel from './ChordLabel'
import ValidIcon from './ValidIcon'
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
        <DisplayChordLabel />
    </StyledDisplay>
)

export default PitchChordDisplay
