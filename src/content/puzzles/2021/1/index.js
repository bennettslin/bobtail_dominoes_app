import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 30, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 48, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 26, placement: [[-1, 3], [-2, 3]] },
            { dominoIndex: 49, placement: [[-1, 0], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 18, placement: [[0, 1], [0, 0]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 7, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 34, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 59, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 55, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 30, placement: [[-3, 0], [-3, 1]] },
        ],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-2, 2], [-3, 3]],
                pitchLists: [
                    [6, 3, 0],
                    [10, 3, 7],
                    [1, 7, 3, 10],
                    [2, 11, 6, 10],
                ],
                points: 14,
            },
        ],
    },
}
