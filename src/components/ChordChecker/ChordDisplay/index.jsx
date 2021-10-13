import React from 'react'
import cx from 'classnames'
import StyledDisplay from '../../Styled/Display'
import StyledPlatform from '../../Styled/Platform'
import ChordLabel from './ChordLabel'
import './style'

const ChordDisplay = () => (
    <StyledPlatform isBottomPlatform>
        <StyledDisplay
            {...{
                className: cx(
                    'ChordDisplay',
                ),
            }}
        >
            <ChordLabel />
        </StyledDisplay>
    </StyledPlatform>
)

export default ChordDisplay
