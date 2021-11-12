import { getFixed } from '../../../../general'
import { HEXAGON_HEIGHT_RATIO } from '../../../../../constants/music/domino'
import { BOARD_X_RANGE } from '../../../../../constants/music/play'

// TODO: This isn't correct. X needs to determine its actual left.
export const getBoardCentreCoordinates = board => {
    const {
        minLeft,
        maxLeft,
        minTop,
        maxTop,
    } = board.reduce((ends, { placement }) => (
        placement.reduce((ends, [x, y]) => ({
            minLeft: Math.min(ends.minLeft, x),
            maxLeft: Math.max(ends.maxLeft, x),
            minTop: Math.min(ends.minTop, y),
            maxTop: Math.max(ends.maxTop, y),
        }), ends)
    ), { minLeft: null, maxLeft: null, minTop: null, maxTop: null })

    return [(maxLeft + minLeft) / 2, (maxTop + minTop) / 2]
}

export const getMovableBoardStyling = ({
    board,
    xRange = BOARD_X_RANGE,
}) => {
    const
        hexagonWidth = 1 / xRange,
        hexagonHeight = hexagonWidth * HEXAGON_HEIGHT_RATIO * 3 / 4,
        [x, y] = getBoardCentreCoordinates(board)

    return {
        top: `${getFixed((
            y * hexagonHeight + 0.5
        ) * 100)}%`,
        left: `${getFixed(((
            x * -hexagonWidth +
            y * -hexagonWidth * 0.5
        ) + 0.5) * 100)}%`,
    }
}
