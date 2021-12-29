import { getBestPointedEntryBasedOnRequirements } from '../../../ai/requirements'
import { getChordsForPlacement } from '../../../mechanics/placement/chords'
import { sortByHighestPoints } from '../../../mechanics/points'
import { getRandomDominoIndex } from '../../../play/pool'

const getBoardWithoutDomino = ({ dominoIndex, board }) => (
    board.filter(({ dominoIndex: trialDominoIndex }) => (
        dominoIndex !== trialDominoIndex
    ))
)

export const getBestMissingMovesForPuzzle = ({
    board,
    pool: originalPool,
    minPoints,
    // missingCount = 1,
}) => {
    const
        // Don't mutate original pool.
        pool = new Set(originalPool),
        pointedMoves = board.map(({
            dominoIndex,
            placement,
        }) => ({
            dominoIndex,
            placement,
            ...getChordsForPlacement({
                board: getBoardWithoutDomino({ dominoIndex, board }),
                dominoIndex,
                placement,
            }),
        })),
        {
        // Find the domino that builds the most chords.
            bestPointedEntry: {
                dominoIndex,
                placement,
            },
        } = getBestPointedEntryBasedOnRequirements({
            sortedPointedEntries: pointedMoves.sort(sortByHighestPoints),
            minPoints,
        }),
        trialBoard = getBoardWithoutDomino({ dominoIndex, board })

    /**
     * Temporarily add domino to pool to ensure its reverse placement also
     * gets examined.
     */
    pool.add(dominoIndex)
    let hasDuplicateLegalPlacement = false

    // Try each domino in pool.
    while (!hasDuplicateLegalPlacement && pool.size) {
        const
            trialDominoIndex = getRandomDominoIndex(pool),
            totalLegalPlacementCount = [false, true].reduce((
                legalPlacementCount,
                reversePlacement,
            ) => (
                legalPlacementCount + Boolean(
                    getChordsForPlacement({
                        board: trialBoard,
                        dominoIndex: trialDominoIndex,
                        placement:
                        reversePlacement ?
                            [...placement].reverse() :
                            placement,
                    }),
                )
            ), 0)

        if (
        // Chosen domino should only have one legal placement.
            totalLegalPlacementCount > (
                dominoIndex === trialDominoIndex ? 1 : 0
            )
        ) {
            hasDuplicateLegalPlacement = true
        }
    }

    return {
        // Consider search failed if there is a duplicate legal placement.
        ...!hasDuplicateLegalPlacement && {
            board: trialBoard,
            missingMoves: [{ dominoIndex, placement }],
        },
    }
}
