import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../Flex'
import { mapCurrentPitchSet } from '../../../../redux/chords/selector'
import { getIsChord, getIsLegalRow } from '../../../../utils/chords/valid'
import './style'

const ValidIcon = () => {
    const currentPitchSet = useSelector(mapCurrentPitchSet)

    return (
        <Flex
            {...{
                className: cx(
                    'ValidIcon',
                ),
            }}
        >
            {getIsLegalRow(currentPitchSet) ? (
                getIsChord(currentPitchSet) && 'V'
            ) : (
                'X'
            )}
        </Flex>
    )
}

export default ValidIcon
