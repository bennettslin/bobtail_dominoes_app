export const getNextCoordinates = (coordinates, direction, sign = 1) => (
    coordinates.map((coordinate, index) => (
        coordinate + direction[index] * sign
    ))
)

export const getPitchAtCoordinates = (coordinates, matrix) => (
    matrix[coordinates[0]]?.[coordinates[1]]
)

export const getHasPitchAtCoordinates = (coordinates, matrix) => (
    Number.isFinite(getPitchAtCoordinates(coordinates, matrix))
)

export const getHasPitchAtPlacement = (placement, matrix) => (
    placement.reduce((hasPitchAtCoordinates, coordinates) => (
        hasPitchAtCoordinates || getHasPitchAtCoordinates(coordinates, matrix)
    ), false)
)
