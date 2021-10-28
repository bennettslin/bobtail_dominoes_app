export const generateTurns = () => ({})

export const exchangeTurn = ({ handIndex, dominoIndices, turns }) => {
    turns.push({
        handIndex,
        dominoIndices,
    })

    return turns
}

export const playTurn = ({ handIndex, moves, points, turns }) => {
    turns.push({
        handIndex,
        moves,
        points,
    })

    return turns
}
