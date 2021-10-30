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
        abbreviations = [getChordAbbreviation(currentPitchSet)]

    return (
        <StyledChordLabel
            {...{
                className: cx(
                    'DisplayChordLabel',
                ),
            }}
        >
            <ChordAbbreviations {...{ abbreviations }} />
        </StyledChordLabel>
    )
}

export default DisplayChordLabel
