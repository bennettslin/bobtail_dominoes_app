import React from 'react'
import PropTypes from 'prop-types'
import List from '../../List'
import ListItem from '../../List/ListItem'
import LogEntry from '../Entry'
import MoveLog from '../Move'
import { getPointsForMoves } from '../../../utils/music/mechanics/points'
import { BINGO_POINTS, HAND_COUNT } from '../../../constants/music/play'
import { boardPropTypes } from '../../../constants/propTypes'

const PlayLog = ({
    moves,
    discardedIndices,
    playerName,
}) => {
    let log = null

    // For demo.
    if (playerName) {
        log = moves ? (
            `${playerName} earns ${getPointsForMoves({ moves })} points.`
        ) : (
            `${playerName} ${discardedIndices.length ? 'exchanges on' : 'passes'} their turn.`
        )

    // For puzzle.
    } else if (moves.length > 1) {
        log = `The top solution earns ${getPointsForMoves({ moves })} points.`
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
    moves: boardPropTypes,
    discardedIndices: PropTypes.array,
    playerName: PropTypes.string,
}

export default PlayLog
