import React from 'react'
import Array from '../../../../components/Array'
import ChordAbbreviations from '../../../../components/ChordAbbreviations'
import { getCommaSeparatedList } from '../../../format'
import { getArrayOfIndices } from '../../../general'
import { getChordAbbreviationsList, getDominoLabel } from '../../chords/label'
import { getPointsForMoves, getPointsForPitchSets } from '../../chords/points'
import { getDominoPitches } from '../dominoes'
import { getPlayerIndex } from '../play/turns'

export const getLogForTurn = ({
    turn,
    turnIndex,
    playersCount,
    playerNames = getArrayOfIndices(playersCount).map(playerIndex => (
        `Player ${playerIndex + 1}`
    )),
    handCount,
}) => {
    const { moves, dominoIndex, discardedIndices, winnerIndices } = turn

    if (Number.isFinite(dominoIndex)) {
        return `${getDominoLabel(getDominoPitches(dominoIndex))} starts the board.`

    } else if (winnerIndices) {
        const winnersList = winnerIndices.map(winnerIndex => (
            playerNames[winnerIndex]
        ))
        return (
            <>
                <Array {...{ list: getCommaSeparatedList(winnersList) }} />
                {` ${winnersList.length > 1 ? 'win' : 'wins'} the game!`}
            </>
        )

    } else {
        const playerIndex = getPlayerIndex({ turnIndex, playersCount })
        return moves ? (
            `${playerNames[playerIndex]} plays ${moves.length === handCount ? 'full hand ' : ''}for ${getPointsForMoves({ moves })} points.`
        ) : (
            `${playerNames[playerIndex]} ${discardedIndices.length ? 'exchanges on' : 'passes'} their turn.`
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
