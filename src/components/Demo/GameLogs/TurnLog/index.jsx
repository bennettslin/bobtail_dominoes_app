import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../Flex'
import StaticArray from '../../../StaticArray'
import StyledShadow from '../../../Styled/Shadow'
import MoveLog from '../MoveLog'
import { getDominoLabel } from '../../../../utils/music/chords/label'
import { getCommaSeparatedList } from '../../../../utils/format'
import { getPlayerIndex } from '../../../../utils/music/play/turns'
import { getPointsForMoves } from '../../../../utils/music/mechanics/points'
import { getMapIsLatestTurn, getMapTurn, mapIsGameOver, mapPlayers } from '../../../../redux/game/selector'
import { PLAYERS_COUNT } from '../../../../constants/music/demo'
import { HAND_COUNT } from '../../../../constants/music/play'
import './style'

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
        const playerIndex = getPlayerIndex({
            turnIndex,
            playersCount: PLAYERS_COUNT,
        })
        log = moves ? (
            `${players[playerIndex]} plays ${moves.length === HAND_COUNT ? 'full hand ' : ''}for ${getPointsForMoves({ moves, handCount: HAND_COUNT })} points.`
        ) : (
            `${players[playerIndex]} ${discardedIndices.length ? 'exchanges on' : 'passes'} their turn.`
        )
    }

    return (
        <Flex
            {...{
                className: cx(
                    'TurnLog',
                    isLatestTurn && 'TurnLog__latest',
                ),
            }}
        >
            <StyledShadow
                {...{
                    isInset: isLatestTurn,
                    isPlayedHighlight: isLatestTurn && !isGameOver,
                    isGold: isLatestTurn && isGameOver,
                }}
            >
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
}

export default TurnLog
