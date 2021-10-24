import { getDominoPitches } from '../dominoes'

export const addToMatrix = (domino, matrix) => {
    const { dominoIndex, placement } = domino

    getDominoPitches(dominoIndex).forEach((pitch, index) => {
        const coordinates = placement[index]

        // Matrix is { xCoordinate: { yCoordinate: pitch } }.
        matrix[coordinates[0]] = matrix[coordinates[0]] || {}
        matrix[coordinates[0]][coordinates[1]] = pitch
    })

    // This mutates the original matrix.
    return matrix
}

export const getBoardMatrix = (board = []) => (
    board.reduce((matrix, domino) => (
        addToMatrix(domino, matrix)
    ), {})
)
