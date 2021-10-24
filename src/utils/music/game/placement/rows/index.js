import { addDominoToMatrix, getBoardMatrix } from '../../board'
import { getDominoPitches } from '../../dominoes'
import {
    getHasPitchAtCoordinates,
    getNextCoordinates,
    getPitchAtCoordinates,
} from '../coordinates'
import {
    DIRECTION_X,
    DIRECTION_XY,
    DIRECTION_Y,
    SURROUNDING_DIRECTIONS,
} from '../../../../../constants/music/game'

const getDominoOrientation = placement => {
    // Use direction to signify orientation.
    if (placement[0][1] === placement[1][1]) {
        return DIRECTION_X
    }
    if (placement[0][0] === placement[1][0]) {
        return DIRECTION_Y
    }
    return DIRECTION_XY
}

const getRow = ({ pitch, coordinates, direction, matrix }) => {
    const row = [pitch]

    // Get all pitches in forward direction.
    let current = getNextCoordinates(coordinates, direction)
    while (getHasPitchAtCoordinates(current, matrix)) {
        row.push(getPitchAtCoordinates(current, matrix))
        current = getNextCoordinates(current, direction)
    }

    // Get all pitches in reverse direction.
    current = getNextCoordinates(coordinates, direction, -1)
    while (getHasPitchAtCoordinates(current, matrix)) {
        row.unshift(getPitchAtCoordinates(current, matrix))
        current = getNextCoordinates(current, direction, -1)
    }

    return row
}

const getHasPlacementConflict = (placement, matrix) => {
    return placement.reduce((hasPitchAtCoordinates, coordinates) => (
        hasPitchAtCoordinates || getHasPitchAtCoordinates(coordinates, matrix)
    ), false)
}

export const getRowsForPlacement = ({ dominoIndex, placement, board }) => {
    // First determine if there is conflict with initial matrix.
    const initialMatrix = getBoardMatrix(board)
    if (getHasPlacementConflict(placement, initialMatrix)) {
        return null
    }

    // If not, add domino to matrix.
    const matrix = addDominoToMatrix({
        domino: { dominoIndex, placement },
        matrix: initialMatrix,
    })

    const
        pitches = getDominoPitches(dominoIndex),
        orientation = getDominoOrientation(placement)

    return placement.map((coordinates, index) => {
        const pitch = pitches[index]

        return SURROUNDING_DIRECTIONS.map(direction => (
            // For second pitch, avoid duplicate row with first pitch.
            (!index || orientation !== direction) &&
            getRow({ pitch, coordinates, direction, matrix })
        ))
    })
        .flat()
        // Don't bother passing false rows or rows of a single pitch.
        .filter(row => row.length > 1)
}
