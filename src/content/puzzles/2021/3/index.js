import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

// NOTE: Rank range was [0, 5] for low, [0, 3] for high.
export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 34, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 44, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 18, placement: [[-2, 0], [-1, 0]] },
        ],
        handList: [11, 24, 60],
        moves: [
            {
                dominoIndex: 60,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [11, 7, 4],
                    [3, 7, 10, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 11,
                placement: [[-1, 1], [0, 1]],
                pitchLists: [
                    [11, 7, 4, 0],
                    [7, 1, 4, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 24,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [11, 5, 2],
                    [8, 0, 5],
                ],
                points: 6,
            },
        ],
        points: 23,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 17, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 44, placement: [[0, 2], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[-1, 1], [0, 0]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 9, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 43, placement: [[3, -3], [3, -2]] },
            { dominoIndex: 14, placement: [[3, -1], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [6, 1, 9],
                    [9, 4, 1, 8],
                    [0, 4, 9],
                ],
                points: 10,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 49, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 41, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 63, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 2, placement: [[-1, 1], [0, 1]] },
        ],
        handList: [5, 17, 43],
        moves: [
            {
                dominoIndex: 5,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [5, 0, 8],
                    [0, 11, 4, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 17,
                placement: [[4, -2], [3, -1]],
                pitchLists: [
                    [5, 0, 8, 1],
                    [1, 7, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 43,
                placement: [[4, -1], [4, 0]],
                pitchLists: [
                    [11, 7, 4],
                    [1, 4, 9],
                ],
                points: 6,
            },
        ],
        points: 22,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 51, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 8, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 36, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 19, placement: [[1, -1], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[1, 0], [0, 0]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 25, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 24, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 19, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 63, placement: [[3, -4], [3, -5]] },
            { dominoIndex: 65, placement: [[0, -3], [-1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[1, -3], [2, -4]],
                pitchLists: [
                    [9, 6, 1, 2],
                    [6, 9, 3],
                    [11, 10, 6, 2],
                    [10, 1, 6],
                ],
                points: 14,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 38, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 61, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 4, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 33, placement: [[-1, 3], [-1, 2]] },
            { dominoIndex: 49, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 8, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 24, placement: [[-3, 4], [-2, 4]] },
        ],
        handList: [23, 59, 16],
        moves: [
            {
                dominoIndex: 23,
                placement: [[-2, 2], [-2, 1]],
                pitchLists: [
                    [2, 6, 11],
                    [4, 8, 11, 2],
                    [4, 11, 3, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 59,
                placement: [[-3, 2], [-4, 3]],
                pitchLists: [
                    [7, 2, 6, 11],
                    [4, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[-4, 4], [-4, 5]],
                pitchLists: [
                    [1, 2, 5, 9],
                    [10, 1, 6],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 64, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 15, placement: [[0, -1], [-1, -1]] },
        ],
        handList: [14, 34, 3],
        moves: [
            {
                dominoIndex: 14,
                placement: [[2, -3], [2, -2]],
                pitchLists: [
                    [1, 4, 10],
                    [4, 9, 0, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [0, 3, 7],
                    [1, 4, 10, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[1, 1], [0, 2]],
                pitchLists: [
                    [9, 3, 0],
                    [7, 0, 3],
                ],
                points: 6,
            },
        ],
        points: 22,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 56, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 51, placement: [[0, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[0, 0], [-1, 0]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 20, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 18, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 49, placement: [[0, -2], [-1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [1, 4, 7],
                    [1, 7, 10],
                    [5, 8, 2, 10],
                ],
                points: 10,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 16, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 5, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 43, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 19, placement: [[2, -2], [1, -2]] },
        ],
        handList: [35, 3, 59],
        moves: [
            {
                dominoIndex: 35,
                placement: [[3, -1], [4, -2]],
                pitchLists: [
                    [8, 3, 0],
                    [9, 1, 4, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[4, -1], [4, 0]],
                pitchLists: [
                    [9, 3, 0],
                    [8, 0, 3],
                ],
                points: 6,
            },
            {
                dominoIndex: 59,
                placement: [[5, -1], [6, -2]],
                pitchLists: [
                    [9, 3, 0, 7],
                    [10, 7, 3],
                ],
                points: 7,
            },
        ],
        points: 22,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 45, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 8, placement: [[-4, 2], [-3, 1]] },
            { dominoIndex: 38, placement: [[-2, 3], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 59, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 15, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 27, placement: [[-4, 2], [-3, 2]] },
            { dominoIndex: 9, placement: [[-1, 2], [-1, 1]] },
            { dominoIndex: 38, placement: [[-3, 4], [-3, 3]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, 3], [-2, 3]],
                pitchLists: [
                    [11, 8, 5],
                    [4, 9, 0, 5],
                    [10, 1, 5, 8],
                    [0, 8, 3],
                ],
                points: 14,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 4, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 54, placement: [[-3, 0], [-3, 1]] },
            { dominoIndex: 7, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 36, placement: [[-3, 3], [-4, 3]] },
            { dominoIndex: 37, placement: [[-2, -1], [-1, -2]] },
            { dominoIndex: 3, placement: [[-4, 1], [-5, 1]] },
        ],
        handList: [40, 58, 6],
        moves: [
            {
                dominoIndex: 40,
                placement: [[-4, 2], [-5, 3]],
                pitchLists: [
                    [0, 4, 9],
                    [0, 9, 4, 6],
                    [6, 9, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 6,
                placement: [[-5, 5], [-4, 4]],
                pitchLists: [
                    [3, 6, 0],
                    [0, 4, 9, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 58,
                placement: [[-1, 2], [-2, 2]],
                pitchLists: [
                    [4, 0, 9, 7],
                    [3, 0, 7, 9],
                    [9, 3, 6, 0],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 36, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 10, placement: [[2, -1], [1, -1]] },
        ],
        handList: [40, 41, 59],
        moves: [
            {
                dominoIndex: 40,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [0, 9, 4],
                    [0, 3, 9, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [4, 7, 10, 0],
                    [7, 0, 9, 4],
                ],
                points: 8,
            },
            {
                dominoIndex: 59,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [7, 9, 0, 3],
                    [4, 7, 10],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 25, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 17, placement: [[-2, 2], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 66, placement: [[0, 0], [0, 1]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 6, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 12, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 36, placement: [[-1, 1], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 37,
                placement: [[2, -1], [1, 0]],
                pitchLists: [
                    [0, 6, 3],
                    [3, 10, 6],
                    [6, 10, 1],
                ],
                points: 9,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 48, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 9, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 15, placement: [[-1, -1], [-2, -1]] },
            { dominoIndex: 29, placement: [[0, -3], [-1, -2]] },
        ],
        handList: [25, 59, 33],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-2, -2], [-1, -3]],
                pitchLists: [
                    [2, 10, 5],
                    [6, 2, 9],
                    [6, 10, 1],
                ],
                points: 9,
            },
            {
                dominoIndex: 59,
                placement: [[-3, -2], [-2, -3]],
                pitchLists: [
                    [7, 2, 10, 5],
                    [10, 6, 2, 9],
                    [10, 2, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 33,
                placement: [[-1, -4], [-2, -4]],
                pitchLists: [
                    [3, 6, 10, 1],
                    [3, 10, 7],
                    [6, 10, 2, 5],
                ],
                points: 11,
            },
        ],
        points: 33,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 27, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 8, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 9, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 48, placement: [[1, 1], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[-1, 1], [-1, 2]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 15, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 49, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 27, placement: [[-3, 1], [-3, 2]] },
            { dominoIndex: 25, placement: [[-1, 3], [-2, 4]] },
            { dominoIndex: 37, placement: [[0, 4], [-1, 4]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-3, 4], [-2, 3]],
                pitchLists: [
                    [0, 6, 10, 3],
                    [2, 8, 5, 0],
                    [5, 9, 0],
                    [5, 9, 2],
                    [1, 9, 6],
                ],
                points: 17,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 55, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 33, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 8, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 38, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 15, placement: [[-2, 3], [-1, 3]] },
            { dominoIndex: 49, placement: [[-3, 4], [-3, 3]] },
            { dominoIndex: 56, placement: [[2, -3], [3, -3]] },
        ],
        handList: [30, 54, 29],
        moves: [
            {
                dominoIndex: 30,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [2, 6, 11],
                    [2, 11, 6],
                    [6, 11, 3],
                ],
                points: 9,
            },
            {
                dominoIndex: 54,
                placement: [[3, -2], [4, -3]],
                pitchLists: [
                    [11, 3, 6],
                    [9, 6, 0],
                    [2, 6, 11, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 29,
                placement: [[3, -5], [3, -4]],
                pitchLists: [
                    [2, 10, 11, 6],
                    [10, 6, 11, 3],
                ],
                points: 8,
            },
        ],
        points: 29,
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 48, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 51, placement: [[1, 3], [0, 3]] },
        ],
        handList: [28, 20, 6],
        moves: [
            {
                dominoIndex: 28,
                placement: [[-1, 3], [-2, 3]],
                pitchLists: [
                    [9, 2, 11, 5],
                    [1, 5, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [1, 5, 8],
                    [4, 10, 1],
                    [10, 5, 2],
                ],
                points: 9,
            },
            {
                dominoIndex: 6,
                placement: [[-3, 2], [-2, 1]],
                pitchLists: [
                    [0, 1, 5, 8],
                    [6, 10, 1],
                    [6, 1, 9],
                ],
                points: 10,
            },
        ],
        points: 28,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 6, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 24, placement: [[-1, 0], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 65, placement: [[0, 0], [0, -1]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 27, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 14, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 56, placement: [[-1, -1], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [8, 3, 0],
                    [11, 4, 7, 0],
                    [6, 10, 3],
                ],
                points: 10,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 3, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 60, placement: [[1, 3], [2, 3]] },
            { dominoIndex: 54, placement: [[-1, 3], [-2, 4]] },
            { dominoIndex: 38, placement: [[1, 1], [1, 2]] },
        ],
        handList: [45, 34, 63],
        moves: [
            {
                dominoIndex: 45,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [4, 3, 11, 7],
                    [11, 4, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[-1, 2], [-2, 2]],
                pitchLists: [
                    [7, 3, 0, 11],
                    [11, 4, 8, 3],
                ],
                points: 8,
            },
            {
                dominoIndex: 63,
                placement: [[-1, 4], [-1, 5]],
                pitchLists: [
                    [3, 6, 8, 11],
                    [11, 3, 8],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 43, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 5, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 34, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 65, placement: [[3, 0], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[0, 0], [1, -1]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 65, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 60, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 3, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 40, placement: [[2, 2], [1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[2, 0], [2, 1]],
                pitchLists: [
                    [3, 9, 0],
                    [0, 8, 4],
                    [0, 3, 7, 11],
                    [11, 3, 8],
                ],
                points: 13,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 30, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 34, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 63, placement: [[1, 0], [1, -1]] },
            { dominoIndex: 32, placement: [[0, -1], [1, -2]] },
            { dominoIndex: 19, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 25, placement: [[-2, 0], [-1, -1]] },
        ],
        handList: [55, 49, 23],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-2, -2], [-2, -1]],
                pitchLists: [
                    [6, 1, 9, 5],
                    [6, 10, 2],
                    [10, 6, 3, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 49,
                placement: [[-2, -3], [-1, -3]],
                pitchLists: [
                    [5, 6, 10, 2],
                    [9, 1, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 23,
                placement: [[0, -4], [-1, -4]],
                pitchLists: [
                    [2, 9, 6],
                    [4, 9, 1, 6],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 48, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 16, placement: [[-2, 0], [-1, 0]] },
        ],
        handList: [50, 18, 20],
        moves: [
            {
                dominoIndex: 50,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [1, 6, 10, 5],
                    [10, 5, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [1, 8, 5],
                    [10, 5, 2, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [5, 1, 10],
                    [1, 8, 5, 10],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 54, placement: [[-4, 2], [-3, 2]] },
            { dominoIndex: 36, placement: [[-3, 1], [-2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[-2, 2], [-3, 3]] },
        ],
    },
    31: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 44, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 34, placement: [[1, 1], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[2, 0], [2, 1]],
                pitchLists: [
                    [5, 10, 1],
                    [4, 1, 10],
                    [7, 3, 10],
                ],
                points: 9,
            },
        ],
    },
}
