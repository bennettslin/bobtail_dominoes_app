import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { mapCurrentPitchSet } from '../../../../redux/chords/selector'
import { getChordLabel } from '../../../../utils/chords/label'
import { getTextWithAccidentalsSeparated } from '../../../../utils/format/music'
import './style'

const ChordLabel = () => {
    const currentPitchSet = useSelector(mapCurrentPitchSet)

    return (
        <div
            {...{
                className: cx(
                    'ChordLabel',
                ),
            }}
        >
            {getTextWithAccidentalsSeparated(getChordLabel(currentPitchSet))}
        </div>
    )
}

export default ChordLabel
