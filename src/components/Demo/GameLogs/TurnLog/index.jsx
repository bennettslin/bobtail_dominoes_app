import React from 'react'
import PropTypes from 'prop-types'
import StaticArray from '../../../StaticArray'
import { getArrayOfIndices } from '../../../../utils/general'
import { getDominoLabel } from '../../../../utils/music/chords/label'
import { getDominoPitches } from '../../../../utils/music/game/dominoes'
import { getCommaSeparatedList } from '../../../../utils/format'
import { getPlayerIndex } from '../../../../utils/music/game/play/turns'
import { getPointsForMoves } from '../../../../utils/music/chords/points'

export const TurnLog = ({
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
                <StaticArray
                    {...{ list: getCommaSeparatedList(winnersList) }}
                />
                {` ${winnersList.length > 1 ? 'win' : 'wins'} the game!`}
            </>
        )

    } else {
        const playerIndex = getPlayerIndex({ turnIndex, playersCount })
        return moves ? (
            `${playerNames[playerIndex]} plays ${moves.length === handCount ? 'full hand ' : ''}for ${getPointsForMoves({ moves, handCount })} points.`
        ) : (
            `${playerNames[playerIndex]} ${discardedIndices.length ? 'exchanges on' : 'passes'} their turn.`
        )
    }
}

TurnLog.propTypes = {
    turn: PropTypes.shape({
        moves: PropTypes.arrayOf(
            PropTypes.shape({
                pitchSets: PropTypes.arrayOf(
                    PropTypes.object.isRequired,
                ).isRequired,
            }).isRequired,
        ),
    }).isRequired,
    turnIndex: PropTypes.number.isRequired,
    playersCount: PropTypes.number.isRequired,
    playerNames: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ),
    handCount: PropTypes.number.isRequired,
}

