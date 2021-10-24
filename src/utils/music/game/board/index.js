import { getDominoPitches } from '../dominoes'
import { addToMatrix } from '../matrix'

export const addDominoToMatrix = ({ domino, matrix }) => {
    const { dominoIndex, placement } = domino

    return getDominoPitches(dominoIndex).reduce((matrix, pitch, index) => (
        addToMatrix({
            value: pitch,
            coordinates: placement[index],
            matrix,
        })
    ), matrix)
}

export const getBoardMatrix = (board = []) => (
    board.reduce((matrix, domino) => (
        addDominoToMatrix({ domino, matrix })
    ), {})
)
