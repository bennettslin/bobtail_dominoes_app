import { getChordsForPlacement } from '../../mechanics/placement/chords'
import { sortByHighestPoints } from '../../mechanics/points'
import { addMoveToBoard } from '../../play/board'
import { getAdjacentPlacements } from '../adjacent'

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

export const recurseThroughValidPointedMoves = ({
    hand,
    board,
    limit,
    moves = [],
    totalPoints = 0,
}) => (
    // eslint-disable-next-line no-nested-ternary
    hand.size ? (
        Array.from(hand).map(dominoIndex => {
            const
                validMoves = getValidPointedMoves({
                    dominoIndex,
                    board,
                    limit,
                }),
                nextHand = new Set(hand)

            nextHand.delete(dominoIndex)

            // eslint-disable-next-line no-nested-ternary
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
                totalPoints ? { moves, points: totalPoints } : null
            )
        })
            .flat()
            .filter(entry => Boolean(entry))
    ) : (
        // Base case when hand is empty.
        totalPoints ? { moves, points: totalPoints } : null
    )
)
