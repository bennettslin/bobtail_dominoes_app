import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import StaticArray from '../../../StaticArray'
import StyledTurnLog from '../../../Styled/Log'
import PlayLog from '../../../PlayLog'
import { getDominoLabel } from '../../../../utils/music/chords/label'
import { getCommaSeparatedList } from '../../../../utils/format'
import { getPlayerIndex } from '../../../../utils/music/play/turns'
import { getMapIsLatestTurn, getMapTurn, mapIsGameOver, mapPlayers } from '../../../../redux/game/selector'
import { PLAYERS_COUNT } from '../../../../constants/music/demo'

const TurnLog = ({
    turnIndex,
}) => {
    const
        players = useSelector(mapPlayers),
        turn = useSelector(getMapTurn(turnIndex)),
        isLatestTurn = useSelector(getMapIsLatestTurn(turnIndex)),
        isGameOver = useSelector(mapIsGameOver),
        { moves, dominoIndex, discardedIndices, winnerIndices } = turn

    let log

    if (Number.isFinite(dominoIndex)) {
        log = `${getDominoLabel(dominoIndex)} starts the board.`

    } else if (winnerIndices) {
        const winnersList = winnerIndices.map(winnerIndex => (
            players[winnerIndex]
        ))
        log = (
            <>
                <StaticArray
                    {...{ list: getCommaSeparatedList(winnersList) }}
                />
                {` ${winnersList.length > 1 ? 'win' : 'wins'} the game!`}
            </>
        )

    } else {
        log = (
            <PlayLog
                {...{
                    moves,
                    discardedIndices,
                    playerName: players[getPlayerIndex({
                        turnIndex,
                        playersCount: PLAYERS_COUNT,
                    })],
                }}
            />
        )
    }

    return (
        <StyledTurnLog
            {...{
                isGameOver,
                isLatestTurn,
            }}
        >
            {log}
        </StyledTurnLog>
    )
}

TurnLog.propTypes = {
    turnIndex: PropTypes.number.isRequired,
}

export default TurnLog
