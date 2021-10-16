import React from 'react'
import { useSelector } from 'react-redux'
import StyledChordLabel from '../../../Styled/ChordLabel'
import { mapCurrentPitchSet } from '../../../../redux/chords/selector'
import { getChordLabel } from '../../../../utils/chords/label'

const ChordLabel = () => {
    const currentPitchSet = useSelector(mapCurrentPitchSet)

    return (
        <StyledChordLabel>
            {getChordLabel(currentPitchSet)}
        </StyledChordLabel>
    )
}

export default ChordLabel
