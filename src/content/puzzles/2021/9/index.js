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
            ],
        },
        {
            day: 29,
            puzzleType: MISSING_PUZZLE_TYPE,
            board: [
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
            ],
        },
    ],
}
