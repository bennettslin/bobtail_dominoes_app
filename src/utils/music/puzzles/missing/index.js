import { getRandomInteger } from '../../../general/random'
import { getBestPointedEntryBasedOnRequirements } from '../../ai/requirements'
import { getChordsForPlacement } from '../../mechanics/placement/chords'
import { sortByHighestPoints } from '../../mechanics/points'
import { getRandomDominoIndex } from '../../play/pool'
import { getInitialBoardForPuzzle } from '../general/board'
import { addDominoesFromRunoffPool, addDominoToRunoffPool } from '../general/runoff'
// import { logTrial } from '../log'
import { MISSING_PUZZLE_TYPE } from '../../../../constants/music/puzzle'

const TRIALS_COUNT = 10
// const TRIALS_COUNT = 1000

const getBoardWithoutDomino = ({ dominoIndex, board }) => (
    board.filter(({ dominoIndex: trialDominoIndex }) => (
        dominoIndex !== trialDominoIndex
    ))
)

export const getMissingPuzzle = ({
    // minPoints = getRandomInteger(10, 15),
    minPoints = getRandomInteger(1, 4),

} = {}) => {
    let trialIndex = 0

    logServe(`Finding a unique outcome with at least ${minPoints} points…`)

    while (trialIndex < TRIALS_COUNT) {
        const { board, pool } = getInitialBoardForPuzzle({ rankRange: [0, 0] })

        if (board) {
            const
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
                runoffList = []

            const {
                // Find the domino that builds the most chords.
                bestPointedEntry: {
                    dominoIndex,
                    placement,
                },
            } = getBestPointedEntryBasedOnRequirements({
                sortedPointedEntries: pointedMoves.sort(sortByHighestPoints),
                minPoints,
            })
            let hasDuplicateLegalPlacement = false

            // Try each domino in pool.
            while (!hasDuplicateLegalPlacement && pool.size) {
                const
                    trialBoard = getBoardWithoutDomino({ dominoIndex, board }),
                    trialDominoIndex = getRandomDominoIndex(pool),
                    chords = getChordsForPlacement({
                        board: trialBoard,
                        dominoIndex: trialDominoIndex,
                        placement,
                    })

                if (chords) {
                    hasDuplicateLegalPlacement = true
                }

                addDominoToRunoffPool({
                    dominoIndex: trialDominoIndex,
                    runoffList,
                })
            }

            addDominoesFromRunoffPool({ pool, runoffList })

            if (!hasDuplicateLegalPlacement) {
                return {
                    board,
                    puzzleType: MISSING_PUZZLE_TYPE,
                }
            }
        }

        trialIndex++
    }
}
