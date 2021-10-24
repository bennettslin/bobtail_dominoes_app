import { getDominoPitches } from '../dominoes'

export const addToMatrix = ({ value = true, coordinates, matrix }) => {
    // Matrix is { xCoordinate: { yCoordinate: value } }.
    matrix[coordinates[0]] = matrix[coordinates[0]] || {}
    matrix[coordinates[0]][coordinates[1]] = value
    return matrix
}

export const addDominoToMatrix = ({ domino, matrix }) => {
    const { dominoIndex, placement } = domino

    // This mutates the original matrix.
    return getDominoPitches(dominoIndex).reduce((matrix, pitch, index) => (
        addToMatrix({
            value: pitch,
            coordinates: placement[index],
            matrix,
        })
    ), matrix)
}

export const getBoardMatrix = (board = []) => (
    board.reduce((matrix, domino) => (
        addDominoToMatrix({ domino, matrix })
    ), {})
)
