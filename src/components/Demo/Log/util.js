import React from 'react'
import ChordAbbreviations from '../../ChordAbbreviations'
import { getChordAbbreviationsList, getDominoLabel } from '../../../utils/music/chords/label'
import { getPointsForMoves, getPointsForPitchSets } from '../../../utils/music/chords/points'
import { getDominoPitches } from '../../../utils/music/game/dominoes'
import { getPlayerIndex } from '../../../utils/music/game/play/turns'
import { getCommaSeparatedList } from '../../../utils/format'

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
        const winnersList = winnerIndices.map(winnerIndex => (
            `Player ${winnerIndex + 1}`
        ))
        return `${getCommaSeparatedList(winnersList)} ${winnersList.length > 1 ? 'win' : 'wins'} the game!`

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
    <>
        {`${getDominoLabel(getDominoPitches(dominoIndex))} builds `}
        <ChordAbbreviations
            {...{ abbreviations: getChordAbbreviationsList(pitchSets) }}
        />
        {` for ${getPointsForPitchSets(pitchSets)} points.`}
    </>
)
