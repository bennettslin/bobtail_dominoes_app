export const getLatestTurnIndex = turns => turns.length - 1

export const getIsDominoInLatestTurn = ({ dominoIndex, turns }) => {
    const {
        dominoIndex: initialDominoIndex,
        moves,
    } = turns[getLatestTurnIndex(turns)]

    if (initialDominoIndex) {
        // It's the initially placed domino.
        return dominoIndex === initialDominoIndex

    } else if (moves) {
        // It's played in the latest turn.
        return moves.some(({ dominoIndex: moveDominoIndex }) => (
            dominoIndex === moveDominoIndex
        ))
    } else {
        return false
    }
}
