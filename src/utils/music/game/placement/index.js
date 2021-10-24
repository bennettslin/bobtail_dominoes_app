import { getBoardMatrix } from '../board'
import { addToMatrix, getFlattenedMatrix } from '../matrix'
import { getHasPitchAtCoordinates, getNextCoordinates } from './coordinates'
import { SURROUNDING_DIRECTIONS } from '../../../../constants/music/game'

const getSurroundingMatrix = board => {
    const matrix = getBoardMatrix(board)
    // Add all surrounding coordinates to a matrix to avoid duplicates.
    return board.reduce((surroundingMatrix, domino) => {
        const { placement } = domino
        return placement.reduce((surroundingMatrix, coordinates) => (
            SURROUNDING_DIRECTIONS.reduce((surroundingMatrix, direction) => (
                [1, -1].reduce((surroundingMatrix, sign) => {
                    const nextCoordinates = getNextCoordinates(
                        coordinates,
                        direction,
                        sign,
                    )

                    // Only add if it's not already occupied by a domino.
                    return getHasPitchAtCoordinates(nextCoordinates, matrix) ?
                        surroundingMatrix :
                        addToMatrix({
                            coordinates: nextCoordinates,
                            matrix: surroundingMatrix,
                        })
                }, surroundingMatrix)
            ), surroundingMatrix)
        ), surroundingMatrix)
    }, {})
}

export const getSurroundingCoordinates = board => (
    // Convert matrix of surrounding coordinates to array.
    getFlattenedMatrix(getSurroundingMatrix(board))
)

export const getAllPhysicalPlacements = board => {
    // These are the surrounding coordinates.
    const surroundingCoordinates = getSurroundingCoordinates(board)

    // TODO: Initialise empty matrix of physical placements.

    // TODO: For each surrounding coordinate, get *its* surrounding coordinates.

    // TODO: Rule out the ones that are occupied by a domino.

    // TODO: Convert each coordinate to a string.

    // TODO: Add to matrix of physical placements, with lower coordinate first.

    // TODO: Convert matrix to array.

    // TODO: Return array.
}

export const getAllValidPlacements = ({ dominoIndex, board }) => {
    // Placement is [[xCoord, yCoord], [xCoord, yCoord]], lower pitch first.
}
