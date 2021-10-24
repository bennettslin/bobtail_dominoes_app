export const addToMatrix = ({ coordinates, matrix, value = true }) => {
    // This mutates the matrix.
    const [xCoord, yCoord] = coordinates
    matrix[xCoord] = matrix[xCoord] || {}
    matrix[xCoord][yCoord] = value
    return matrix
}

export const getFlattenedMatrix = (matrix, parse = parseInt) => (
    Object.keys(matrix).map(xCoord => (
        Object.keys(matrix[xCoord]).map(yCoord => (
            [parse(xCoord), parse(yCoord)]
        ))
    )).flat()
)
