import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ChordAbbreviations from '../../../../ChordAbbreviations'
import StyledChordLabel from '../../../../Styled/ChordLabel'
import { mapCheckerPitchSet } from '../../../../../redux/checker/selector'
import { getChordAbbreviation } from '../../../../../utils/music/chords/label'

const DisplayChordLabel = () => {
    const
        checkerPitchSet = useSelector(mapCheckerPitchSet),
        abbreviations = [getChordAbbreviation(checkerPitchSet)]

    return (
        <StyledChordLabel
            {...{
                className: cx(
                    'DisplayChordLabel',
                    'labelFontSize__lg',
                ),
            }}
        >
            <ChordAbbreviations {...{ abbreviations }} />
        </StyledChordLabel>
    )
}

export default DisplayChordLabel
