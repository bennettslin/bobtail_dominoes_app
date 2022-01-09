import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 66, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 45, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 8, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 34, placement: [[3, -1], [2, -1]] },
        ],
        handList: [15, 9, 55],
        moves: [
            {
                dominoIndex: 15,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [10, 8, 1, 5],
                    [7, 4, 1],
                    [3, 0, 8, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 9,
                placement: [[3, -3], [3, -2]],
                pitchLists: [
                    [0, 9, 3],
                    [0, 4, 11, 8],
                    [9, 7, 4, 1],
                ],
                points: 11,
            },
            {
                dominoIndex: 55,
                placement: [[3, -4], [2, -3]],
                pitchLists: [
                    [6, 0, 9, 3],
                    [10, 4, 7, 0],
                ],
                points: 8,
            },
        ],
        points: 32,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 8, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 3, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 32, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 56, placement: [[-3, -1], [-3, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 48, placement: [[-2, 0], [-3, 1]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 25, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 19, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 16, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 44, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 55, placement: [[3, -1], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, 0], [0, -1]],
                pitchLists: [
                    [2, 10, 6, 1],
                    [9, 5, 2],
                    [5, 2, 10, 6],
                    [1, 5, 10],
                ],
                points: 14,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 33, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 58, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 6, placement: [[-3, 3], [-4, 3]] },
            { dominoIndex: 3, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 48, placement: [[-3, 4], [-3, 5]] },
            { dominoIndex: 36, placement: [[-3, 2], [-4, 2]] },
        ],
        handList: [24, 54, 20],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-5, 3], [-6, 4]],
                pitchLists: [
                    [2, 6, 0, 9],
                    [9, 2, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[-5, 5], [-5, 4]],
                pitchLists: [
                    [2, 9, 6],
                    [3, 6, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 20,
                placement: [[-6, 5], [-7, 5]],
                pitchLists: [
                    [10, 1, 6],
                    [3, 6, 9, 1],
                    [9, 2, 5, 10],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 7, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 60, placement: [[2, -2], [1, -1]] },
        ],
        handList: [20, 24, 53],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [1, 10, 7],
                    [7, 11, 3, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [2, 8, 11],
                    [2, 5, 10],
                    [8, 5, 1],
                ],
                points: 9,
            },
            {
                dominoIndex: 53,
                placement: [[-2, -1], [-1, -2]],
                pitchLists: [
                    [6, 2, 8, 11],
                    [8, 2, 5, 10],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 15, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 28, placement: [[-2, -1], [-1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[0, -3], [0, -2]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 42, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 56, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 61, placement: [[1, 1], [2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [2, 1, 6, 9],
                    [8, 2, 5],
                    [5, 3, 11, 8],
                ],
                points: 11,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 44, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 25, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 55, placement: [[4, -2], [3, -2]] },
            { dominoIndex: 59, placement: [[2, -1], [1, -1]] },
        ],
        handList: [34, 60, 26],
        moves: [
            {
                dominoIndex: 34,
                placement: [[2, -2], [3, -3]],
                pitchLists: [
                    [3, 10, 6],
                    [3, 7, 10],
                    [7, 3, 10, 1],
                    [7, 10, 2, 6],
                ],
                points: 14,
            },
            {
                dominoIndex: 60,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [10, 4, 7],
                    [6, 2, 10, 7],
                    [3, 7, 10, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 26,
                placement: [[1, 2], [0, 3]],
                pitchLists: [
                    [10, 4, 7, 2],
                    [6, 11, 2, 7],
                ],
                points: 8,
            },
        ],
        points: 35,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 42, placement: [[2, 2], [2, 3]] },
            { dominoIndex: 26, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 38, placement: [[3, 2], [4, 1]] },
            { dominoIndex: 14, placement: [[2, 4], [1, 4]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 2], [1, 2]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 62, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 19, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 14, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 17, placement: [[0, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 45,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [4, 11, 8],
                    [4, 7, 1],
                    [11, 4, 7, 1],
                    [11, 7, 4],
                ],
                points: 13,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 43, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 14, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 7, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 17, placement: [[-3, 1], [-4, 2]] },
            { dominoIndex: 59, placement: [[-3, 0], [-4, 1]] },
            { dominoIndex: 30, placement: [[-4, 0], [-3, -1]] },
        ],
        handList: [26, 56, 31],
        moves: [
            {
                dominoIndex: 26,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [11, 2, 7],
                    [2, 7, 10],
                    [7, 0, 4, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 56,
                placement: [[-4, -1], [-5, 0]],
                pitchLists: [
                    [6, 11, 2, 7],
                    [6, 2, 10, 7],
                    [11, 2, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 31,
                placement: [[-6, 1], [-6, 0]],
                pitchLists: [
                    [6, 11, 3],
                    [4, 11, 2, 7],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 58, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 14, placement: [[1, 2], [1, 3]] },
        ],
        handList: [15, 55, 48],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [3, 6, 10],
                ],
                points: 3,
            },
            {
                dominoIndex: 15,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [6, 1, 9],
                    [10, 1, 5],
                    [7, 1, 10],
                    [10, 5, 1],
                ],
                points: 12,
            },
            {
                dominoIndex: 48,
                placement: [[2, 1], [2, 2]],
                pitchLists: [
                    [6, 1, 9, 5],
                    [10, 5, 1, 8],
                ],
                points: 8,
            },
        ],
        points: 25,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 48, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 20, placement: [[-1, 1], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[0, 0], [-1, 0]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 25, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 27, placement: [[0, -1], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [2, 8, 5],
                    [8, 1, 5],
                    [2, 11, 8],
                ],
                points: 9,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 16, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 64, placement: [[-2, -3], [-2, -2]] },
            { dominoIndex: 42, placement: [[0, -3], [1, -4]] },
            { dominoIndex: 38, placement: [[1, -2], [1, -3]] },
            { dominoIndex: 7, placement: [[2, -5], [1, -5]] },
        ],
        handList: [17, 3, 43],
        moves: [
            {
                dominoIndex: 17,
                placement: [[3, -3], [2, -3]],
                pitchLists: [
                    [4, 11, 7, 1],
                    [7, 3, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[3, -4], [2, -4]],
                pitchLists: [
                    [8, 3, 0],
                    [0, 7, 3, 10],
                    [0, 3, 7],
                    [3, 11, 6],
                ],
                points: 13,
            },
            {
                dominoIndex: 43,
                placement: [[4, -4], [5, -5]],
                pitchLists: [
                    [8, 3, 0, 4],
                    [9, 4, 1],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 35, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 8, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 13, placement: [[-1, 2], [-1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[0, 3], [0, 2]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 22, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 56, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 34, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 7, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 38, placement: [[3, -2], [4, -2]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[4, -1], [3, -1]],
                pitchLists: [
                    [8, 11, 6, 3],
                    [3, 0, 7],
                    [3, 6, 0],
                    [11, 6, 3],
                ],
                points: 13,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 42, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 43, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 8, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 21, placement: [[-1, 2], [-1, 1]] },
            { dominoIndex: 10, placement: [[3, -1], [3, -2]] },
            { dominoIndex: 39, placement: [[0, 2], [1, 1]] },
        ],
        handList: [59, 17, 4],
        moves: [
            {
                dominoIndex: 59,
                placement: [[2, 1], [1, 2]],
                pitchLists: [
                    [0, 4, 9, 7],
                    [1, 4, 10],
                    [8, 1, 5, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 17,
                placement: [[0, 3], [0, 4]],
                pitchLists: [
                    [4, 1, 7],
                    [7, 10, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 4,
                placement: [[-2, 4], [-1, 4]],
                pitchLists: [
                    [0, 4, 7],
                    [7, 10, 1, 4],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 26, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 27, placement: [[0, -2], [0, -1]] },
        ],
        handList: [41, 49, 37],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [7, 4, 0],
                    [4, 11, 2, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[0, 1], [1, 1]],
                pitchLists: [
                    [2, 5, 9],
                    [2, 8, 11, 5],
                    [7, 4, 0, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 37,
                placement: [[-2, 0], [-2, 1]],
                pitchLists: [
                    [3, 10, 7],
                    [10, 2, 5, 9],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 19, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 59, placement: [[1, 0], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[0, 0], [0, 1]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 54, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 35, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 56, placement: [[-2, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 66,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [6, 3, 11, 10],
                    [6, 9, 2, 10],
                    [2, 11, 8],
                ],
                points: 11,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 28, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 48, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 55, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 15, placement: [[-2, 0], [-2, -1]] },
        ],
        handList: [66, 6, 26],
        moves: [
            {
                dominoIndex: 66,
                placement: [[-2, -2], [-3, -1]],
                pitchLists: [
                    [10, 5, 1],
                    [11, 5, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 6,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [1, 0, 5, 8],
                    [9, 0, 6],
                    [10, 5, 1, 6],
                ],
                points: 11,
            },
            {
                dominoIndex: 26,
                placement: [[1, -2], [2, -2]],
                pitchLists: [
                    [10, 2, 7],
                    [2, 9, 0, 6],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 41, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 54, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 60, placement: [[-2, 3], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 13, placement: [[0, 0], [-1, 1]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 42, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 48, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 63, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 14, placement: [[-2, 3], [-1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 51,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [5, 2, 11],
                    [5, 11, 8],
                    [11, 2, 5, 8],
                    [11, 1, 8, 4],
                ],
                points: 14,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 44, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 15, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 58, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 8, placement: [[3, -1], [4, -1]] },
            { dominoIndex: 36, placement: [[3, -2], [3, -3]] },
            { dominoIndex: 6, placement: [[4, -3], [5, -3]] },
        ],
        handList: [3, 55, 60],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, -2], [2, -3]],
                pitchLists: [
                    [3, 0, 7, 9],
                    [9, 0, 4, 5],
                    [3, 9, 0, 6],
                ],
                points: 12,
            },
            {
                dominoIndex: 60,
                placement: [[3, -4], [4, -5]],
                pitchLists: [
                    [7, 9, 3, 0],
                    [11, 7, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[1, -2], [0, -2]],
                pitchLists: [
                    [10, 6, 0, 3],
                    [6, 4, 10, 1],
                    [11, 7, 3, 6],
                ],
                points: 12,
            },
        ],
        points: 33,
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 20, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 53, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 45, placement: [[2, 1], [2, 2]] },
        ],
        handList: [38, 17, 1],
        moves: [
            {
                dominoIndex: 38,
                placement: [[0, 2], [-1, 3]],
                pitchLists: [
                    [7, 10, 3],
                    [8, 6, 3, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 17,
                placement: [[0, 3], [1, 2]],
                pitchLists: [
                    [7, 10, 3, 1],
                    [4, 7, 1],
                    [3, 7, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 1,
                placement: [[3, 2], [2, 3]],
                pitchLists: [
                    [3, 7, 11, 0],
                    [8, 4, 11, 1],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 4, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 5, placement: [[0, -2], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[0, 0], [-1, 0]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 28, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 44, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 20, placement: [[0, -2], [1, -3]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [1, 4, 9],
                    [10, 4, 1],
                    [7, 4, 10],
                    [10, 7, 2],
                ],
                points: 12,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 44, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 18, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 19, placement: [[1, 1], [2, 1]] },
        ],
        handList: [58, 14, 25],
        moves: [
            {
                dominoIndex: 58,
                placement: [[0, 2], [-1, 3]],
                pitchLists: [
                    [10, 4, 7],
                    [4, 1, 7, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[0, 3], [1, 2]],
                pitchLists: [
                    [10, 4, 7, 1],
                    [9, 4, 1],
                    [10, 7, 4],
                    [7, 1, 4],
                ],
                points: 13,
            },
            {
                dominoIndex: 25,
                placement: [[-1, 5], [-1, 4]],
                pitchLists: [
                    [10, 9, 6, 2],
                    [9, 4, 1, 6],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 45, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 44, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 56, placement: [[-1, 3], [-2, 3]] },
            { dominoIndex: 12, placement: [[-3, 4], [-3, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 27, placement: [[-1, 1], [-1, 2]] },
        ],
    },
}
