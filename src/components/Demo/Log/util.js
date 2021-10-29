import { getChordsTextList, getDominoLabel } from '../../../utils/music/chords/label'
import { getPointsForMoves, getPointsForPitchSets } from '../../../utils/music/chords/points'
import { getDominoPitches } from '../../../utils/music/game/dominoes'

export const getLogForTurn = ({
    moves,
    dominoIndex,
    playerIndex,

}) => {
    if (Number.isFinite(dominoIndex)) {
        return `${getDominoLabel(getDominoPitches(dominoIndex))} starts the board.`
    } else {
        return moves ? (
            `Player ${playerIndex + 1} earns ${getPointsForMoves({ moves })} points.`
        ) : (
            `Player ${playerIndex + 1} exchanges their hand.`
        )
    }
}

export const getLogForMove = ({
    dominoIndex,
    pitchSets,

}) => (
    `${getDominoLabel(getDominoPitches(dominoIndex))} builds ${getChordsTextList(pitchSets)} for ${getPointsForPitchSets(pitchSets)} points.`
)
