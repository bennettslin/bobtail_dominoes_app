import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import ChordCheckerEngine from './Engine'
import InstrumentDisplay from './InstrumentDisplay'
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
            gap: { xs: 'sm' },
        }}
    >
        <ChordCheckerEngine />
        <InstrumentDisplay />
        <Flex
            {...{
                className: cx(
                    'ChordChecker__bottomRow',
                ),
                alignItems: 'normal',
                gap: { xs: 'sm' },
            }}
        >
            <PitchButtons />
            <OptionButtons />
        </Flex>
    </Flex>
)

export default ChordChecker
