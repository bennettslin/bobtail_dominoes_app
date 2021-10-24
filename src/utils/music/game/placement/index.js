import { addToMatrix, getBoardMatrix } from '../board'
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

export const getSurroundingCoordinates = board => {
    const surroundingMatrix = getSurroundingMatrix(board)
    // Convert matrix of surrounding coordinates to array.
    return Object.keys(surroundingMatrix).map(xCoord => (
        Object.keys(surroundingMatrix[xCoord]).map(yCoord => (
            [parseInt(xCoord), parseInt(yCoord)]
        ))
    )).flat()
}

export const getAllPhysicalPlacements = board => {
    // These are the surrounding coordinates.
    return getSurroundingCoordinates(board)
}

export const getAllValidPlacements = ({ dominoIndex, board }) => {
    // Placement is [[xCoord, yCoord], [xCoord, yCoord]], lower pitch first.
}
