import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import CheckerDisplay from './CheckerDisplay'
import OptionButtons from './OptionButtons'
import PitchButtons from './PitchButtons'
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
        }}
    >
        <CheckerDisplay />
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
    </Flex>
)

export default ChordChecker
