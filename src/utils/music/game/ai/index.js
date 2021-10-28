import { addMoveToBoard } from '../play/board'
import { getAdjacentPlacements } from './adjacent'
import { getChordsForPlacement } from './chords'

const sortByHighestPoints = (
    { points: firstPoints },
    { points: secondPoints },
) => secondPoints - firstPoints

export const getValidPointedMoves = ({ dominoIndex, board = [], limit }) => {
    const adjacentPlacements = getAdjacentPlacements(board)

    return (
        [
            ...adjacentPlacements,
            // Try each domino in both possible directions of placement.
            ...adjacentPlacements.map(placement => (
                [...placement].reverse()
            )),
        ]
            .map(placement => {
                const { pitchSets, points } = getChordsForPlacement({
                    dominoIndex,
                    placement,
                    board,
                }) || {}

                return ({
                    dominoIndex,
                    placement,
                    ...board.length && {
                        pitchSets,
                        points,
                    },
                })
            })
            // Allow moves with no points for first domino.
            .filter(({ points }) => (board.length ? points > 0 : true))
            .sort(sortByHighestPoints)
            // Return just the most promising moves based on limit.
            .slice(0, limit)
    )
}

const recurseThroughValidPointedMoves = ({
    hand,
    board,
    limit,
    moves = [],
    totalPoints = 0,
}) => (
    hand.size ? (
        Array.from(hand).map(dominoIndex => {
            const
                validMoves = getValidPointedMoves({ dominoIndex, board, limit }),
                nextHand = new Set(hand)

            nextHand.delete(dominoIndex)

            return validMoves.length ? (
                validMoves.map(move => (
                    recurseThroughValidPointedMoves({
                        hand: nextHand,
                        board: addMoveToBoard(move, [...board]),
                        limit,
                        moves: [...moves, move],
                        totalPoints: totalPoints + move.points,
                    })
                ))
            ).flat() : (
                // Base case when there are no valid moves.
                { moves, points: totalPoints }
            )
        }).flat()
    ) : (
        // Base case when hand is empty.
        { moves, points: totalPoints }
    )
)

export const getBestPointedMovesForTurn = ({ hand, board, limit }) => {
    if (!hand.size) {
        return null
    }

    // AI returns moves with points for better visibility.
    return recurseThroughValidPointedMoves({ hand, board, limit })
        .sort(sortByHighestPoints)[0]
}
