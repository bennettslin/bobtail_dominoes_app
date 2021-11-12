import { getFixed } from '../../../../general'
import { getCartesianX } from '../coordinates'
import { HEXAGON_HEIGHT_RATIO } from '../../../../../constants/music/domino'
import { BOARD_X_RANGE } from '../../../../../constants/music/play'

export const getCartesianCentreCoordinates = board => {
    const { minX, maxX, minY, maxY } = board.reduce((ends, { placement }) => (
        placement.reduce((ends, [x, y]) => ({
            minX: Math.min(ends.minX, getCartesianX(x, y)),
            maxX: Math.max(ends.maxX, getCartesianX(x, y)),
            minY: Math.min(ends.minY, y),
            maxY: Math.max(ends.maxY, y),
        }), ends)
    ), { minX: null, maxX: null, minY: null, maxY: null })

    return [(maxX + minX) / 2, (maxY + minY) / 2]
}

export const getMovableBoardStyling = ({
    board,
    xRange = BOARD_X_RANGE,
}) => {
    const
        hexagonWidth = 1 / xRange,
        hexagonHeight = hexagonWidth * HEXAGON_HEIGHT_RATIO * 3 / 4,
        [cartesianX, cartesianY] = getCartesianCentreCoordinates(board)

    return {
        top: `${getFixed((
            cartesianY * hexagonHeight + 0.5
        ) * 100)}%`,
        left: `${getFixed((
            cartesianX * -hexagonWidth + 0.5
        ) * 100)}%`,
    }
}
