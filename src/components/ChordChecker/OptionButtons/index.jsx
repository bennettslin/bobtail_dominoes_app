import React from 'react'
import Flex from '../../Flex'
import StyledPlatform from '../../Styled/Platform'
import PlayButton from './PlayButton'
import ResetButton from './ResetButton'
import TransposeButton from './TransposeButton'
import AutoplayButton from './AutoplayButton'

const OptionButtons = () => (
    <StyledPlatform
        isRightPlatform
        {...{
            flexDirection: 'column',
            justifyContent: 'spaceEvenly',
            alignItems: 'normal',
            gap: 'md',
        }}
    >
        <Flex {...{ gap: 'xs' }}>
            <PlayButton />
            <AutoplayButton />
        </Flex>
        <Flex {...{ gap: 'xs' }}>
            <TransposeButton {...{ direction: -1 }} />
            <TransposeButton {...{ direction: 1 }} />
        </Flex>
        <Flex>
            <ResetButton />
        </Flex>
    </StyledPlatform>
)

export default OptionButtons
