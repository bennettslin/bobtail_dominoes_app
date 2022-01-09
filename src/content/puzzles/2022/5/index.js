import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 28, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 48, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 45, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 20, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 16, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 14, placement: [[2, 2], [2, 1]] },
        ],
        handList: [54, 43, 18],
        moves: [
            {
                dominoIndex: 43,
                placement: [[-1, 3], [-2, 3]],
                pitchLists: [
                    [9, 4, 1],
                    [9, 1, 6, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[1, 3], [1, 2]],
                pitchLists: [
                    [9, 4, 1, 6],
                    [2, 1, 9, 6],
                    [6, 9, 1],
                    [4, 9, 1],
                ],
                points: 14,
            },
            {
                dominoIndex: 18,
                placement: [[-1, 5], [-1, 4]],
                pitchLists: [
                    [4, 8, 1],
                    [4, 9, 1, 8],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 39, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 36, placement: [[1, -3], [0, -2]] },
        ],
        handList: [48, 8, 15],
        moves: [
            {
                dominoIndex: 48,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [2, 8, 5],
                    [8, 11, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 8,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [0, 2, 8, 5],
                    [0, 8, 4],
                    [3, 9, 0],
                ],
                points: 10,
            },
            {
                dominoIndex: 15,
                placement: [[-3, 0], [-2, 0]],
                pitchLists: [
                    [1, 5, 8, 11],
                    [3, 9, 0, 5],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 59, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 28, placement: [[0, -2], [1, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[0, 1], [0, 0]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 54, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 14, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 59, placement: [[0, 1], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[1, 2], [0, 2]],
                pitchLists: [
                    [4, 11, 7],
                    [1, 10, 7],
                    [2, 7, 11],
                ],
                points: 9,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 65, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 4, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 46, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 34, placement: [[-1, -1], [-1, 0]] },
        ],
        handList: [35, 10, 24],
        moves: [
            {
                dominoIndex: 35,
                placement: [[-3, 3], [-2, 2]],
                pitchLists: [
                    [4, 0, 8, 3],
                    [8, 11, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 10,
                placement: [[-2, 0], [-3, 0]],
                pitchLists: [
                    [10, 0, 7, 4],
                    [0, 4, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[-3, 4], [-2, 3]],
                pitchLists: [
                    [9, 11, 5, 2],
                    [0, 4, 8, 5],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 21, placement: [[1, 0], [1, -1]] },
            { dominoIndex: 8, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 14, placement: [[-4, 2], [-4, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 63, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 14, placement: [[4, 0], [3, 1]] },
            { dominoIndex: 35, placement: [[2, 3], [2, 2]] },
            { dominoIndex: 30, placement: [[1, 2], [1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 56,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [6, 11, 3],
                    [9, 2, 11, 6],
                    [11, 2, 6],
                    [11, 2, 8],
                ],
                points: 13,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 35, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 48, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 60, placement: [[-1, 4], [-1, 3]] },
            { dominoIndex: 27, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 41, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 37, placement: [[2, 0], [3, 0]] },
        ],
        handList: [66, 33, 6],
        moves: [
            {
                dominoIndex: 66,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [10, 7, 11, 3],
                    [11, 7, 4],
                    [11, 2, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 33,
                placement: [[1, -2], [2, -2]],
                pitchLists: [
                    [3, 11, 7, 4],
                    [6, 10, 3],
                    [6, 11, 2, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 6,
                placement: [[2, -3], [3, -4]],
                pitchLists: [
                    [0, 6, 10, 3],
                    [6, 0, 3],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 66, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 20, placement: [[-3, 3], [-3, 4]] },
        ],
        handList: [25, 14, 42],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-4, 2], [-3, 2]],
                pitchLists: [
                    [2, 6, 11],
                    [6, 1, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 14,
                placement: [[-4, 1], [-3, 1]],
                pitchLists: [
                    [1, 4, 10, 8],
                    [4, 6, 1, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 42,
                placement: [[-6, 3], [-5, 2]],
                pitchLists: [
                    [1, 8, 4],
                    [8, 2, 6, 11],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 3, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 25, placement: [[-1, 2], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 43, placement: [[0, 0], [-1, 1]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 41, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 60, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 33, placement: [[2, -2], [3, -3]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [3, 0, 7],
                    [8, 0, 4],
                    [11, 7, 3, 8],
                ],
                points: 10,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 37, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 56, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 38, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 55, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 24, placement: [[0, 1], [0, 2]] },
        ],
        handList: [29, 49, 18],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-2, 3], [-3, 4]],
                pitchLists: [
                    [2, 10, 5, 9],
                ],
                points: 4,
            },
            {
                dominoIndex: 29,
                placement: [[-3, 2], [-3, 3]],
                pitchLists: [
                    [6, 2, 10, 9],
                    [6, 10, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[-4, 3], [-4, 2]],
                pitchLists: [
                    [1, 10, 5],
                    [6, 10, 2, 1],
                    [11, 3, 6, 8],
                ],
                points: 11,
            },
        ],
        points: 24,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 7, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 28, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 50, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 65, placement: [[-1, 0], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[0, 0], [-1, 1]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 2, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 56, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 19, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 38, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 41, placement: [[3, -2], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[3, 0], [3, -1]],
                pitchLists: [
                    [6, 11, 3, 7],
                    [4, 10, 7],
                    [7, 11, 2],
                    [10, 3, 6, 0],
                ],
                points: 14,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 52, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 34, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 54, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 20, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 3, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 44, placement: [[1, 1], [1, 2]] },
        ],
        handList: [15, 63, 33],
        moves: [
            {
                dominoIndex: 15,
                placement: [[2, 1], [3, 0]],
                pitchLists: [
                    [7, 4, 1],
                    [5, 1, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 63,
                placement: [[3, 2], [3, 1]],
                pitchLists: [
                    [5, 11, 8],
                    [7, 4, 1, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[3, -1], [4, -1]],
                pitchLists: [
                    [10, 3, 6],
                    [3, 5, 11, 8],
                    [6, 5, 1, 10],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 14, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 45, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 36, placement: [[1, -1], [2, -1]] },
        ],
        handList: [17, 4, 59],
        moves: [
            {
                dominoIndex: 17,
                placement: [[-2, 0], [-1, -1]],
                pitchLists: [
                    [4, 7, 1],
                    [7, 0, 3, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [10, 7, 3],
                    [10, 4, 7, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[-1, -2], [-1, -3]],
                pitchLists: [
                    [0, 4, 7],
                    [4, 0, 7],
                    [4, 1, 10],
                ],
                points: 9,
            },
        ],
        points: 25,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 7, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 43, placement: [[-2, 2], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[0, 0], [-1, 0]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 30, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 53, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 42, placement: [[-1, 0], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 51,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [8, 2, 5],
                    [8, 11, 5],
                    [4, 0, 7, 11],
                ],
                points: 10,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 10, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 7, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 33, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 55, placement: [[-2, 0], [-1, 0]] },
        ],
        handList: [11, 3, 42],
        moves: [
            {
                dominoIndex: 11,
                placement: [[2, -3], [1, -3]],
                pitchLists: [
                    [0, 3, 7, 10],
                    [11, 3, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [7, 8, 3, 0],
                    [0, 6, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[3, -5], [2, -4]],
                pitchLists: [
                    [4, 8, 11, 0],
                    [8, 0, 6, 3],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 29, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 17, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 32, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 41, placement: [[2, -1], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 10, placement: [[1, -1], [1, 0]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 42, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 35, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 5, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 25, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 58, placement: [[-3, 3], [-2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 7,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [5, 8, 0],
                    [8, 3, 0],
                    [3, 7, 0, 9],
                    [0, 3, 7],
                    [6, 2, 11, 7],
                ],
                points: 17,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 35, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 55, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 5, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 24, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 25, placement: [[-2, 5], [-2, 4]] },
            { dominoIndex: 37, placement: [[-3, 6], [-2, 6]] },
        ],
        handList: [30, 34, 44],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-3, 3], [-2, 3]],
                pitchLists: [
                    [2, 11, 8, 6],
                    [11, 6, 2, 10],
                    [8, 5, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 34,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [7, 3, 0],
                    [3, 8, 5, 11],
                    [7, 11, 2],
                ],
                points: 10,
            },
            {
                dominoIndex: 44,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [4, 7, 11, 2],
                    [10, 7, 3, 0],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 60, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 45, placement: [[1, 1], [2, 1]] },
        ],
        handList: [26, 16, 24],
        moves: [
            {
                dominoIndex: 26,
                placement: [[0, 2], [1, 2]],
                pitchLists: [
                    [11, 2, 7],
                    [4, 10, 7, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [1, 7, 4, 11],
                    [10, 1, 6],
                    [6, 11, 2, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 24,
                placement: [[-2, 3], [-3, 3]],
                pitchLists: [
                    [7, 11, 2],
                    [10, 1, 6, 5],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 60, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 26, placement: [[1, 1], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[0, 2], [0, 1]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 22, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 50, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 54, placement: [[-1, 1], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 17,
                placement: [[2, 1], [2, 0]],
                pitchLists: [
                    [6, 9, 3, 1],
                    [10, 7, 1],
                    [5, 11, 2, 7],
                ],
                points: 11,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 4, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 48, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 15, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 18, placement: [[1, 2], [2, 2]] },
        ],
        handList: [43, 41, 60],
        moves: [
            {
                dominoIndex: 43,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [1, 4, 9],
                    [4, 9, 0],
                    [9, 1, 5, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 41,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [7, 4, 0],
                    [7, 1, 4, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [4, 11, 7],
                    [11, 5, 1, 8],
                    [7, 4, 0, 11],
                ],
                points: 11,
            },
        ],
        points: 30,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 21, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 49, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 20, placement: [[2, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[1, 0], [2, 0]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 48, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 41, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 30, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 20, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 7, placement: [[3, -3], [2, -3]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[0, -2], [0, -1]],
                pitchLists: [
                    [7, 4, 10],
                    [7, 10, 3],
                    [10, 7, 1],
                    [7, 4, 10],
                ],
                points: 12,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 50, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 32, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 27, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 10, placement: [[1, 3], [2, 3]] },
            { dominoIndex: 33, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 16, placement: [[0, 2], [-1, 3]] },
        ],
        handList: [37, 56, 13],
        moves: [
            {
                dominoIndex: 37,
                placement: [[0, 3], [-1, 4]],
                pitchLists: [
                    [6, 3, 0, 10],
                    [9, 6, 1, 3],
                    [3, 6, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 56,
                placement: [[-2, 5], [-1, 5]],
                pitchLists: [
                    [3, 10, 6],
                    [3, 6, 10, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 13,
                placement: [[-3, 6], [-3, 5]],
                pitchLists: [
                    [3, 10, 6, 1],
                    [3, 6, 11],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 25, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 13, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 49, placement: [[2, 1], [2, 0]] },
        ],
        handList: [33, 54, 30],
        moves: [
            {
                dominoIndex: 54,
                placement: [[1, -3], [0, -2]],
                pitchLists: [
                    [6, 9, 2],
                    [9, 6, 0],
                ],
                points: 6,
            },
            {
                dominoIndex: 30,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [6, 2, 10, 3],
                    [11, 2, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[0, -3], [-1, -2]],
                pitchLists: [
                    [3, 6, 11],
                    [3, 9, 6, 0],
                    [6, 9, 2],
                ],
                points: 10,
            },
        ],
        points: 25,
    },
    31: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 27, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 10, placement: [[-2, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[0, 0], [-1, 1]] },
        ],
    },
}
