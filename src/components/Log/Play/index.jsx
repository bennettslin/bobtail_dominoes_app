import React from 'react'
import PropTypes from 'prop-types'
import List from '../../List'
import ListItem from '../../List/ListItem'
import MoveLog from '../Move'
import { getPointsForMoves } from '../../../utils/music/mechanics/points'
import { BINGO_POINTS, HAND_COUNT } from '../../../constants/music/play'
import LogEntry from '../Entry'

const PlayLog = ({
    moves,
    discardedIndices,
    playerName,
}) => {
    let log = null

    // For demo.
    if (playerName) {
        log = moves ? (
            `${playerName} earns ${getPointsForMoves({ moves, handCount: HAND_COUNT })} points.`
        ) : (
            `${playerName} ${discardedIndices.length ? 'exchanges on' : 'passes'} their turn.`
        )

    // For puzzle.
    } else if (moves.length > 1) {
        log = `One possible solution to earn ${getPointsForMoves({ moves, handCount: HAND_COUNT })} points.`
    }

    return (
        <>
            {log}
            {moves && (
                <List {...{ isClean: !log }}>
                    {moves.map((move, index) => (
                        <MoveLog
                            {...{
                                key: index,
                                ...move,
                            }}
                        />
                    ))}
                    {moves.length === HAND_COUNT && (
                        <ListItem>
                            <LogEntry
                                addSup
                                {...{
                                    entry: `Full hand for ${BINGO_POINTS} bonus points.`,
                                }}
                            />
                        </ListItem>
                    )}
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
    playerName: PropTypes.string,
}

export default PlayLog
