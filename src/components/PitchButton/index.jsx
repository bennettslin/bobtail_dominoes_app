import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import Flex from '../../Flex'
import './style'
import { getChordLabel } from '../../../utils/chords/label'
import { getPoints } from '../../../utils/chords/score'
import { getIsChord } from '../../../utils/chords/valid'

const ChordChecker = () => {
    const [currentPitchSet, setCurrentPitchSet] = useState(new Set())

    const onClick = pitch => {
        console.log('pitch', pitch)
        const newPitchSet = new Set(currentPitchSet)
        if (newPitchSet.has(pitch)) {
            newPitchSet.delete(pitch)
        } else {
            newPitchSet.add(pitch)
        }
        for (const item of newPitchSet) {
            console.log(item)
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
            chord label: {getChordLabel(currentPitchSet)}
            points: {getPoints(currentPitchSet)}
            is valid: {getIsChord(currentPitchSet) ? 'valid' : 'invalid'}
            <Flex>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(pitch => (
                    <Button
                        {...{
                            key: pitch,
                            handleButtonClick: () => onClick(pitch),
                        }}
                    >
                        {pitch}
                    </Button>
                ))}
            </Flex>
            <Button
                {...{
                    handleButtonClick: reset,
                }}
            >
                reset
            </Button>
        </Flex>
    )
}

// ChordChecker.propTypes = {

// }

export default ChordChecker
