import { getDominoPitches } from '../../dominoes'
import { addToMatrix } from '../matrix'
import { getHasPitchAtPlacement } from '../coordinates'

const addMoveToMatrix = ({ dominoIndex, placement, boardMatrix }) => (
    getDominoPitches(dominoIndex).reduce(
        (boardMatrix, pitch, index) => (
            addToMatrix({
                value: pitch,
                coordinates: placement[index],
                matrix: boardMatrix,
            })
        ), boardMatrix,
    )
)

export const getBoardMatrix = (board = []) => (
    board.reduce((boardMatrix, { dominoIndex, placement }) => (
        addMoveToMatrix({ dominoIndex, placement, boardMatrix })
    ), {})
)

export const addSafeMoveToBoardMatrix = ({
    dominoIndex,
    placement,
    board,
}) => {
    const boardMatrix = getBoardMatrix(board)
    // Ensure there is no placement conflict. If so, return null.
    return getHasPitchAtPlacement(placement, boardMatrix) ?
        null :
        addMoveToMatrix({ dominoIndex, placement, boardMatrix })
}
