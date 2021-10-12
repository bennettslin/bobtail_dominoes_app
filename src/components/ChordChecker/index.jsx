import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import PitchButtons from './PitchButtons'
import OptionButtons from './OptionButtons'
import StyledPlatform from '../Styled/Platform'
import StyledDisplay from '../Styled/Display'
import { margin__sm } from '../../constants/responsive'
import './style'

const ChordChecker = () => (
    <Flex
        {...{
            className: cx(
                'ChordChecker',
            ),
            flexDirection: 'column',
            justifyContent: 'normal',
            alignItems: 'normal',
            gap: margin__sm,
        }}
    >
        <Flex
            {...{
                className: cx(
                    'ChordChecker__bottomRow',
                ),
                alignItems: 'normal',
            }}
        >
            <PitchButtons />
            <OptionButtons />
        </Flex>
        <StyledPlatform>
            <StyledDisplay>
                testing
            </StyledDisplay>
        </StyledPlatform>
    </Flex>
)

export default ChordChecker
