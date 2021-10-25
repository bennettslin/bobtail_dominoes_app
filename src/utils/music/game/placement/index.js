import { getAdjacentPlacements } from './adjacent'
import { getPointsForPlacement } from './points'

const sortByHighestPoints = (
    { points: firstPoints },
    { points: secondPoints },
) => secondPoints - firstPoints

export const getValidPlacements = ({ dominoIndex, board }) => (
    getAdjacentPlacements(board)
        .map(placement => ({
            dominoIndex,
            placement,
            points: getPointsForPlacement({ dominoIndex, placement, board }),
        }))
        // Allow placements with no points for first domino.
        .filter(({ points }) => (board.length ? points > 0 : true))
        .sort(sortByHighestPoints)
)
