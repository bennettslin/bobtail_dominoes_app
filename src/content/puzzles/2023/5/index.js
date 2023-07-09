import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 5, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 33, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 8, placement: [[-1, 0], [-1, -1]] },
        ],
        handList: [41, 42, 9],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-1, 2], [0, 2]],
                pitchLists: [
                    [0, 4, 7],
                    [8, 0, 3, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [0, 4, 8],
                    [8, 0, 4, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-3, 4], [-2, 3]],
                pitchLists: [
                    [8, 5, 0],
                    [4, 9, 0],
                    [4, 0, 9],
                ],
                points: 9,
            },
        ],
        points: 25,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 38, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 22, placement: [[1, 3], [2, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 48, placement: [[3, 1], [2, 2]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 59, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 15, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 54, placement: [[0, 1], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [3, 9, 0],
                    [6, 0, 9],
                    [10, 1, 5, 9],
                ],
                points: 10,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 36, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 59, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 8, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 16, placement: [[-3, 2], [-3, 1]] },
        ],
        handList: [43, 48, 9],
        moves: [
            {
                dominoIndex: 43,
                placement: [[-2, 0], [-3, 0]],
                pitchLists: [
                    [9, 4, 8, 1],
                    [9, 6, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[-3, -1], [-2, -1]],
                pitchLists: [
                    [5, 9, 6, 1],
                    [8, 4, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-1, -3], [-2, -2]],
                pitchLists: [
                    [0, 9, 5],
                    [9, 8, 4, 0],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 2, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 33, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 44, placement: [[1, -1], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 58, placement: [[1, 0], [0, 0]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 30, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 53, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 54, placement: [[3, -2], [2, -2]] },
            { dominoIndex: 59, placement: [[0, -1], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [2, 7, 11],
                    [2, 10, 5],
                    [10, 2, 6],
                    [2, 7, 10],
                ],
                points: 12,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 20, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 16, placement: [[-2, 4], [-2, 5]] },
            { dominoIndex: 41, placement: [[-3, 4], [-4, 4]] },
            { dominoIndex: 50, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 60, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 55, placement: [[0, 2], [1, 2]] },
        ],
        handList: [24, 36, 53],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [2, 5, 11],
                    [5, 7, 10, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 36,
                placement: [[1, -2], [1, -1]],
                pitchLists: [
                    [3, 11, 7],
                    [2, 5, 11, 9],
                    [9, 2, 10, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 53,
                placement: [[1, -3], [2, -3]],
                pitchLists: [
                    [6, 3, 9],
                    [8, 3, 11, 7],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 3, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 18, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 9, placement: [[-1, 2], [-1, 1]] },
        ],
        handList: [49, 20, 17],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-1, -1], [0, -2]],
                pitchLists: [
                    [5, 3, 9, 0],
                    [9, 5, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [1, 10, 9, 5],
                    [9, 5, 0, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 17,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [9, 1, 6, 5],
                    [7, 1, 3, 10],
                ],
                points: 8,
            },
        ],
        points: 25,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 20, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 42, placement: [[1, -2], [1, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 5, placement: [[1, -1], [0, 0]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 12, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 47, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 20, placement: [[1, 3], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [4, 1, 7],
                    [10, 4, 7],
                    [7, 2, 5, 10],
                ],
                points: 10,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 38, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 61, placement: [[1, 0], [1, -1]] },
            { dominoIndex: 7, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 54, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 4, placement: [[2, -1], [2, 0]] },
        ],
        handList: [6, 3, 50],
        moves: [
            {
                dominoIndex: 6,
                placement: [[0, -3], [1, -3]],
                pitchLists: [
                    [0, 9, 6, 3],
                    [6, 9, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [0, 6, 9, 3],
                    [0, 6, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 50,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [5, 0, 8],
                    [0, 6, 3, 10],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 29, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 55, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 60, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 24, placement: [[2, 0], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[1, -1], [0, 0]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 44, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 9, placement: [[3, -2], [4, -2]] },
            { dominoIndex: 7, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 17, placement: [[1, -3], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[3, -3], [2, -3]],
                pitchLists: [
                    [1, 10, 6],
                    [6, 4, 10, 1],
                    [10, 4, 7, 0],
                    [10, 7, 3],
                ],
                points: 14,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 46, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 34, placement: [[1, -2], [2, -3]] },
            { dominoIndex: 9, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 4, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 48, placement: [[-1, -3], [-1, -2]] },
            { dominoIndex: 55, placement: [[1, -3], [1, -4]] },
        ],
        handList: [16, 19, 29],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, -5], [0, -4]],
                pitchLists: [
                    [1, 10, 6, 3],
                    [1, 9, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[-2, -1], [-2, -2]],
                pitchLists: [
                    [1, 4, 10],
                    [6, 1, 9],
                    [6, 8, 0, 3],
                    [1, 9, 5, 6],
                ],
                points: 14,
            },
            {
                dominoIndex: 29,
                placement: [[-2, -3], [-3, -3]],
                pitchLists: [
                    [10, 2, 5],
                    [2, 6, 1, 9],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 43, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 19, placement: [[3, -5], [3, -4]] },
        ],
        handList: [6, 25, 38],
        moves: [
            {
                dominoIndex: 6,
                placement: [[4, -2], [3, -2]],
                pitchLists: [
                    [9, 6, 0],
                    [1, 9, 4, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [2, 9, 6, 0],
                    [9, 6, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[2, -1], [1, 0]],
                pitchLists: [
                    [6, 9, 3],
                    [6, 3, 11],
                    [2, 8, 11],
                ],
                points: 9,
            },
        ],
        points: 25,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 60, placement: [[1, 1], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[0, 1], [0, 2]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 59, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 66, placement: [[1, 0], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [1, 4, 10],
                    [8, 1, 4],
                    [4, 7, 11],
                ],
                points: 9,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 37, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 7, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 14, placement: [[2, -2], [2, -3]] },
            { dominoIndex: 38, placement: [[3, -3], [3, -4]] },
            { dominoIndex: 58, placement: [[3, -5], [2, -4]] },
        ],
        handList: [25, 42, 9],
        moves: [
            {
                dominoIndex: 25,
                placement: [[3, -6], [2, -5]],
                pitchLists: [
                    [2, 7, 11, 3],
                    [6, 9, 4, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 42,
                placement: [[0, -2], [-1, -2]],
                pitchLists: [
                    [8, 4, 0, 1],
                    [4, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [4, 7, 10, 0],
                    [3, 0, 9],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 49, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 2, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 9, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 59, placement: [[1, -1], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 39, placement: [[1, 0], [0, 0]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 41, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 8, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 26, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 33, placement: [[-1, 2], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-2, 2], [-2, 1]],
                pitchLists: [
                    [0, 3, 8],
                    [3, 6, 0],
                    [3, 6, 0],
                    [2, 7, 11, 3],
                ],
                points: 13,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 41, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 18, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 24, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 50, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 65, placement: [[-3, 1], [-3, 0]] },
            { dominoIndex: 15, placement: [[0, -1], [1, -1]] },
        ],
        handList: [27, 7, 55],
        moves: [
            {
                dominoIndex: 27,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [5, 8, 2],
                    [2, 5, 9, 1],
                    [8, 1, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 55,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [6, 10, 2],
                    [10, 8, 1, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 7,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [5, 8, 2, 0],
                    [10, 1, 5, 7],
                    [6, 10, 2, 7],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 16, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 50, placement: [[-1, 0], [-2, 1]] },
        ],
        handList: [25, 28, 51],
        moves: [
            {
                dominoIndex: 25,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [6, 2, 9],
                    [2, 5, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 28,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [6, 9, 2],
                    [9, 2, 5, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 51,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [2, 5, 11],
                    [9, 5, 1],
                    [2, 5, 9, 11],
                    [2, 11, 6],
                ],
                points: 13,
            },
        ],
        points: 28,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 19, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 41, placement: [[0, 1], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[1, 0], [0, 0]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 4, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 20, placement: [[-1, 3], [-1, 4]] },
            { dominoIndex: 35, placement: [[-2, 1], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, 1], [0, 2]],
                pitchLists: [
                    [3, 8, 0, 4],
                    [4, 7, 1],
                    [3, 9, 0, 7],
                ],
                points: 11,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 44, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 63, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 3, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 25, placement: [[-1, 0], [-2, 1]] },
        ],
        handList: [60, 36, 33],
        moves: [
            {
                dominoIndex: 36,
                placement: [[-2, 0], [-2, -1]],
                pitchLists: [
                    [3, 2, 7, 11],
                    [9, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [7, 11, 3, 0],
                    [10, 2, 6, 7],
                    [9, 3, 6, 11],
                ],
                points: 12,
            },
            {
                dominoIndex: 33,
                placement: [[-2, 4], [-1, 3]],
                pitchLists: [
                    [10, 0, 6, 3],
                ],
                points: 4,
            },
        ],
        points: 25,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 49, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 48, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 4, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 33, placement: [[2, -1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 9, placement: [[0, 1], [1, 1]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 14, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 16, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 50, placement: [[3, -4], [2, -3]] },
            { dominoIndex: 42, placement: [[0, -2], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 17,
                placement: [[2, -1], [2, -2]],
                pitchLists: [
                    [8, 4, 1],
                    [10, 7, 1],
                    [4, 1, 7],
                    [7, 4, 11],
                ],
                points: 12,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 60, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 30, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 33, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 23, placement: [[2, -3], [2, -4]] },
            { dominoIndex: 44, placement: [[-1, -3], [-1, -2]] },
            { dominoIndex: 57, placement: [[-2, -2], [-2, -1]] },
        ],
        handList: [20, 48, 27],
        moves: [
            {
                dominoIndex: 20,
                placement: [[0, -4], [1, -4]],
                pitchLists: [
                    [1, 10, 4],
                    [1, 4, 7],
                    [10, 11, 6, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 48,
                placement: [[3, -3], [3, -4]],
                pitchLists: [
                    [11, 2, 5],
                    [1, 10, 4, 8],
                    [8, 2, 6, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 27,
                placement: [[3, -2], [4, -3]],
                pitchLists: [
                    [8, 5, 2],
                    [11, 2, 5, 8],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 43, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 15, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 42, placement: [[3, -3], [2, -2]] },
        ],
        handList: [59, 25, 10],
        moves: [
            {
                dominoIndex: 59,
                placement: [[2, -1], [3, -2]],
                pitchLists: [
                    [10, 7, 4],
                    [1, 5, 8, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [11, 2, 6],
                    [10, 7, 4, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 10,
                placement: [[-1, 3], [0, 3]],
                pitchLists: [
                    [9, 6, 0],
                    [11, 2, 6, 10],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 38, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 44, placement: [[-2, 2], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 17, placement: [[-1, 1], [0, 1]] },
        ],
    },
    31: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 48, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 51, placement: [[-1, -1], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [5, 11, 8],
                    [11, 3, 8],
                    [5, 2, 11],
                ],
                points: 9,
            },
        ],
    },
}
