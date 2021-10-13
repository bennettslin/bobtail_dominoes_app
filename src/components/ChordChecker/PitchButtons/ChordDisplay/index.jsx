import React from 'react'
import cx from 'classnames'
import StyledDisplay from '../../../Styled/Display'
import ValidIcon from './ValidIcon'
import DisplayChordLabel from './ChordLabel'
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
