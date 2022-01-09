import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 13, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 59, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 42, placement: [[0, -2], [0, -3]] },
            { dominoIndex: 60, placement: [[2, -4], [1, -3]] },
        ],
        handList: [45, 14, 1],
        moves: [
            {
                dominoIndex: 45,
                placement: [[2, -3], [3, -4]],
                pitchLists: [
                    [8, 11, 4],
                    [7, 4, 10],
                    [11, 4, 7, 1],
                ],
                points: 10,
            },
            {
                dominoIndex: 14,
                placement: [[2, -5], [1, -4]],
                pitchLists: [
                    [1, 7, 4, 10],
                    [1, 4, 8],
                    [4, 7, 11],
                    [4, 11, 7, 3],
                ],
                points: 14,
            },
            {
                dominoIndex: 1,
                placement: [[-1, -2], [-1, -3]],
                pitchLists: [
                    [0, 4, 7, 10],
                    [1, 4, 8, 0],
                    [1, 8, 11, 4],
                ],
                points: 12,
            },
        ],
        points: 38,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 14, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 48, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 49, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 27, placement: [[1, 2], [0, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[-2, 2], [-1, 1]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 33, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 7, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 38, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 66, placement: [[-2, 3], [-3, 3]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-3, 2], [-3, 1]],
                pitchLists: [
                    [3, 7, 11],
                    [7, 3, 11],
                    [6, 0, 3],
                    [7, 0, 3],
                ],
                points: 12,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 59, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 35, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 7, placement: [[2, 1], [2, 0]] },
            { dominoIndex: 33, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 16, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 22, placement: [[-1, 3], [0, 2]] },
        ],
        handList: [5, 53, 30],
        moves: [
            {
                dominoIndex: 5,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [0, 5, 3, 8],
                    [0, 10, 7, 3],
                    [5, 10, 6, 1],
                ],
                points: 12,
            },
            {
                dominoIndex: 53,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [6, 8, 0, 3],
                    [8, 5, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[0, -3], [1, -3]],
                pitchLists: [
                    [2, 11, 6],
                    [11, 8, 5, 2],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 8, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 17, placement: [[1, 0], [1, 1]] },
        ],
        handList: [51, 24, 20],
        moves: [
            {
                dominoIndex: 51,
                placement: [[0, -2], [1, -2]],
                pitchLists: [
                    [5, 11, 8],
                    [11, 4, 1, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [5, 2, 9],
                    [11, 2, 5],
                    [5, 9, 1],
                ],
                points: 9,
            },
            {
                dominoIndex: 20,
                placement: [[-1, -2], [0, -3]],
                pitchLists: [
                    [1, 5, 11, 8],
                    [10, 5, 2, 9],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 2, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 60, placement: [[1, -2], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[-1, 0], [0, 0]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 25, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 35, placement: [[-1, -1], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [2, 8, 5],
                    [8, 0, 5],
                    [3, 11, 8],
                ],
                points: 9,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 36, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 62, placement: [[-1, -3], [0, -3]] },
            { dominoIndex: 52, placement: [[-2, -2], [-2, -1]] },
            { dominoIndex: 60, placement: [[2, -3], [1, -2]] },
        ],
        handList: [56, 3, 63],
        moves: [
            {
                dominoIndex: 56,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [8, 3, 11, 6],
                    [7, 11, 2, 6],
                    [7, 11, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 3,
                placement: [[-4, 0], [-3, -1]],
                pitchLists: [
                    [8, 6, 3, 0],
                    [3, 7, 11, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 63,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [3, 11, 8],
                    [10, 3, 7, 11],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 59, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 13, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 6, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 63, placement: [[2, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 9, placement: [[0, 0], [1, -1]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 63, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 51, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 29, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 16, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 48, placement: [[1, 1], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[0, 1], [1, 0]],
                pitchLists: [
                    [8, 1, 5],
                    [9, 5, 1, 8],
                    [9, 1, 5],
                    [10, 2, 5, 9],
                    [6, 1, 9, 5],
                ],
                points: 18,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 44, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 12, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 8, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 51, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 60, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 7, placement: [[3, -2], [2, -1]] },
        ],
        handList: [37, 41, 18],
        moves: [
            {
                dominoIndex: 41,
                placement: [[3, -1], [3, 0]],
                pitchLists: [
                    [3, 11, 7, 4],
                    [0, 4, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 37,
                placement: [[2, -2], [3, -3]],
                pitchLists: [
                    [7, 3, 0],
                    [10, 3, 11, 7],
                    [10, 0, 4, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 18,
                placement: [[5, -3], [4, -2]],
                pitchLists: [
                    [1, 8, 4],
                    [7, 3, 0, 8],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 15, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 35, placement: [[-2, 0], [-1, 0]] },
        ],
        handList: [48, 19, 33],
        moves: [
            {
                dominoIndex: 48,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [3, 8, 0, 5],
                    [5, 8, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[-3, 3], [-2, 3]],
                pitchLists: [
                    [1, 9, 5],
                    [5, 8, 1, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[0, 2], [0, 3]],
                pitchLists: [
                    [0, 8, 3, 6],
                    [1, 9, 5, 6],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 55, placement: [[2, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[0, 2], [0, 1]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 49, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 27, placement: [[2, -4], [3, -4]] },
            { dominoIndex: 5, placement: [[1, -3], [1, -4]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [5, 0, 9, 2],
                    [10, 2, 5],
                    [2, 5, 10],
                ],
                points: 10,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 41, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 18, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 45, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 9, placement: [[0, 3], [-1, 4]] },
        ],
        handList: [42, 5, 3],
        moves: [
            {
                dominoIndex: 42,
                placement: [[2, 0], [2, 1]],
                pitchLists: [
                    [8, 11, 4],
                    [1, 4, 8],
                    [8, 4, 0, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 5,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [0, 1, 4, 8],
                    [0, 5, 8],
                    [5, 1, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 3,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [0, 8, 11, 4],
                    [0, 3, 7],
                    [0, 5, 8, 3],
                ],
                points: 11,
            },
        ],
        points: 33,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 5, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 44, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 42, placement: [[-1, 2], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 37, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 6, placement: [[-3, 0], [-3, 1]] },
            { dominoIndex: 54, placement: [[-2, -1], [-1, -2]] },
            { dominoIndex: 30, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 15, placement: [[0, -2], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 58,
                placement: [[-2, 2], [-3, 2]],
                pitchLists: [
                    [6, 10, 2, 7],
                    [3, 11, 7],
                    [0, 6, 9],
                    [6, 2, 9],
                ],
                points: 13,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 27, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 44, placement: [[-1, -3], [0, -3]] },
            { dominoIndex: 59, placement: [[1, -3], [2, -4]] },
            { dominoIndex: 51, placement: [[-1, -1], [-2, -1]] },
            { dominoIndex: 30, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 33, placement: [[4, -4], [3, -4]] },
        ],
        handList: [25, 32, 7],
        moves: [
            {
                dominoIndex: 25,
                placement: [[1, -4], [2, -5]],
                pitchLists: [
                    [2, 10, 6, 3],
                    [2, 7, 11],
                    [6, 2, 10],
                    [6, 10, 2],
                ],
                points: 13,
            },
            {
                dominoIndex: 32,
                placement: [[2, -6], [1, -5]],
                pitchLists: [
                    [3, 6, 10, 2],
                    [5, 2, 7, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 7,
                placement: [[4, -6], [3, -6]],
                pitchLists: [
                    [3, 7, 0],
                    [7, 6, 2, 10],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 51, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 42, placement: [[1, 0], [2, -1]] },
        ],
        handList: [29, 18, 30],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-1, 2], [-2, 2]],
                pitchLists: [
                    [10, 2, 5],
                    [8, 4, 11, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [4, 1, 8],
                    [10, 2, 5, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [2, 11, 8],
                    [3, 11, 8],
                    [11, 4, 1, 8],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 24, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 26, placement: [[-2, 3], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[0, 1], [-1, 2]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 26, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 23, placement: [[4, -1], [3, 0]] },
            { dominoIndex: 50, placement: [[2, -1], [3, -1]] },
        ],
        moves: [
            {
                dominoIndex: 7,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [7, 0, 10, 4],
                    [0, 5, 2, 8],
                ],
                points: 8,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 13, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 3, placement: [[2, -2], [1, -2]] },
            { dominoIndex: 6, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 59, placement: [[1, 0], [0, 1]] },
        ],
        handList: [16, 35, 48],
        moves: [
            {
                dominoIndex: 35,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [0, 6, 3],
                    [8, 6, 3, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [8, 5, 0],
                    [8, 0, 6, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [9, 1, 6],
                    [8, 5, 0, 1],
                    [1, 7, 10, 3],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 29, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 14, placement: [[-2, -1], [-1, -1]] },
            { dominoIndex: 54, placement: [[1, -1], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 59, placement: [[0, -2], [0, -1]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 8, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 9, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 33, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 6, placement: [[-3, 2], [-2, 2]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [3, 0, 6],
                    [8, 7, 3, 0],
                    [7, 3, 0, 9],
                    [7, 0, 3],
                ],
                points: 14,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 28, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 5, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 49, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 18, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 14, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 59, placement: [[-3, 4], [-2, 3]] },
        ],
        handList: [19, 15, 54],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [9, 1, 5],
                    [1, 9, 4],
                    [9, 5, 1, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 15,
                placement: [[0, -2], [-1, -1]],
                pitchLists: [
                    [1, 5, 9],
                    [5, 1, 9, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [6, 9, 2],
                    [6, 1, 5, 9],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 55, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 54, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 56, placement: [[1, -2], [1, -1]] },
        ],
        handList: [19, 26, 49],
        moves: [
            {
                dominoIndex: 19,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [6, 1, 9],
                    [6, 11, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 26,
                placement: [[2, 1], [2, 2]],
                pitchLists: [
                    [6, 1, 9, 2],
                    [10, 2, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [5, 10, 2, 7],
                    [9, 5, 2, 1],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 30, placement: [[1, -2], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[0, -3], [0, -2]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 27, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 49, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 14, placement: [[0, 2], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 18,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [5, 1, 8],
                    [10, 1, 4],
                    [8, 4, 1, 9],
                ],
                points: 10,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 15, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 20, placement: [[2, -4], [2, -3]] },
            { dominoIndex: 41, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 29, placement: [[0, -3], [0, -2]] },
        ],
        handList: [49, 40, 9],
        moves: [
            {
                dominoIndex: 49,
                placement: [[1, -3], [1, -4]],
                pitchLists: [
                    [2, 5, 10],
                    [9, 5, 1],
                    [1, 5, 10],
                ],
                points: 9,
            },
            {
                dominoIndex: 40,
                placement: [[1, -5], [2, -5]],
                pitchLists: [
                    [4, 9, 5, 1],
                    [6, 1, 10, 4],
                    [6, 9, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 9,
                placement: [[4, -5], [3, -5]],
                pitchLists: [
                    [4, 6, 9, 0],
                    [9, 1, 5, 10],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 53, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 5, placement: [[-1, -1], [-1, -2]] },
            { dominoIndex: 18, placement: [[-3, 0], [-2, -1]] },
            { dominoIndex: 33, placement: [[0, 2], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 31, placement: [[1, -1], [0, 0]] },
        ],
    },
    31: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 59, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 4, placement: [[-3, 1], [-2, 0]] },
            { dominoIndex: 29, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 45, placement: [[-1, -2], [-2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [11, 7, 2, 4],
                    [7, 4, 1],
                    [4, 10, 7],
                    [7, 2, 10],
                ],
                points: 13,
            },
        ],
    },
}
