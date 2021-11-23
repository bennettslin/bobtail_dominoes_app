import React from 'react'
import PropTypes from 'prop-types'
import ChordAbbreviations from '../../../ChordAbbreviations'
import { getChordAbbreviationsList, getDominoLabel } from '../../../../utils/music/chords/label'
import { getPointsForPitchSets } from '../../../../utils/music/game/points'

const MoveLog = ({
    dominoIndex,
    pitchSets,

}) => (
    <li>
        {`${getDominoLabel(dominoIndex)} builds `}
        <ChordAbbreviations
            {...{
                abbreviations: getChordAbbreviationsList(pitchSets),
            }}
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
