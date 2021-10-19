import React from 'react'
import cx from 'classnames'
import Flex from '../../../Flex'
import KeyboardKey from './Key'
import { ALL_PITCH_INDICES } from '../../../../constants/audio'
import { GAP_KEYBOARD } from './util'
import './style'

const Keyboard = () => {
    return (
        <Flex
            {...{
                className: cx(
                    'Keyboard',
                ),
                gap: GAP_KEYBOARD,
            }}
        >
            {ALL_PITCH_INDICES.map(pitchIndex => (
                <KeyboardKey
                    {...{
                        key: pitchIndex,
                        pitchIndex,
                    }}
                />
            ))}
        </Flex>
    )
}

export default Keyboard
