import React from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../Flex'
import PitchButtons from './PitchButtons'
import CheckerOptionButtons from './OptionButtons'
import { updateCurrentPitchSet } from '../../redux/chords/action'
import { mapCurrentPitchSet } from '../../redux/chords/selector'
import { margin__sm } from '../../constants/responsive'
import './style'

const ChordChecker = () => {
    const
        dispatch = useDispatch(),
        currentPitchSet = useSelector(mapCurrentPitchSet)

    const onClick = pitch => {
        const newPitchSet = new Set(currentPitchSet)
        if (newPitchSet.has(pitch)) {
            newPitchSet.delete(pitch)
        } else {
            newPitchSet.add(pitch)
        }

        dispatch(updateCurrentPitchSet(newPitchSet))
    }

    const reset = () => {
        dispatch(updateCurrentPitchSet(new Set()))
    }

    return (
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
                <PitchButtons {...{ onClick }} />
                <CheckerOptionButtons {...{ reset }} />
            </Flex>
        </Flex>
    )
}

export default ChordChecker
