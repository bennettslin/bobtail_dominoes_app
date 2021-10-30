import React from 'react'
import PropTypes from 'prop-types'
import ChordAbbreviations from '../../../ChordAbbreviations'
import { getChordAbbreviationsList, getDominoLabel } from '../../../../utils/music/chords/label'
import { getDominoPitches } from '../../../../utils/music/game/dominoes'
import { getPointsForPitchSets } from '../../../../utils/music/chords/points'

const MoveLog = ({
    dominoIndex,
    pitchSets,
}) => (
    <li>
        {`${getDominoLabel(getDominoPitches(dominoIndex))} builds `}
        <ChordAbbreviations
            {...{ abbreviations: getChordAbbreviationsList(pitchSets) }}
        />
        {` for ${getPointsForPitchSets(pitchSets)} points.`}
    </li>
)

MoveLog.propTypes = {
    dominoIndex: PropTypes.number.isRequired,
    pitchSets: PropTypes.arrayOf(
        PropTypes.object.isRequired,
    ).isRequired,
}

export default MoveLog
