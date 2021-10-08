import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import Flex from '../Flex'
import CheckerDisplay from './Display'
import CheckerPitchButton from './PitchButton'
import { getArrayOfPitches } from '../../utils/chords/math'
import './style'

const ChordChecker = () => {
    const [currentPitchSet, setCurrentPitchSet] = useState(new Set())

    const onClick = pitch => {
        const newPitchSet = new Set(currentPitchSet)
        if (newPitchSet.has(pitch)) {
            newPitchSet.delete(pitch)
        } else {
            newPitchSet.add(pitch)
        }
        setCurrentPitchSet(newPitchSet)
    }

    const reset = () => {
        setCurrentPitchSet(new Set())
    }

    return (
        <Flex
            {...{
                className: cx(
                    'ChordChecker',
                ),
                flexDirection: 'column',
            }}
        >
            <CheckerDisplay {...{ currentPitchSet }} />
            <Flex>
                {getArrayOfPitches().map(pitch => (
                    <CheckerPitchButton
                        {...{
                            key: pitch,
                            pitch,
                            isOn: currentPitchSet.has(pitch),
                            onClick,
                        }}
                    />
                ))}
                <Button
                    {...{
                        handleButtonClick: reset,
                    }}
                >
                reset
                </Button>
            </Flex>
        </Flex>
    )
}

// ChordChecker.propTypes = {

// }

export default ChordChecker
