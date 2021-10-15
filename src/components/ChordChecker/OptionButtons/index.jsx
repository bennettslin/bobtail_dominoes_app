import React from 'react'
import Flex from '../../Flex'
import StyledPlatform from '../../Styled/Platform'
import PlayButton from './PlayButton'
import ResetButton from './ResetButton'
import TransposeButton from './TransposeButton'
import AutoplayButton from './AutoplayButton'
import { margin__md, margin__xs } from '../../../constants/responsive'

const OptionButtons = () => (
    <StyledPlatform
        isRightPlatform
        {...{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'normal',
            gap: margin__md,
        }}
    >
        <Flex
            {...{
                gap: margin__xs,
            }}
        >
            <PlayButton />
            <AutoplayButton />
        </Flex>
        <Flex
            {...{
                gap: margin__xs,
            }}
        >
            <TransposeButton {...{ direction: -1 }} />
            <TransposeButton {...{ direction: 1 }} />
        </Flex>
        <Flex>
            <ResetButton />
        </Flex>
    </StyledPlatform>
)

export default OptionButtons
