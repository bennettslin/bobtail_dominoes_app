import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 31, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 25, placement: [[1, 0], [2, 0]] },
        ],
        handList: [49, 8, 3],
        moves: [
            {
                dominoIndex: 49,
                placement: [[1, 2], [1, 1]],
                pitchLists: [
                    [2, 9, 5],
                    [6, 9, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 8,
                placement: [[3, -1], [3, 0]],
                pitchLists: [
                    [0, 6, 9, 3],
                    [11, 2, 6, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 3,
                placement: [[2, 1], [3, 1]],
                pitchLists: [
                    [7, 9, 0, 3],
                    [8, 0, 5, 4],
                    [0, 8, 3],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 54, placement: [[-1, -3], [0, -3]] },
            { dominoIndex: 17, placement: [[1, -3], [1, -4]] },
        ],
        missingMoves: [
            { dominoIndex: 44, placement: [[0, -2], [1, -2]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 66, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 27, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 48, placement: [[0, -2], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[1, -2], [1, -1]],
                pitchLists: [
                    [1, 5, 10],
                    [1, 8, 4],
                    [2, 8, 5],
                ],
                points: 9,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 33, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 56, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 37, placement: [[-3, 1], [-3, 2]] },
            { dominoIndex: 25, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 9, placement: [[-3, 4], [-2, 3]] },
        ],
        handList: [50, 24, 28],
        moves: [
            {
                dominoIndex: 50,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [5, 2, 6, 10],
                    [10, 2, 9, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 24,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [2, 5, 11],
                    [5, 2, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 28,
                placement: [[-1, -3], [0, -3]],
                pitchLists: [
                    [2, 9, 5],
                    [9, 2, 5, 11],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 41, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 60, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 30, placement: [[1, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 34, placement: [[2, -2], [1, -1]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 14, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 50, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 18, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 9, placement: [[1, 2], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [5, 10, 1, 9],
                    [1, 5, 9, 0],
                    [9, 5, 1, 8],
                ],
                points: 12,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 35, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 50, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 55, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 18, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 30, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 59, placement: [[3, -2], [3, -3]] },
        ],
        handList: [5, 19, 42],
        moves: [
            {
                dominoIndex: 42,
                placement: [[4, -2], [4, -1]],
                pitchLists: [
                    [4, 1, 8],
                    [5, 10, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 5,
                placement: [[5, -2], [6, -3]],
                pitchLists: [
                    [7, 4, 0],
                    [5, 0, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 19,
                placement: [[4, -3], [5, -3]],
                pitchLists: [
                    [10, 1, 9, 5],
                    [1, 4, 8],
                    [1, 7, 10, 3],
                    [9, 4, 1, 8],
                ],
                points: 15,
            },
        ],
        points: 30,
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 25, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 18, placement: [[-3, 3], [-2, 3]] },
            { dominoIndex: 55, placement: [[0, 1], [1, 1]] },
        ],
        handList: [15, 34, 30],
        moves: [
            {
                dominoIndex: 15,
                placement: [[0, 2], [-1, 3]],
                pitchLists: [
                    [2, 10, 6, 1],
                    [10, 1, 5],
                    [1, 8, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 34,
                placement: [[2, 1], [2, 0]],
                pitchLists: [
                    [2, 6, 10, 3],
                    [7, 10, 1, 5],
                ],
                points: 8,
            },
            {
                dominoIndex: 30,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [10, 2, 7],
                    [11, 2, 6],
                    [11, 7, 3],
                ],
                points: 9,
            },
        ],
        points: 29,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 42, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 9, placement: [[-2, 1], [-3, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 38, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 22, placement: [[1, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [8, 5, 2],
                    [2, 11, 5],
                    [8, 11, 3],
                ],
                points: 9,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 44, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 48, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 37, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 25, placement: [[1, 0], [2, -1]] },
        ],
        handList: [14, 59, 6],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-1, 2], [-1, 1]],
                pitchLists: [
                    [10, 4, 1],
                    [6, 2, 10, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [4, 10, 7],
                    [2, 7, 10],
                    [1, 4, 10],
                ],
                points: 9,
            },
            {
                dominoIndex: 6,
                placement: [[2, 1], [2, 2]],
                pitchLists: [
                    [4, 10, 7, 0],
                    [1, 4, 10, 6],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 20, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 54, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 43, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 48, placement: [[1, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[1, -1], [0, 0]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 35, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 14, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 8, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 63, placement: [[2, -2], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 43,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [1, 4, 8],
                    [9, 4, 0],
                    [4, 8, 11],
                    [9, 1, 4, 8],
                ],
                points: 13,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 44, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 7, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 65, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 62, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 25, placement: [[-2, 4], [-1, 3]] },
            { dominoIndex: 37, placement: [[-2, 0], [-2, -1]] },
            { dominoIndex: 11, placement: [[-3, 1], [-3, 0]] },
        ],
        handList: [3, 54, 14],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [8, 0, 3],
                    [0, 10, 7, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[2, -1], [2, 0]],
                pitchLists: [
                    [3, 10, 6],
                    [0, 6, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 14,
                placement: [[3, -1], [4, -2]],
                pitchLists: [
                    [3, 10, 6, 1],
                    [4, 1, 9],
                    [8, 0, 3, 4],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 26, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 63, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 35, placement: [[-1, 1], [-2, 2]] },
        ],
        handList: [5, 14, 54],
        moves: [
            {
                dominoIndex: 5,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [5, 0, 8],
                    [5, 11, 3, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[-2, -2], [-1, -2]],
                pitchLists: [
                    [6, 9, 2],
                ],
                points: 3,
            },
            {
                dominoIndex: 14,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [6, 9, 2, 1],
                    [1, 5, 0, 8],
                    [4, 1, 7],
                ],
                points: 11,
            },
        ],
        points: 23,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 60, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 44, placement: [[2, 0], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 26, placement: [[1, -1], [2, -2]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 45, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 13, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 26, placement: [[1, 2], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 44,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [1, 11, 4, 7],
                    [7, 4, 10],
                    [10, 7, 2],
                ],
                points: 10,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 24, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 45, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 50, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 8, placement: [[2, -2], [1, -2]] },
            { dominoIndex: 19, placement: [[1, 0], [1, 1]] },
        ],
        handList: [51, 55, 41],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [2, 6, 10],
                    [10, 1, 5, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 51,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [5, 9, 1],
                    [5, 2, 6, 10],
                    [8, 2, 5, 11],
                    [11, 2, 5, 9],
                ],
                points: 15,
            },
            {
                dominoIndex: 41,
                placement: [[-2, 0], [-2, -1]],
                pitchLists: [
                    [4, 5, 9, 1],
                    [7, 4, 11],
                ],
                points: 7,
            },
        ],
        points: 31,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 33, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 37, placement: [[5, -3], [4, -2]] },
            { dominoIndex: 29, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 15, placement: [[5, 0], [4, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 16, placement: [[4, -1], [4, 0]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 54, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 29, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 15, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 49, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 27, placement: [[-1, 1], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[0, 2], [0, 3]],
                pitchLists: [
                    [8, 0, 5],
                    [1, 5, 0, 8],
                    [6, 9, 0],
                    [9, 1, 5, 8],
                ],
                points: 14,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 16, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 45, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 61, placement: [[-2, -1], [-2, -2]] },
            { dominoIndex: 33, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 27, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 5, placement: [[3, -1], [2, 0]] },
        ],
        handList: [10, 26, 60],
        moves: [
            {
                dominoIndex: 10,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [0, 1, 8, 5],
                    [3, 9, 0],
                    [6, 1, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 26,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [2, 11, 6],
                    [4, 11, 7],
                    [7, 3, 9, 0],
                ],
                points: 10,
            },
            {
                dominoIndex: 60,
                placement: [[3, -5], [2, -5]],
                pitchLists: [
                    [7, 2, 11, 6],
                    [11, 2, 7],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 24, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 18, placement: [[-1, 0], [-1, 1]] },
        ],
        handList: [56, 55, 30],
        moves: [
            {
                dominoIndex: 56,
                placement: [[0, 2], [-1, 3]],
                pitchLists: [
                    [3, 11, 6],
                    [2, 6, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 55,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [1, 3, 6, 10],
                    [10, 2, 6, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 30,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [2, 10, 5],
                    [2, 6, 11],
                    [11, 6, 2],
                    [11, 3, 8],
                ],
                points: 12,
            },
        ],
        points: 28,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 23, placement: [[-2, -1], [-1, -1]] },
            { dominoIndex: 54, placement: [[0, 2], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 3, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 8, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 56, placement: [[1, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [6, 3, 11],
                    [9, 6, 0],
                    [9, 2, 6],
                ],
                points: 9,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 4, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 3, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 48, placement: [[-2, 1], [-2, 0]] },
            { dominoIndex: 20, placement: [[-2, 3], [-1, 3]] },
        ],
        handList: [63, 59, 14],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-4, 3], [-3, 2]],
                pitchLists: [
                    [8, 4, 1, 10],
                    [5, 11, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[-3, 4], [-4, 5]],
                pitchLists: [
                    [11, 4, 7],
                    [1, 7, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 14,
                placement: [[-3, 5], [-2, 5]],
                pitchLists: [
                    [10, 1, 4],
                    [11, 4, 7, 1],
                ],
                points: 7,
            },
        ],
        points: 22,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 55, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 26, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 34, placement: [[1, 2], [0, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 28, placement: [[0, 0], [1, 0]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 59, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 29, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 17, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 45, placement: [[4, -2], [3, -2]] },
            { dominoIndex: 55, placement: [[2, 1], [3, 1]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[3, 0], [3, -1]],
                pitchLists: [
                    [3, 7, 10, 2],
                    [11, 6, 2, 10],
                    [10, 2, 6],
                    [4, 6, 10, 1],
                ],
                points: 15,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 63, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 5, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 4, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 43, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 3, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 6, placement: [[-3, 2], [-2, 1]] },
        ],
        handList: [59, 20, 41],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [7, 10, 4],
                    [7, 3, 9, 0],
                    [10, 7, 4],
                    [10, 3, 6, 0],
                ],
                points: 14,
            },
            {
                dominoIndex: 20,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [1, 10, 7, 4],
                    [10, 1, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [4, 7, 0],
                    [4, 10, 1, 7],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 63, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 33, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 3, placement: [[2, -2], [2, -3]] },
        ],
        handList: [7, 34, 42],
        moves: [
            {
                dominoIndex: 34,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [7, 3, 11],
                    [7, 0, 4, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[2, 0], [3, 0]],
                pitchLists: [
                    [3, 0, 8, 4],
                    [7, 3, 11, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 7,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [9, 0, 4, 8],
                    [4, 0, 7],
                    [3, 8, 0],
                    [11, 4, 7],
                ],
                points: 13,
            },
        ],
        points: 30,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 42, placement: [[3, -5], [3, -4]] },
            { dominoIndex: 49, placement: [[4, -2], [3, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 12, placement: [[3, -3], [2, -2]] },
        ],
    },
    31: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 48, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 18, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 51, placement: [[2, 0], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [11, 2, 5],
                    [5, 2, 8],
                    [1, 8, 5],
                ],
                points: 9,
            },
        ],
    },
}
