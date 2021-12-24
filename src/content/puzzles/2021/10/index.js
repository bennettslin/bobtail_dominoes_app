import {
    MAXIMUM_PUZZLE_TYPE,
    // MISSING_PUZZLE_TYPE,
    // REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    10: [
        {
            day: 1,
            puzzleType: MAXIMUM_PUZZLE_TYPE,
            board: [
                { dominoIndex: 26, placement: [[0, 0], [0, -1]] },
                { dominoIndex: 55, placement: [[0, 2], [0, 1]] },
                { dominoIndex: 14, placement: [[1, 1], [2, 1]] },
                { dominoIndex: 24, placement: [[-2, 3], [-1, 2]] },
                { dominoIndex: 53, placement: [[3, 0], [3, 1]] },
            ],
            moves: [
                {
                    dominoIndex: 59,
                    placement: [[1, 0], [2, 0]],
                    pitchLists: [
                        [2, 7, 10, 6],
                        [7, 10, 5, 2],
                        [10, 1, 6],
                    ],
                    points: 11,
                },
            ],
        },
        {
            day: 6,
            puzzleType: MAXIMUM_PUZZLE_TYPE,
            board: [
                { dominoIndex: 19, placement: [[0, 0], [-1, 1]] },
                { dominoIndex: 54, placement: [[0, -2], [0, -1]] },
                { dominoIndex: 29, placement: [[0, -3], [-1, -2]] },
                { dominoIndex: 42, placement: [[1, -1], [2, -2]] },
                { dominoIndex: 8, placement: [[2, -1], [1, 0]] },
                { dominoIndex: 21, placement: [[1, 1], [2, 1]] },
            ],
            moves: [
                {
                    dominoIndex: 41,
                    placement: [[2, 0], [3, -1]],
                    pitchLists: [
                        [1, 8, 4],
                        [8, 0, 4, 11],
                        [7, 4, 1],
                        [9, 4, 0, 7],
                    ],
                    points: 14,
                },
            ],
        },
        {
            day: 13,
            puzzleType: MAXIMUM_PUZZLE_TYPE,
            board: [
                { dominoIndex: 40, placement: [[0, 0], [-1, 0]] },
                { dominoIndex: 30, placement: [[-1, 1], [-1, 2]] },
                { dominoIndex: 48, placement: [[0, 2], [-1, 3]] },
                { dominoIndex: 5, placement: [[0, 3], [1, 3]] },
                { dominoIndex: 14, placement: [[-2, 4], [-2, 3]] },
            ],
            moves: [
                {
                    dominoIndex: 63,
                    placement: [[0, 1], [1, 1]],
                    pitchLists: [
                        [2, 8, 11],
                        [4, 8, 5, 0],
                        [8, 11, 4],
                        [11, 5, 8, 1],
                    ],
                    points: 14,
                },
            ],
        },
        {
            day: 20,
            puzzleType: MAXIMUM_PUZZLE_TYPE,
            board: [
                { dominoIndex: 8, placement: [[0, 0], [-1, 1]] },
                { dominoIndex: 34, placement: [[1, -1], [2, -2]] },
                { dominoIndex: 38, placement: [[0, -2], [1, -2]] },
                { dominoIndex: 45, placement: [[-1, -2], [-1, -1]] },
                { dominoIndex: 5, placement: [[1, 1], [0, 1]] },
            ],
            moves: [
                {
                    dominoIndex: 35,
                    placement: [[-1, 0], [0, -1]],
                    pitchLists: [
                        [4, 11, 3, 8],
                        [11, 8, 3],
                        [11, 8, 3],
                        [3, 8, 0, 5],
                    ],
                    points: 14,
                },
            ],
        },
        {
            day: 27,
            puzzleType: MAXIMUM_PUZZLE_TYPE,
            board: [
                { dominoIndex: 36, placement: [[0, -1], [0, 0]] },
                { dominoIndex: 9, placement: [[0, -2], [1, -2]] },
                { dominoIndex: 24, placement: [[1, 0], [0, 1]] },
                { dominoIndex: 11, placement: [[-2, 2], [-1, 2]] },
                { dominoIndex: 54, placement: [[2, 0], [2, -1]] },
            ],
            moves: [
                {
                    dominoIndex: 33,
                    placement: [[2, -2], [1, -1]],
                    pitchLists: [
                        [0, 9, 3],
                        [3, 9, 6],
                        [3, 6, 9],
                        [3, 6, 9],
                        [9, 6, 2],
                    ],
                    points: 15,
                },
            ],
            hand: new Set([1, 2, 3]),
        },
    ],
}