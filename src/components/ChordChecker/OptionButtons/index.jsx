import React from 'react'
import Flex from '../../Flex'
import StyledPlatform from '../../Styled/Platform'
import ResetButton from './ResetButton'
import TransposeButton from './TransposeButton'
import { margin__md, margin__xs } from '../../../constants/responsive'

const OptionButtons = () => (
    <StyledPlatform
        isRightPlatform
        {...{
            flexDirection: 'column',
            gap: margin__md,
        }}
    >
        <Flex
            {...{
                flexDirection: 'column',
                gap: margin__xs,
            }}
        >
            <TransposeButton {...{ direction: 1 }} />
            <TransposeButton {...{ direction: -1 }} />
        </Flex>
        <ResetButton />
    </StyledPlatform>
)

export default OptionButtons
