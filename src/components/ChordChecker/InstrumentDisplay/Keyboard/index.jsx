import React from 'react'
import cx from 'classnames'
import Flex from '../../../Flex'
import KeyboardKey from './Key'
import { ORDERED_PITCH_INDICES } from './util'
import './style'

const Keyboard = () => (
    <Flex
        {...{
            className: cx(
                'Keyboard',
            ),
        }}
    >
        {ORDERED_PITCH_INDICES.map(pitchIndex => (
            <KeyboardKey
                {...{
                    key: pitchIndex,
                    pitchIndex,
                }}
            />
        ))}
    </Flex>
)

export default Keyboard
