import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 28, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 48, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 14, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 7, placement: [[1, -2], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 44,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [10, 4, 1],
                    [7, 4, 10],
                    [0, 4, 7, 9],
                    [7, 10, 2],
                ],
                points: 13,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 55, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 27, placement: [[1, -3], [2, -3]] },
            { dominoIndex: 60, placement: [[1, -4], [0, -3]] },
            { dominoIndex: 28, placement: [[3, -2], [2, -2]] },
            { dominoIndex: 32, placement: [[-1, -2], [-1, -3]] },
            { dominoIndex: 4, placement: [[2, -4], [2, -5]] },
        ],
        handList: [3, 42, 49],
        moves: [
            {
                dominoIndex: 3,
                placement: [[4, -5], [3, -4]],
                pitchLists: [
                    [0, 3, 8, 6],
                    [7, 0, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[4, -3], [4, -4]],
                pitchLists: [
                    [0, 8, 4],
                    [7, 0, 3, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[4, -6], [3, -5]],
                pitchLists: [
                    [5, 0, 8, 4],
                    [5, 9, 0, 2],
                    [4, 9, 0],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 61, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 41, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 9, placement: [[1, 1], [1, 0]] },
        ],
        handList: [25, 6, 3],
        moves: [
            {
                dominoIndex: 25,
                placement: [[0, -2], [1, -2]],
                pitchLists: [
                    [2, 6, 9],
                    [6, 4, 9, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 6,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [2, 6, 9, 0],
                    [0, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[2, -3], [3, -4]],
                pitchLists: [
                    [0, 9, 6],
                    [3, 0, 6],
                    [3, 8, 0],
                ],
                points: 9,
            },
        ],
        points: 25,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 61, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 51, placement: [[-1, 0], [-2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 2, placement: [[-1, 1], [0, 0]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 17, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 38, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 59, placement: [[-2, 0], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [7, 10, 4, 0],
                    [3, 8, 0],
                    [0, 3, 7],
                ],
                points: 10,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 56, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 19, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 32, placement: [[-2, 3], [-1, 3]] },
            { dominoIndex: 27, placement: [[-2, 4], [-1, 4]] },
        ],
        handList: [28, 50, 33],
        moves: [
            {
                dominoIndex: 50,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [5, 10, 1],
                    [10, 6, 11, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[2, 2], [1, 2]],
                pitchLists: [
                    [11, 9, 6, 3],
                    [5, 10, 1, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 28,
                placement: [[3, 0], [2, 1]],
                pitchLists: [
                    [2, 9, 6],
                    [6, 1, 9],
                ],
                points: 6,
            },
        ],
        points: 23,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 38, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 34, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 19, placement: [[-1, 2], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[1, 1], [1, 2]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 51, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 48, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 30, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 54, placement: [[-2, 0], [-2, -1]] },
            { dominoIndex: 60, placement: [[1, 0], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 28,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [9, 2, 5, 11],
                    [9, 6, 2],
                    [5, 11, 2],
                    [2, 6, 9],
                ],
                points: 13,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 26, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 50, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 33, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 6, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 4, placement: [[3, 1], [2, 2]] },
            { dominoIndex: 21, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 8, placement: [[2, 3], [1, 3]] },
        ],
        handList: [38, 42, 34],
        moves: [
            {
                dominoIndex: 38,
                placement: [[0, 3], [0, 4]],
                pitchLists: [
                    [3, 8, 0],
                    [0, 4, 8, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[1, 4], [0, 5]],
                pitchLists: [
                    [0, 3, 7],
                    [3, 11, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 42,
                placement: [[3, 3], [3, 2]],
                pitchLists: [
                    [3, 8, 0, 4],
                    [5, 0, 8, 4],
                    [8, 0, 3, 7],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 48, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 54, placement: [[0, 1], [0, 2]] },
        ],
        handList: [43, 15, 28],
        moves: [
            {
                dominoIndex: 43,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [9, 4, 0],
                    [4, 1, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [8, 5, 1],
                    [9, 4, 0, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 28,
                placement: [[1, -3], [2, -3]],
                pitchLists: [
                    [2, 9, 5],
                    [9, 8, 5, 1],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 30, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 48, placement: [[1, -3], [0, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[0, 0], [1, -1]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 30, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 15, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 49, placement: [[2, -2], [2, -3]] },
        ],
        moves: [
            {
                dominoIndex: 44,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [1, 4, 10],
                    [1, 8, 4],
                    [9, 5, 2, 10],
                ],
                points: 10,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 35, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 14, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 8, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 33, placement: [[0, 2], [0, 1]] },
        ],
        handList: [42, 59, 26],
        moves: [
            {
                dominoIndex: 42,
                placement: [[1, -1], [0, -1]],
                pitchLists: [
                    [8, 4, 0],
                    [8, 11, 6, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [7, 8, 4, 0],
                    [10, 7, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 26,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [10, 7, 4, 2],
                    [4, 11, 2, 7],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 59, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 37, placement: [[2, 1], [2, 0]] },
            { dominoIndex: 46, placement: [[0, 2], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[1, 0], [0, 1]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 48, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 7, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 11, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 49, placement: [[1, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[2, 0], [3, -1]],
                pitchLists: [
                    [0, 8, 5, 3],
                    [0, 7, 3],
                    [6, 3, 9],
                    [11, 2, 7, 6],
                ],
                points: 14,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 54, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 63, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 50, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 5, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 28, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 45, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 18, placement: [[2, -1], [3, -1]] },
        ],
        handList: [8, 35, 60],
        moves: [
            {
                dominoIndex: 8,
                placement: [[1, 3], [1, 2]],
                pitchLists: [
                    [9, 4, 0],
                    [10, 5, 2, 8],
                    [8, 4, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 35,
                placement: [[1, 4], [2, 3]],
                pitchLists: [
                    [8, 0, 3],
                    [9, 4, 0, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[1, 5], [0, 5]],
                pitchLists: [
                    [8, 0, 3, 7],
                    [8, 3, 11],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 3, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 8, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 17, placement: [[2, -2], [1, -1]] },
        ],
        handList: [24, 37, 41],
        moves: [
            {
                dominoIndex: 24,
                placement: [[3, 0], [2, 0]],
                pitchLists: [
                    [10, 9, 5, 2],
                    [5, 0, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 37,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [7, 10, 3],
                    [3, 5, 0, 8],
                    [1, 10, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 41,
                placement: [[3, -3], [2, -3]],
                pitchLists: [
                    [4, 1, 7, 10],
                    [7, 1, 10, 5],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 54, placement: [[-2, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 34, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 29, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 22, placement: [[1, -2], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 51,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [11, 5, 2],
                    [2, 8, 5],
                    [11, 8, 3],
                ],
                points: 9,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 42, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 50, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 9, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 15, placement: [[0, 2], [-1, 2]] },
        ],
        handList: [43, 34, 6],
        moves: [
            {
                dominoIndex: 34,
                placement: [[0, -2], [1, -2]],
                pitchLists: [
                    [7, 1, 5, 10],
                ],
                points: 4,
            },
            {
                dominoIndex: 43,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [9, 0, 5, 4],
                    [4, 10, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 6,
                placement: [[3, -2], [3, -1]],
                pitchLists: [
                    [0, 9, 5],
                    [1, 9, 6],
                    [6, 4, 10, 1],
                ],
                points: 10,
            },
        ],
        points: 23,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 14, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 29, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 55, placement: [[-1, 1], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 48, placement: [[0, 0], [1, 0]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 26, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 33, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 55, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 14, placement: [[2, -2], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[1, 1], [0, 2]],
                pitchLists: [
                    [2, 7, 10],
                    [4, 11, 7],
                    [3, 7, 11],
                    [8, 2, 11],
                ],
                points: 12,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 30, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 51, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 18, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 59, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 42, placement: [[4, -3], [5, -4]] },
            { dominoIndex: 19, placement: [[4, -4], [4, -5]] },
        ],
        handList: [16, 41, 38],
        moves: [
            {
                dominoIndex: 16,
                placement: [[6, -5], [5, -5]],
                pitchLists: [
                    [9, 6, 1],
                    [1, 8, 4, 11],
                    [6, 1, 10, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 41,
                placement: [[3, -5], [4, -6]],
                pitchLists: [
                    [4, 9, 6, 1],
                    [7, 9, 1, 4],
                ],
                points: 8,
            },
            {
                dominoIndex: 38,
                placement: [[5, -6], [5, -7]],
                pitchLists: [
                    [11, 3, 6, 8],
                    [11, 7, 4],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 63, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 7, placement: [[2, -2], [1, -1]] },
        ],
        handList: [18, 4, 42],
        moves: [
            {
                dominoIndex: 18,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [1, 8, 5],
                    [0, 7, 3, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 4,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [1, 8, 5, 0],
                    [7, 4, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[0, -2], [1, -2]],
                pitchLists: [
                    [4, 8, 0],
                    [8, 7, 4, 0],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 43, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 20, placement: [[-2, 2], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[0, 1], [0, 2]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 63, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 48, placement: [[-2, 1], [-3, 2]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [8, 0, 3],
                    [9, 4, 0],
                    [8, 11, 4, 3],
                ],
                points: 10,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 15, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 25, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 59, placement: [[1, 3], [1, 2]] },
            { dominoIndex: 37, placement: [[3, 0], [3, 1]] },
        ],
        handList: [29, 51, 28],
        moves: [
            {
                dominoIndex: 29,
                placement: [[2, 2], [2, 3]],
                pitchLists: [
                    [5, 10, 2],
                    [6, 2, 10],
                    [10, 2, 7],
                    [1, 7, 10],
                ],
                points: 12,
            },
            {
                dominoIndex: 51,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [8, 5, 11, 3],
                    [5, 2, 10, 7],
                    [11, 6, 2, 10],
                    [11, 2, 5],
                ],
                points: 15,
            },
            {
                dominoIndex: 28,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [5, 11, 9, 2],
                    [9, 5, 10, 2],
                ],
                points: 8,
            },
        ],
        points: 37,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 4, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 39, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 48, placement: [[-1, -1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 18, placement: [[1, 0], [0, 1]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 60, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 35, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 24, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 45, placement: [[0, 3], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 27,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [11, 2, 8],
                    [7, 2, 11],
                    [5, 2, 8],
                    [2, 5, 8],
                    [8, 11, 4],
                ],
                points: 15,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 24, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 50, placement: [[5, -2], [4, -1]] },
            { dominoIndex: 19, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 54, placement: [[2, 1], [2, 0]] },
            { dominoIndex: 59, placement: [[4, -3], [3, -2]] },
            { dominoIndex: 4, placement: [[2, 2], [1, 3]] },
        ],
        handList: [14, 2, 51],
        moves: [
            {
                dominoIndex: 14,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [1, 6, 9],
                    [8, 4, 1],
                    [5, 9, 1],
                    [7, 4, 9, 1],
                    [7, 10, 2, 4],
                ],
                points: 17,
            },
            {
                dominoIndex: 2,
                placement: [[-1, 2], [0, 2]],
                pitchLists: [
                    [5, 9, 1, 2],
                ],
                points: 4,
            },
            {
                dominoIndex: 51,
                placement: [[0, 4], [0, 3]],
                pitchLists: [
                    [2, 11, 5],
                    [9, 0, 4, 5],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
}
