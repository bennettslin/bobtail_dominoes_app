import React from 'react'
import cx from 'classnames'
import AutoplayButton from './AutoplayButton'
import ResetButton from './ResetButton'
import StyledPlatform from '../../Styled/Platform'
import './style'

const Controls = () => {
    return (
        <StyledPlatform
            {...{
                className: cx(
                    'Controls',
                ),
                justifyContent: 'spaceEvenly',
                flexGrow: 1,
            }}
        >
            <AutoplayButton />
            <ResetButton />
        </StyledPlatform>
    )
}

export default Controls
