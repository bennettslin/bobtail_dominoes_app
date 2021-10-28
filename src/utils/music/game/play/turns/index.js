export const generateTurns = () => ({})

export const addExchangedTurn = ({ handIndex, dominoIndices, turns }) => {
    turns.push({
        handIndex,
        dominoIndices,
    })

    return turns
}

export const addPlayedTurn = ({ handIndex, moves, points, turns }) => {
    turns.push({
        handIndex,
        moves,
        points,
    })

    return turns
}
