import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 4, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 41, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 18, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 8, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 30, placement: [[2, -4], [2, -3]] },
        ],
        handList: [42, 20, 58],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-1, 3], [-1, 2]],
                pitchLists: [
                    [0, 8, 4],
                    [1, 4, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 20,
                placement: [[-3, 3], [-2, 3]],
                pitchLists: [
                    [1, 10, 4],
                    [1, 4, 8, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 58,
                placement: [[0, 3], [-1, 4]],
                pitchLists: [
                    [1, 10, 4, 7],
                    [0, 8, 4, 9],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 42, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 26, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 41, placement: [[0, 2], [-1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 38, placement: [[-1, 1], [-1, 2]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 59, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 14, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 19, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 44, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 18, placement: [[-1, 3], [-2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [1, 4, 8],
                    [10, 4, 1],
                    [7, 4, 9, 1],
                    [8, 1, 4, 10],
                ],
                points: 14,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 38, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 6, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 35, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 20, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 15, placement: [[1, -2], [1, -3]] },
            { dominoIndex: 59, placement: [[-2, 3], [-1, 2]] },
        ],
        handList: [8, 49, 14],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [0, 8, 3],
                    [6, 3, 0],
                    [8, 3, 0, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 49,
                placement: [[-4, 1], [-4, 2]],
                pitchLists: [
                    [5, 0, 8, 3],
                    [6, 3, 0, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 14,
                placement: [[-5, 2], [-6, 2]],
                pitchLists: [
                    [4, 1, 9],
                    [8, 5, 1],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 9, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 29, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 41, placement: [[1, -4], [1, -3]] },
        ],
        handList: [15, 4, 30],
        moves: [
            {
                dominoIndex: 15,
                placement: [[0, -2], [0, -3]],
                pitchLists: [
                    [5, 1, 9, 8],
                    [5, 7, 2, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 4,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [0, 4, 9],
                    [7, 1, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 30,
                placement: [[-3, 0], [-2, 0]],
                pitchLists: [
                    [2, 11, 6, 8],
                    [7, 1, 4, 11],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 38, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 35, placement: [[2, -1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 0], [0, 1]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 59, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 5, placement: [[-4, 2], [-3, 2]] },
            { dominoIndex: 33, placement: [[-2, 0], [-2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [11, 8, 5],
                    [3, 8, 0],
                    [11, 3, 7, 0],
                ],
                points: 10,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 31, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 36, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 55, placement: [[-1, 1], [-1, 0]] },
            { dominoIndex: 51, placement: [[0, 3], [-1, 3]] },
            { dominoIndex: 33, placement: [[2, 0], [1, 0]] },
        ],
        handList: [18, 26, 38],
        moves: [
            {
                dominoIndex: 26,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [2, 6, 9],
                    [10, 2, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 38,
                placement: [[-3, 0], [-3, 1]],
                pitchLists: [
                    [3, 11, 7],
                    [11, 2, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[-2, 3], [-3, 3]],
                pitchLists: [
                    [8, 1, 11, 5],
                    [6, 9, 3, 1],
                    [3, 11, 7, 8],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 24, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 19, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 9, placement: [[1, -1], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[-1, 1], [0, 0]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 3, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 40, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 46, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 48, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 36, placement: [[-1, -2], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 4,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [3, 9, 0, 6],
                    [4, 0, 9],
                    [0, 3, 8],
                    [4, 9, 0, 5],
                ],
                points: 14,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 58, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 37, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 54, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 30, placement: [[-3, -1], [-3, 0]] },
            { dominoIndex: 16, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 29, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 38, placement: [[1, -3], [2, -3]] },
        ],
        handList: [26, 56, 20],
        moves: [
            {
                dominoIndex: 56,
                placement: [[-3, 3], [-3, 4]],
                pitchLists: [
                    [2, 6, 11],
                    [4, 1, 10, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[-2, 3], [-1, 3]],
                pitchLists: [
                    [6, 1, 10],
                    [6, 10, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 26,
                placement: [[-2, 4], [-3, 5]],
                pitchLists: [
                    [6, 10, 1, 2],
                    [10, 2, 7],
                    [2, 6, 11, 7],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 3, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 18, placement: [[-4, 2], [-3, 2]] },
            { dominoIndex: 49, placement: [[-2, 2], [-1, 1]] },
        ],
        handList: [45, 37, 47],
        moves: [
            {
                dominoIndex: 45,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [7, 11, 4],
                    [11, 2, 9, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 37,
                placement: [[-1, -1], [0, -2]],
                pitchLists: [
                    [3, 7, 11, 4],
                    [3, 0, 9],
                    [10, 7, 2],
                ],
                points: 10,
            },
            {
                dominoIndex: 47,
                placement: [[0, -3], [-1, -2]],
                pitchLists: [
                    [5, 10, 7, 2],
                    [7, 3, 0, 9],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 25, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 4, placement: [[2, 1], [2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 36, placement: [[1, 1], [2, 0]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 15, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 36, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 55, placement: [[-1, 1], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [3, 7, 10, 1],
                    [7, 1, 10],
                    [10, 1, 6],
                ],
                points: 10,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 28, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 19, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 51, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 57, placement: [[3, -3], [2, -3]] },
        ],
        handList: [62, 7, 33],
        moves: [
            {
                dominoIndex: 62,
                placement: [[-2, 0], [-1, -1]],
                pitchLists: [
                    [8, 11, 4],
                    [10, 5, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 7,
                placement: [[-3, 0], [-2, -1]],
                pitchLists: [
                    [0, 8, 11, 4],
                    [7, 10, 5, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 33,
                placement: [[-1, -2], [-1, -3]],
                pitchLists: [
                    [6, 3, 10, 11],
                    [3, 7, 0],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 14, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 42, placement: [[-1, 2], [-1, 1]] },
            { dominoIndex: 44, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 3, placement: [[-2, 2], [-3, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[0, 1], [0, 2]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 54, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 55, placement: [[-3, 3], [-3, 4]] },
            { dominoIndex: 20, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 38, placement: [[-1, 3], [-1, 4]] },
        ],
        moves: [
            {
                dominoIndex: 5,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [6, 9, 3, 0],
                    [8, 2, 5, 0],
                    [1, 10, 6, 5],
                ],
                points: 12,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 54, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 42, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 15, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 41, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 9, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 32, placement: [[2, -3], [1, -3]] },
        ],
        handList: [4, 27, 38],
        moves: [
            {
                dominoIndex: 4,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [0, 4, 9],
                    [4, 0, 8, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 27,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [8, 2, 5],
                    [2, 1, 6, 9],
                    [0, 4, 9, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 38,
                placement: [[1, 2], [2, 2]],
                pitchLists: [
                    [6, 3, 11],
                    [8, 2, 5, 11],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 65, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 38, placement: [[-2, 2], [-1, 2]] },
        ],
        handList: [53, 15, 18],
        moves: [
            {
                dominoIndex: 53,
                placement: [[0, 2], [-1, 3]],
                pitchLists: [
                    [3, 11, 6],
                    [5, 11, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 15,
                placement: [[-1, 0], [0, -1]],
                pitchLists: [
                    [1, 5, 11, 8],
                    [9, 5, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [1, 8, 5],
                    [9, 5, 1, 8],
                ],
                points: 7,
            },
        ],
        points: 22,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 13, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 28, placement: [[-3, 2], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[0, 0], [-1, 0]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 18, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 63, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 5, placement: [[0, -2], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [9, 5, 2, 1],
                    [5, 8, 11],
                    [9, 0, 5],
                ],
                points: 10,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 55, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 26, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 38, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 49, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 16, placement: [[3, -1], [3, 0]] },
        ],
        handList: [20, 50, 36],
        moves: [
            {
                dominoIndex: 36,
                placement: [[5, -2], [4, -1]],
                pitchLists: [
                    [3, 9, 6],
                    [10, 5, 1, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[2, 1], [2, 0]],
                pitchLists: [
                    [6, 5, 10, 1],
                    [3, 9, 6, 1],
                    [1, 2, 10, 6],
                    [1, 10, 7],
                ],
                points: 15,
            },
            {
                dominoIndex: 50,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [1, 10, 5],
                    [1, 10, 7, 5],
                    [5, 10, 7, 1],
                    [9, 5, 2, 10],
                ],
                points: 15,
            },
        ],
        points: 39,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 38, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 26, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 55, placement: [[1, -1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[0, 1], [0, 0]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 55, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 25, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 56, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 12, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 3, placement: [[-3, 0], [-3, 1]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [5, 9, 2, 1],
                    [5, 6, 10, 2],
                    [9, 3, 6, 11],
                    [9, 6, 3],
                ],
                points: 15,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 27, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 42, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 48, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 5, placement: [[-2, -2], [-3, -1]] },
            { dominoIndex: 36, placement: [[-2, -3], [-3, -2]] },
            { dominoIndex: 7, placement: [[-3, -3], [-4, -2]] },
        ],
        handList: [56, 35, 40],
        moves: [
            {
                dominoIndex: 56,
                placement: [[-5, 0], [-4, -1]],
                pitchLists: [
                    [3, 9, 11, 6],
                    [11, 5, 8, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 35,
                placement: [[-4, 0], [-5, 1]],
                pitchLists: [
                    [7, 11, 3],
                    [0, 5, 3, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 40,
                placement: [[-3, -4], [-4, -3]],
                pitchLists: [
                    [4, 0, 9, 5],
                    [6, 0, 3],
                    [6, 7, 11, 3],
                ],
                points: 11,
            },
        ],
        points: 28,
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 28, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 9, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 24, placement: [[1, -2], [2, -2]] },
        ],
        handList: [63, 50, 8],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-2, -1], [-1, -2]],
                pitchLists: [
                    [2, 11, 8],
                    [11, 9, 2, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 50,
                placement: [[1, -4], [1, -3]],
                pitchLists: [
                    [5, 10, 2],
                    [5, 2, 11, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [5, 8, 0],
                    [5, 10, 2, 8],
                    [5, 8, 11],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 62, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 48, placement: [[1, -1], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[1, 0], [0, 1]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 4, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 36, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 7, placement: [[-1, -1], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 45,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [9, 0, 4],
                    [7, 4, 1],
                    [11, 4, 8],
                    [3, 7, 11],
                ],
                points: 12,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 33, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 65, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 24, placement: [[2, 1], [2, 0]] },
            { dominoIndex: 63, placement: [[1, -3], [0, -2]] },
        ],
        handList: [9, 7, 49],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [6, 9, 0],
                    [9, 2, 11, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 7,
                placement: [[-1, -2], [0, -3]],
                pitchLists: [
                    [0, 3, 9],
                    [7, 11, 6, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [0, 3, 9, 5],
                    [0, 2, 5, 9],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 23, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 19, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 34, placement: [[1, 0], [1, -1]] },
            { dominoIndex: 13, placement: [[1, 2], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 59, placement: [[0, 1], [1, 1]] },
        ],
    },
    31: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 45, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 33, placement: [[-3, 3], [-2, 3]] },
            { dominoIndex: 9, placement: [[-1, 3], [-1, 2]] },
            { dominoIndex: 6, placement: [[-3, 4], [-3, 5]] },
            { dominoIndex: 49, placement: [[-1, 4], [0, 3]] },
        ],
        moves: [
            {
                dominoIndex: 28,
                placement: [[-2, 5], [-2, 4]],
                pitchLists: [
                    [11, 6, 9, 2],
                    [9, 5, 2],
                    [0, 9, 5],
                    [0, 9, 6],
                ],
                points: 13,
            },
        ],
    },
}
