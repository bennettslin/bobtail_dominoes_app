import { addSafeDominoToBoardMatrix } from '../boardMatrix'
import {
    getHasPitchAtCoordinates,
    getNextCoordinates,
    getPitchAtCoordinates,
} from '../coordinates'
import { getDominoPitches } from '../../dominoes'
import {
    DIRECTION_X,
    DIRECTION_XY,
    DIRECTION_Y,
    ADJACENT_DIRECTIONS,
    ADJACENT_SIGNS,
} from '../../../../../constants/music/game'

const getOrientation = placement => {
    // Use direction to signify orientation.
    if (placement[0][1] === placement[1][1]) {
        return DIRECTION_X
    }
    if (placement[0][0] === placement[1][0]) {
        return DIRECTION_Y
    }
    return DIRECTION_XY
}

const getRow = ({ pitch, coordinates, direction, boardMatrix }) => {
    const row = [pitch]

    // Add all pitches first in forward direction, then in reverse direction.
    ADJACENT_SIGNS.forEach(sign => {
        const arrayFunction = sign === 1 ? 'push' : 'unshift'
        let current = getNextCoordinates(coordinates, direction, sign)
        while (getHasPitchAtCoordinates(current, boardMatrix)) {
            row[arrayFunction](getPitchAtCoordinates(current, boardMatrix))
            current = getNextCoordinates(current, direction, sign)
        }
    })

    return row
}

export const getRowsForPlacement = ({ dominoIndex, placement, board }) => {
    const boardMatrix = addSafeDominoToBoardMatrix({
        dominoIndex, placement, board,
    })

    if (!boardMatrix) {
        return null
    }

    const
        pitches = getDominoPitches(dominoIndex),
        orientation = getOrientation(placement)

    return (
        placement
            .map((coordinates, index) => (
                ADJACENT_DIRECTIONS.map(direction => (
                    // For second pitch, avoid duplicate row with first pitch.
                    (!index || orientation !== direction) && getRow({
                        pitch: pitches[index],
                        coordinates,
                        direction,
                        boardMatrix,
                    })
                ))
            ))
            .flat()
            // Don't bother passing false rows or rows of a single pitch.
            .filter(row => row.length > 1)
    )
}
