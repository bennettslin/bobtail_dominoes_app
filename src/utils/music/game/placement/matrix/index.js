export const addToMatrix = ({ coordinates, matrix, value = true }) => {
    // This mutates the matrix.
    const [xCoord, yCoord] = coordinates
    matrix[xCoord] = matrix[xCoord] || {}
    matrix[xCoord][yCoord] = value
    return matrix
}

export const getFlattenedMatrix = (matrix, parseFunction = parseInt) => (
    Object.keys(matrix).map(xCoord => (
        Object.keys(matrix[xCoord]).map(yCoord => (
            [parseFunction(xCoord), parseFunction(yCoord)]
        ))
    )).flat()
)
