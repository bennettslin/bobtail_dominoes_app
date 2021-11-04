import React from 'react'
import PropTypes from 'prop-types'
import ChordAbbreviations from '../../../ChordAbbreviations'
import Flex from '../../../Flex'
import StyledShadow from '../../../Styled/Shadow'
import { getChordAbbreviationsList, getDominoLabel } from '../../../../utils/music/chords/label'
import { getPointsForPitchSets } from '../../../../utils/music/chords/points'

const MoveLog = ({
    dominoIndex,
    pitchSets,

}) => (
    <Flex>
        <StyledShadow>
            <li>
                {`${getDominoLabel(dominoIndex)} builds `}
                <ChordAbbreviations
                    {...{
                        abbreviations: getChordAbbreviationsList(pitchSets),
                    }}
                />
                {` for ${getPointsForPitchSets(pitchSets)} points.`}
            </li>
        </StyledShadow>
    </Flex>
)

MoveLog.propTypes = {
    dominoIndex: PropTypes.number.isRequired,
    pitchSets: PropTypes.arrayOf(
        PropTypes.object.isRequired,
    ).isRequired,
}

export default MoveLog
