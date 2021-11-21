import { DIRECTION_XY } from '../../../../../constants/music/game'
import { getIsPlacementUpsideDown, getOrientation } from '../../../game/placement/orientation'

export const getBoardOrderedByZIndex = board => (
    [...board].sort((
        { placement: firstPlacement },
        { placement: secondPlacement },
    ) => {
        // We want the coordinates for each lower face.
        const
            [firstX, firstY] = firstPlacement[
                getIsPlacementUpsideDown(firstPlacement) ? 1 : 0
            ],
            [secondX, secondY] = secondPlacement[
                getIsPlacementUpsideDown(secondPlacement) ? 1 : 0
            ],
            yOrder = secondY - firstY

        // Sort by y of lower face. Lower y always renders later.
        if (yOrder) {
            return yOrder
        }

        // If y is equal, sort by x. Higher x renders later by default.
        const xOrder = firstX - secondX

        // However, lower x renders later if higher x has orientation XY.
        return (
            (xOrder > 0 && getOrientation(firstPlacement) === DIRECTION_XY) ||
            (xOrder < 0 && getOrientation(secondPlacement) === DIRECTION_XY)
        ) ? -xOrder : xOrder
    })
)
