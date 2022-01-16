import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledChordLabel from '../../../Styled/ChordLabel'
import { mapCheckerPitchSet } from '../../../../redux/checker/selector'
import { getChordLabel } from '../../../../utils/music/chords/label'
import './style'

const ChordLabel = () => {
    const checkerPitchSet = useSelector(mapCheckerPitchSet)

    return (
        <StyledChordLabel
            {...{
                className: cx(
                    'ChordLabel',
                    'labelFontSize__md',
                ),
            }}
        >
            {getChordLabel(checkerPitchSet)}
        </StyledChordLabel>
    )
}

export default ChordLabel
