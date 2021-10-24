import { getBoardMatrix } from '../../board'
import { addToMatrix, getFlattenedMatrix } from '../../matrix'
import { getHasPitchAtCoordinates, getNextCoordinates } from '../coordinates'
import { ADJACENT_DIRECTIONS, ADJACENT_SIGNS } from '../../../../../constants/music/game'

const addToMatrixFromAdjacent = ({
    coordinates,
    matrix,
    boardMatrix,
    addFunction,
}) => (
    // This helper just avoids repeating code.
    ADJACENT_DIRECTIONS.reduce((matrix, direction) => (
        ADJACENT_SIGNS.reduce((matrix, sign) => {
            const nextCoordinates = getNextCoordinates(
                coordinates,
                direction,
                sign,
            )

            // Only add if it's not already occupied by a domino.
            return getHasPitchAtCoordinates(nextCoordinates, boardMatrix) ?
                matrix :
                addFunction({
                    nextCoordinates,
                    matrix,
                    sign,
                })
        }, matrix)
    ), matrix)
)

export const getAdjacentCoordinates = (
    board,
    // Pass to shave performance time.
    boardMatrix = getBoardMatrix(board),
) => (
    // First create a matrix to avoid duplicates, then flatten to array.
    getFlattenedMatrix(
        board.reduce((adjacentMatrix, domino) => (
            domino.placement.reduce((adjacentMatrix, coordinates) => (
                addToMatrixFromAdjacent({
                    coordinates,
                    matrix: adjacentMatrix,
                    boardMatrix,
                    addFunction: ({ nextCoordinates, matrix }) => (
                        addToMatrix({
                            coordinates: nextCoordinates,
                            matrix,
                        })
                    ),
                })
            ), adjacentMatrix)
        ), {}),
    )
)

const stringifyCoordinates = coordinates => {
    const [xCoord, yCoord] = coordinates
    return `${xCoord},${yCoord}`
}

const parseCoordinates = coordinates => (
    coordinates.split(',').map(coord => parseInt(coord))
)

export const getAdjacentPlacements = board => {
    const
        boardMatrix = getBoardMatrix(board),
        adjacentCoordinates = getAdjacentCoordinates(board, boardMatrix)

    // First create a matrix to avoid duplicates, then flatten to array.
    return getFlattenedMatrix(
        adjacentCoordinates.reduce((placements, coordinates) => (
            addToMatrixFromAdjacent({
                coordinates,
                matrix: placements,
                boardMatrix,
                addFunction: ({ nextCoordinates, matrix, sign }) => {
                    const physicalPlacement = [
                        stringifyCoordinates(coordinates),
                        stringifyCoordinates(nextCoordinates),
                    ]

                    return addToMatrix({
                        // Always order with lower coordinates first.
                        coordinates: sign === -1 ?
                            physicalPlacement.reverse() :
                            physicalPlacement,
                        matrix,
                    })
                },
            })
        ), {}),
        parseCoordinates,
    )
}
