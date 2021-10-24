import { getDominoPitches } from '../dominoes'
import { addToMatrix } from '../matrix'

export const addDominoToMatrix = ({ domino, boardMatrix }) => {
    const { dominoIndex, placement } = domino

    return getDominoPitches(dominoIndex).reduce(
        (boardMatrix, pitch, index) => (
            addToMatrix({
                value: pitch,
                coordinates: placement[index],
                matrix: boardMatrix,
            })
        ), boardMatrix,
    )
}

export const getBoardMatrix = (board = []) => (
    board.reduce((boardMatrix, domino) => (
        addDominoToMatrix({ domino, boardMatrix })
    ), {})
)
