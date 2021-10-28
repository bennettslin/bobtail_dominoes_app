export const generateTurns = () => ([])

export const addPlayedTurn = ({ hand, handIndex, moves, points, turns }) => {
    turns.push({
        hand: new Set(hand),
        handIndex,
        moves,
        points,
    })

    return turns
}

export const addExchangedTurn = ({ hand, handIndex, turns }) => {
    turns.push({
        hand: new Set(hand),
        handIndex,
    })

    return turns
}
