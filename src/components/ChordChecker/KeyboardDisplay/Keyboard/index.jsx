import React from 'react'
import cx from 'classnames'
// import { useSelector } from 'react-redux'
import Flex from '../../../Flex'
import KeyboardKey from './Key'
import { getPitchIndices } from '../../../../utils/audio'
import { getArrayOfIndices } from '../../../../utils/general'
import './style'

const ALL_PITCH_INDICES = getPitchIndices(new Set(getArrayOfIndices(12)))

const Keyboard = () => {
    return (
        <Flex
            {...{
                className: cx(
                    'Keyboard',
                ),
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
