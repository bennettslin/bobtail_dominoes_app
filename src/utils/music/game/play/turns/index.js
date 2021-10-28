export const getInitialTurns = board => ([
    // Initialize with first domino placed on board.
    { dominoIndex: board[0].dominoIndex },
])

export const addTurn = ({ hand, playerIndex, moves, turns }) => {
    turns.push({
        hand: new Set(hand),
        playerIndex,

        // Exchange will not pass moves.
        moves,
    })

    return turns
}
