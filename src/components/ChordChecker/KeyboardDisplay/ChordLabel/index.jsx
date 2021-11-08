import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledChordLabel from '../../../Styled/ChordLabel'
import { mapCurrentPitchSet } from '../../../../redux/audio/selector'
import { getChordLabel } from '../../../../utils/music/chords/label'
import './style'

const ChordLabel = () => {
    const currentPitchSet = useSelector(mapCurrentPitchSet)

    return (
        <StyledChordLabel
            {...{
                className: cx(
                    'ChordLabel',
                    'labelFontSize__md',
                ),
            }}
        >
            {getChordLabel(currentPitchSet)}
        </StyledChordLabel>
    )
}

export default ChordLabel
