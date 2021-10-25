import { getDominoPitches } from '../../dominoes'
import { addToMatrix } from '../matrix'
import { getHasPitchAtPlacement } from '../coordinates'

const addDominoToMatrix = ({ dominoIndex, placement, boardMatrix }) => (
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
    board.reduce((boardMatrix, domino) => {
        const { dominoIndex, placement } = domino
        return addDominoToMatrix({ dominoIndex, placement, boardMatrix })
    }, {})
)

export const addSafeDominoToBoardMatrix = ({
    dominoIndex,
    placement,
    board,
}) => {
    const boardMatrix = getBoardMatrix(board)
    // Ensure there is no placement conflict. If so, return null.
    return getHasPitchAtPlacement(placement, boardMatrix) ?
        null :
        addDominoToMatrix({ dominoIndex, placement, boardMatrix })
}
