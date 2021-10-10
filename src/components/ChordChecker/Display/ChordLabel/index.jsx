import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../Flex'
import { mapCurrentPitchSet } from '../../../../redux/chords/selector'
import { getChordLabel } from '../../../../utils/chords/label'
import { getTextWithAccidentalsSeparated } from '../../../../utils/format/music'
import './style'

const ChordLabel = () => {
    const currentPitchSet = useSelector(mapCurrentPitchSet)

    return (
        <Flex
            {...{
                className: cx(
                    'ChordLabel',
                ),
                justifyContent: 'flex-start',
            }}
        >
            <span>
                {getTextWithAccidentalsSeparated(getChordLabel(currentPitchSet))}
            </span>
        </Flex>
    )
}

export default ChordLabel
