import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import PitchButtons from './PitchButtons'
import OptionButtons from './OptionButtons'
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
                alignItems: 'normal',
                gap: margin__sm,
            }}
        >
            <PitchButtons />
            <OptionButtons />
        </Flex>
    </Flex>
)

export default ChordChecker
