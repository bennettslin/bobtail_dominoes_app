export const getBoardBasedOnShowAnswer = ({
    board,
    moves,
    missingMoves,
    showAnswer,
}) => (
    [
        ...board,
        ...showAnswer && moves ? moves.map(move => ({
            ...move,
            isHighlight: true,
        })) : [],
        ...missingMoves ? missingMoves.map(move => ({
            ...move,
            ...showAnswer ?
                { isHighlight: true } :
                { isMissing: true },
        })) : [],
    ]
)
