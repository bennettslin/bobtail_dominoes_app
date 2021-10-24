import { addToMatrix, getBoardMatrix } from '../../board'
import { getDominoPitches } from '../../dominoes'

const
    ORIENTATION_X = 'x',
    ORIENTATION_Y = 'y',
    ORIENTATION_XY = 'xy'

const getOrientation = placement => {
    if (placement[0][1] === placement[1][1]) {
        return ORIENTATION_X
    }
    if (placement[0][0] === placement[1][0]) {
        return ORIENTATION_Y
    }
    return ORIENTATION_XY
}

const getNextCoordinates = (coordinates, direction, sign = 1) => (
    coordinates.map((coordinate, index) => (
        coordinate + direction[index] * sign
    ))
)

const getPitchAtCoordinates = (coordinates, matrix) => (
    matrix[coordinates[0]]?.[coordinates[1]]
)

const getHasPitchAtCoordinates = (coordinates, matrix) => (
    Number.isFinite(getPitchAtCoordinates(coordinates, matrix))
)

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
    const matrix = addToMatrix({ dominoIndex, placement }, initialMatrix)

    const
        pitches = getDominoPitches(dominoIndex),
        orientation = getOrientation(placement)

    return placement.map((coordinates, index) => {
        const pitch = pitches[index]

        return [
            // For second pitch, avoid duplicate row with first pitch.
            (!index || orientation !== ORIENTATION_X) &&
                getRow({ pitch, coordinates, direction: [1, 0], matrix }),
            (!index || orientation !== ORIENTATION_Y) &&
                getRow({ pitch, coordinates, direction: [0, 1], matrix }),
            (!index || orientation !== ORIENTATION_XY) &&
                getRow({ pitch, coordinates, direction: [-1, 1], matrix }),
        ]
    })
        .flat()
        // Don't bother passing false rows or rows of a single pitch.
        .filter(row => row.length > 1)
}
