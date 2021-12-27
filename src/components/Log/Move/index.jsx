import React from 'react'
import PropTypes from 'prop-types'
import ChordAbbreviations from '../../ChordAbbreviations'
import {
    getChordAbbreviationsList,
    getDominoLabel,
} from '../../../utils/music/chords/label'
import { getPointsForPitchSets } from '../../../utils/music/mechanics/points'
import ListItem from '../../List/ListItem'

const MoveLog = ({
    dominoIndex,
    pitchSets,

}) => (
    <ListItem>
        {`${getDominoLabel(dominoIndex)} builds `}
        <ChordAbbreviations
            {...{
                abbreviations: getChordAbbreviationsList(pitchSets),
            }}
        />
        {` for ${getPointsForPitchSets(pitchSets)} points.`}
    </ListItem>
)

MoveLog.propTypes = {
    dominoIndex: PropTypes.number.isRequired,
    pitchSets: PropTypes.arrayOf(
        PropTypes.object.isRequired,
    ).isRequired,
}

export default MoveLog
