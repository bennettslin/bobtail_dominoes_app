import React from 'react'
import cx from 'classnames'
import StyledDisplay from '../../Styled/Display'
import StyledPlatform from '../../Styled/Platform'
import ChordLabel from './ChordLabel'
import Keyboard from './Keyboard'
import './style'

const KeyboardDisplay = () => (
    <StyledPlatform isBottomPlatform>
        <StyledDisplay
            {...{
                className: cx(
                    'KeyboardDisplay',
                ),
                flexDirection: 'column',
            }}
        >
            <Keyboard />
            <ChordLabel />
        </StyledDisplay>
    </StyledPlatform>
)

export default KeyboardDisplay
