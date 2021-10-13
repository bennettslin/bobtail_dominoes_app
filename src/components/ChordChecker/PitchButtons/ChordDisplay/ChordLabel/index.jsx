import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledChordLabel from '../../../../Styled/ChordLabel'
import { mapCurrentPitchSet } from '../../../../../redux/chords/selector'
import { getChordAbbreviation } from '../../../../../utils/chords/label'
import { getTextWithAccidentalsSeparated } from '../../../../../utils/format/music'

const DisplayChordLabel = () => {
    const
        currentPitchSet = useSelector(mapCurrentPitchSet),
        {
            root,
            type,
            sup,
        } = getChordAbbreviation(currentPitchSet)

    return (
        <StyledChordLabel
            {...{
                className: cx(
                    'fontSize__md',
                ),
            }}
        >
            {getTextWithAccidentalsSeparated(root)}{type}
            {/* Always render sup tag for line height consistency. */}
            <sup>{sup}</sup>
        </StyledChordLabel>
    )
}

export default DisplayChordLabel
