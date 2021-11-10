import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Flex from '../../../Flex'
import StaticArray from '../../../StaticArray'
import StyledShadow from '../../../Styled/Shadow'
import MoveLog from '../MoveLog'
import { getArrayOfIndices } from '../../../../utils/general'
import { getDominoLabel } from '../../../../utils/music/chords/label'
import { getCommaSeparatedList } from '../../../../utils/format'
import { getPlayerIndex } from '../../../../utils/music/game/play/turns'
import { getPointsForMoves } from '../../../../utils/music/chords/points'
import { getMapIsLatestTurn, getMapTurn } from '../../../../redux/game/selector'

const TurnLog = ({
    turnIndex,
    playersCount,
    playerNames = getArrayOfIndices(playersCount).map(playerIndex => (
        `Player ${playerIndex + 1}`
    )),
    handCount,
}) => {
    const
        turn = useSelector(getMapTurn(turnIndex)),
        isLatestTurn = useSelector(getMapIsLatestTurn(turnIndex)),
        { moves, dominoIndex, discardedIndices, winnerIndices } = turn

    let log

    if (Number.isFinite(dominoIndex)) {
        log = `${getDominoLabel(dominoIndex)} starts the board.`

    } else if (winnerIndices) {
        const winnersList = winnerIndices.map(winnerIndex => (
            playerNames[winnerIndex]
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
        const playerIndex = getPlayerIndex({ turnIndex, playersCount })
        log = moves ? (
            `${playerNames[playerIndex]} plays ${moves.length === handCount ? 'full hand ' : ''}for ${getPointsForMoves({ moves, handCount })} points.`
        ) : (
            `${playerNames[playerIndex]} ${discardedIndices.length ? 'exchanges on' : 'passes'} their turn.`
        )
    }

    return (
        <Flex>
            <StyledShadow>
                {log}
                {moves && (
                    <ul>
                        {moves.map((move, index) => (
                            <MoveLog {...{ key: index, ...move }} />
                        ))}
                    </ul>
                )}
            </StyledShadow>
        </Flex>
    )
}

TurnLog.propTypes = {
    turnIndex: PropTypes.number.isRequired,
    playersCount: PropTypes.number.isRequired,
    playerNames: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ),
    handCount: PropTypes.number.isRequired,
}

export default TurnLog
