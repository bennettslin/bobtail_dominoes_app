import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ChordAbbreviations from '../../../../ChordAbbreviations'
import StyledChordLabel from '../../../../Styled/ChordLabel'
import { mapCurrentPitchSet } from '../../../../../redux/audio/selector'
import { getChordAbbreviation } from '../../../../../utils/music/chords/label'
import './style'

const DisplayChordLabel = () => {
    const
        currentPitchSet = useSelector(mapCurrentPitchSet),
        abbreviation = getChordAbbreviation(currentPitchSet)

    return (
        <StyledChordLabel
            {...{
                className: cx(
                    'DisplayChordLabel',
                ),
            }}
        >
            <ChordAbbreviations {...{ abbreviations: [abbreviation] }} />
        </StyledChordLabel>
    )
}

export default DisplayChordLabel
