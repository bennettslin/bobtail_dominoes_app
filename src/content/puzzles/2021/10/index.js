import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    10: [
        {
            day: 1,
            puzzleType: MAXIMUM_PUZZLE_TYPE,
            board: [
                { dominoIndex: 19, placement: [[1, -1], [0, 0]] },
                { dominoIndex: 43, placement: [[2, -1], [3, -1]] },
                { dominoIndex: 18, placement: [[-1, 0], [0, -1]] },
                { dominoIndex: 14, placement: [[0, 2], [0, 1]] },
                { dominoIndex: 59, placement: [[1, 1], [2, 1]] },
                { dominoIndex: 26, placement: [[3, 1], [4, 0]] },
            ],
        },
        {
            day: 3,
            puzzleType: REGULAR_PUZZLE_TYPE,
            board: [
                { dominoIndex: 7, placement: [[0, 0], [0, 1]] },
                { dominoIndex: 29, placement: [[2, -1], [1, 0]] },
                { dominoIndex: 49, placement: [[3, -2], [4, -2]] },
                { dominoIndex: 54, placement: [[-2, 2], [-1, 1]] },
                { dominoIndex: 37, placement: [[-3, 3], [-2, 3]] },
                { dominoIndex: 18, placement: [[2, -2], [1, -2]] },
            ],
        },
        {
            day: 4,
            puzzleType: MISSING_PUZZLE_TYPE,
            board: [
                { dominoIndex: 18, placement: [[0, 0], [0, -1]] },
                { dominoIndex: 47, placement: [[0, -2], [1, -2]] },
                { dominoIndex: 37, placement: [[-1, -3], [0, -3]] },
                { dominoIndex: 53, placement: [[-2, -3], [-1, -4]] },
                { dominoIndex: 8, placement: [[-3, -3], [-3, -4]] },
                { dominoIndex: 7, placement: [[-2, -2], [-3, -1]] },
            ],
        },
        {
            day: 6,
            puzzleType: MAXIMUM_PUZZLE_TYPE,
            board: [
                { dominoIndex: 29, placement: [[-1, 1], [0, 0]] },
                { dominoIndex: 16, placement: [[-2, 2], [-3, 3]] },
                { dominoIndex: 55, placement: [[-3, 1], [-2, 1]] },
                { dominoIndex: 20, placement: [[-4, 1], [-4, 2]] },
                { dominoIndex: 45, placement: [[-2, 3], [-3, 4]] },
            ],
        },
        {
            day: 8,
            puzzleType: REGULAR_PUZZLE_TYPE,
            board: [
                { dominoIndex: 28, placement: [[0, 0], [1, 0]] },
                { dominoIndex: 49, placement: [[0, -2], [0, -1]] },
                { dominoIndex: 8, placement: [[0, -3], [-1, -2]] },
                { dominoIndex: 48, placement: [[2, 0], [2, 1]] },
                { dominoIndex: 40, placement: [[-2, -1], [-2, 0]] },
            ],
        },
        {
            day: 10,
            puzzleType: MISSING_PUZZLE_TYPE,
            board: [
                { dominoIndex: 14, placement: [[-1, 1], [0, 0]] },
                { dominoIndex: 28, placement: [[1, -2], [1, -1]] },
                { dominoIndex: 62, placement: [[-2, 2], [-1, 2]] },
                { dominoIndex: 48, placement: [[-1, -1], [-1, 0]] },
            ],
        },
    ],
}
