import { addMoveToBoard } from '../play/board'
import { getAdjacentPlacements } from './adjacent'
import { getChordsForPlacement } from './chords'

const sortByHighestPoints = (
    { points: firstPoints },
    { points: secondPoints },
) => secondPoints - firstPoints

export const getValidMoves = ({ dominoIndex, board = [] }) => {
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
    )
}

const recurseThroughValidMoves = ({
    hand,
    board,
    moves = [],
    totalPoints = 0,
}) => (
    hand.size ? (
        Array.from(hand).map(dominoIndex => {
            const
                validMoves = getValidMoves({ dominoIndex, board }),
                nextHand = new Set(hand)

            nextHand.delete(dominoIndex)

            return validMoves.length ? (
                validMoves.map(move => (
                    recurseThroughValidMoves({
                        hand: nextHand,
                        board: addMoveToBoard(move, [...board]),
                        moves: [...moves, move],
                        totalPoints: totalPoints + move.points,
                    })
                ))
            ) : (
                // Base case when there are no valid moves.
                { moves, points: totalPoints }
            )
        }).flat()
    ).flat() : (
        // Base case when hand is empty.
        { moves, points: totalPoints }
    )
)

export const getBestMovesForTurn = ({ hand, board }) => (
    recurseThroughValidMoves({ hand, board })
        .sort(sortByHighestPoints)[0]
)
