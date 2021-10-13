import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import PitchButtons from './PitchButtons'
import OptionButtons from './OptionButtons'
import ChordDisplay from './ChordDisplay'
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
        <ChordDisplay />
    </Flex>
)

export default ChordChecker
