import { DIRECTION_XY } from '../../../../../constants/music/game'
import { getOrientation } from '../../../../../utils/music/game/placement/orientation'

export const getZIndexSortedDominoesList = board => (
    [...board].sort((
        { placement: firstPlacement },
        { placement: secondPlacement },
    ) => {
        const yOrder = secondPlacement[0][1] - firstPlacement[0][1]

        // Sort by y of lower face. Lower y always renders later.
        if (yOrder) {
            return yOrder
        }

        // If y is equal, sort by x. Higher x renders later by default.
        const xOrder = firstPlacement[0][0] - secondPlacement[0][0]

        // Find the placement with higher x.

        // However, lower x renders later if higher x has orientation XY.
        return (
            xOrder < 0 &&
            getOrientation(secondPlacement) === DIRECTION_XY
        ) ? -xOrder : xOrder
    })
)
