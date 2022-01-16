import React from 'react'
import cx from 'classnames'
import StyledDisplay from '../../Styled/Display'
import StyledPlatform from '../../Styled/Platform'
import ChordLabel from './ChordLabel'
import Keyboard from './Keyboard'
import './style'

const InstrumentDisplay = () => (
    <StyledPlatform isBottomPlatform>
        <StyledDisplay
            {...{
                className: cx(
                    'InstrumentDisplay',
                ),
                flexDirection: 'column',
            }}
        >
            <Keyboard />
            <ChordLabel />
        </StyledDisplay>
    </StyledPlatform>
)

export default InstrumentDisplay
