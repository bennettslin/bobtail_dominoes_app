import React from 'react'
import cx from 'classnames'
import StyledDisplay from '../../Styled/Display'
import StyledPlatform from '../../Styled/Platform'
import ChordLabel from './ChordLabel'
import './style'

const CheckerDisplay = () => (
    <StyledPlatform isBottomPlatform>
        <StyledDisplay
            {...{
                className: cx(
                    'CheckerDisplay',
                ),
                flexDirection: 'column',
            }}
        >
            <ChordLabel />
        </StyledDisplay>
    </StyledPlatform>
)

export default CheckerDisplay
