import { getAdjacentPlacements } from './adjacent'
import { getChordsForPlacement } from './chords'

const sortByHighestPoints = (
    { points: firstPoints },
    { points: secondPoints },
) => secondPoints - firstPoints

export const getValidPlacements = ({ dominoIndex, board }) => (
    getAdjacentPlacements(board)
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
        // Allow placements with no points for first domino.
        .filter(({ points }) => (board.length ? points > 0 : true))
        .sort(sortByHighestPoints)
)
