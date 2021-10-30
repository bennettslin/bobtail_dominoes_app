import { getChordsTextList, getDominoLabel } from '../../../utils/music/chords/label'
import { getPointsForMoves, getPointsForPitchSets } from '../../../utils/music/chords/points'
import { getDominoPitches } from '../../../utils/music/game/dominoes'
import { getPlayerIndex } from '../../../utils/music/game/play/turns'

export const getLogForTurn = ({
    turn,
    turnIndex,
    playersCount,
    handCount,
}) => {
    const { moves, dominoIndex, discardedIndices, winnerIndices } = turn

    if (Number.isFinite(dominoIndex)) {
        return `${getDominoLabel(getDominoPitches(dominoIndex))} starts the board.`

    } else if (winnerIndices) {
        return `TODO: Winners!`

    } else {
        const playerIndex = getPlayerIndex({ turnIndex, playersCount })
        return moves ? (
            `Player ${playerIndex + 1} plays ${moves.length === handCount ? 'full hand ' : ''}for ${getPointsForMoves({ moves })} points.`
        ) : (
            `Player ${playerIndex + 1} ${discardedIndices.length ? 'exchanges on' : 'passes'} their turn.`
        )
    }
}

export const getLogForMove = ({
    dominoIndex,
    pitchSets,
}) => (
    `${getDominoLabel(getDominoPitches(dominoIndex))} builds ${getChordsTextList(pitchSets)} for ${getPointsForPitchSets(pitchSets)} points.`
)
