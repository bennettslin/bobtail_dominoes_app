import React from 'react'
import PropTypes from 'prop-types'
import List from '../List'
import MoveLog from './MoveLog'
import { getPointsForMoves } from '../../utils/music/mechanics/points'
import { HAND_COUNT } from '../../constants/music/play'

const PlayLog = ({
    moves,
    discardedIndices,
    fontSize,
    playerName,
}) => {
    let log = null

    if (playerName) {
        log = moves ? (
            `${playerName} plays ${moves.length === HAND_COUNT ? 'full hand ' : ''}for ${getPointsForMoves({ moves, handCount: HAND_COUNT })} points.`
        ) : (
            `${playerName} ${discardedIndices.length ? 'exchanges on' : 'passes'} their turn.`
        )
    }

    return (
        <>
            {log}
            {moves && (
                <List {...{ fontSize, isClean: !log }}>
                    {moves.map((move, index) => (
                        <MoveLog
                            {...{
                                key: index,
                                ...move,
                            }}
                        />
                    ))}
                </List>
            )}
        </>
    )
}

PlayLog.propTypes = {
    moves: PropTypes.arrayOf(PropTypes.shape({
        dominoIndex: PropTypes.number.isRequired,
        placement: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ),
    })),
    discardedIndices: PropTypes.array,
    fontSize: PropTypes.string,
    playerName: PropTypes.string,
}

export default PlayLog
