const PLACEHOLDER_BOARD = [
    {
        dominoIndex: 4,
        placement: [[0, 0], [1, 0]],
    },
    {
        dominoIndex: 54,
        placement: [[0, 2], [0, 1]],
    },
    {
        dominoIndex: 34,
        placement: [[0, -1], [-1, 0]],
    },
]

export const getInitialBoardForPuzzle = ({
    dominoesCount = 1, // Number of dominoes on board.
    pointStrength = 1, // Each domino has the nth best placement.
}) => {
    // TODO
    return {
        board: PLACEHOLDER_BOARD,
    }
}
