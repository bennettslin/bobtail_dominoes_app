import {
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    9: [
        {
            day: 27,
            puzzleType: REGULAR_PUZZLE_TYPE,
            board: [
                { dominoIndex: 49, placement: [[0, 0], [1, 0]] },
                { dominoIndex: 14, placement: [[3, 0], [2, 0]] },
                { dominoIndex: 33, placement: [[1, 1], [1, 2]] },
                { dominoIndex: 45, placement: [[2, 2], [1, 3]] },
                { dominoIndex: 38, placement: [[0, 3], [-1, 4]] },
                { dominoIndex: 24, placement: [[-1, 5], [-1, 6]] },
            ],
        },
        {
            day: 29,
            puzzleType: MISSING_PUZZLE_TYPE,
            board: [
                { dominoIndex: 8, placement: [[-1, 0], [0, 0]] },
                { dominoIndex: 42, placement: [[-1, 1], [-1, 2]] },
                { dominoIndex: 40, placement: [[1, 0], [1, 1]] },
                { dominoIndex: 13, placement: [[-1, -1], [-2, 0]] },
                { dominoIndex: 15, placement: [[-2, 2], [-3, 2]] },
                { dominoIndex: 30, placement: [[-3, 4], [-3, 3]] },
            ],
        },
    ],
}
