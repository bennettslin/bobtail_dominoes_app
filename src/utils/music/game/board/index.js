import { getDominoPitches } from '../dominoes'
import { addToMatrix } from '../matrix'

export const addDominoToMatrix = ({ dominoIndex, placement, boardMatrix }) => (
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
