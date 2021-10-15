import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import Audio from './Audio'
import ChordDisplay from './ChordDisplay'
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
        <Audio />
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
