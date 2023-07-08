import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 17, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 45, placement: [[-2, 1], [-2, 0]] },
            { dominoIndex: 12, placement: [[-3, 0], [-2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 51,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [2, 5, 11],
                    [5, 8, 1],
                    [11, 8, 4],
                ],
                points: 9,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 27, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 32, placement: [[3, 1], [2, 2]] },
            { dominoIndex: 4, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 19, placement: [[2, 0], [2, 1]] },
        ],
        handList: [29, 33, 9],
        moves: [
            {
                dominoIndex: 29,
                placement: [[2, 3], [3, 2]],
                pitchLists: [
                    [1, 9, 5, 2],
                    [2, 8, 5, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 33,
                placement: [[5, 0], [4, 1]],
                pitchLists: [
                    [3, 6, 10, 2],
                    [9, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[5, 1], [5, 2]],
                pitchLists: [
                    [9, 3, 6, 0],
                    [3, 0, 9],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 7, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 4, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 66, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 49, placement: [[2, 2], [1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[0, 0], [1, -1]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 41, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 45, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 8, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 48, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 15, placement: [[-2, 1], [-2, 2]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [5, 2, 8],
                    [11, 8, 2],
                    [7, 5, 2, 10],
                    [1, 5, 10],
                ],
                points: 13,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 55, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 18, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 30, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 51, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 50, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 35, placement: [[-1, 0], [-2, 0]] },
        ],
        handList: [34, 44, 24],
        moves: [
            {
                dominoIndex: 34,
                placement: [[3, -2], [3, -1]],
                pitchLists: [
                    [2, 6, 10, 3],
                    [3, 5, 11, 8],
                    [11, 2, 5, 7],
                ],
                points: 12,
            },
            {
                dominoIndex: 24,
                placement: [[-2, -2], [-2, -1]],
                pitchLists: [
                    [2, 5, 8],
                ],
                points: 3,
            },
            {
                dominoIndex: 44,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [4, 10, 1, 8],
                    [2, 5, 8, 10],
                    [6, 11, 3, 10],
                ],
                points: 12,
            },
        ],
        points: 29,
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 27, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 43, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 38, placement: [[0, 1], [1, 1]] },
        ],
        handList: [7, 31, 9],
        moves: [
            {
                dominoIndex: 7,
                placement: [[-1, 2], [0, 2]],
                pitchLists: [
                    [4, 9, 0, 7],
                    [8, 3, 0],
                    [10, 3, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 31,
                placement: [[-1, 3], [-2, 3]],
                pitchLists: [
                    [6, 0, 3],
                    [11, 7, 3],
                    [8, 3, 0, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 9,
                placement: [[-2, 4], [-1, 4]],
                pitchLists: [
                    [9, 4, 0],
                    [11, 7, 3, 0],
                    [6, 0, 3, 9],
                ],
                points: 11,
            },
        ],
        points: 33,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 27, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 51, placement: [[1, -1], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[1, 0], [0, 0]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 43, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 59, placement: [[1, -2], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [1, 10, 5],
                    [1, 4, 9],
                    [7, 10, 4],
                ],
                points: 9,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 59, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 20, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 15, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 41, placement: [[-3, 1], [-2, 0]] },
        ],
        handList: [16, 9, 49],
        moves: [
            {
                dominoIndex: 16,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [4, 1, 7],
                    [7, 1, 10],
                    [10, 1, 6],
                    [6, 10, 5, 1],
                ],
                points: 13,
            },
            {
                dominoIndex: 49,
                placement: [[-2, -1], [-3, -1]],
                pitchLists: [
                    [9, 5, 1],
                    [5, 7, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-3, 0], [-4, 1]],
                pitchLists: [
                    [0, 7, 10, 3],
                    [9, 0, 4, 6],
                    [5, 0, 9],
                    [9, 4, 1, 7],
                ],
                points: 15,
            },
        ],
        points: 37,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 55, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 24, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 15, placement: [[-1, 3], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 28, placement: [[0, 1], [0, 2]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 42, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 15, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 20, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 8, placement: [[-1, 2], [-1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-2, 3], [-2, 2]],
                pitchLists: [
                    [1, 8, 5],
                    [8, 0, 5],
                    [8, 0, 4],
                    [11, 5, 8],
                ],
                points: 12,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 37, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 66, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 33, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 65, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 24, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 25, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 30, placement: [[-2, 1], [-2, 2]] },
        ],
        handList: [54, 19, 14],
        moves: [
            {
                dominoIndex: 54,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [6, 9, 3],
                    [6, 2, 10],
                    [10, 5, 2, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 19,
                placement: [[2, -3], [3, -3]],
                pitchLists: [
                    [6, 1, 9],
                    [1, 6, 9, 3],
                    [9, 6, 2, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 14,
                placement: [[3, -2], [4, -3]],
                pitchLists: [
                    [4, 1, 9, 6],
                    [6, 1, 9, 4],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 56, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 54, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 3, placement: [[0, 1], [1, 1]] },
        ],
        handList: [4, 9, 34],
        moves: [
            {
                dominoIndex: 4,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [9, 0, 4],
                    [4, 8, 0, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-2, -1], [-2, 0]],
                pitchLists: [
                    [0, 9, 4, 6],
                    [9, 0, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [0, 3, 9],
                    [7, 3, 0, 8],
                    [6, 3, 9],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 36, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 55, placement: [[-2, 0], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[0, -1], [1, -1]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 21, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 41, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 55, placement: [[1, 2], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[0, 2], [0, 3]],
                pitchLists: [
                    [9, 11, 2, 5],
                    [4, 7, 10, 2],
                ],
                points: 8,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 60, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 15, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 20, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 25, placement: [[-2, 2], [-1, 1]] },
        ],
        handList: [37, 63, 33],
        moves: [
            {
                dominoIndex: 33,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [6, 3, 11],
                    [11, 3, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 37,
                placement: [[1, 2], [0, 3]],
                pitchLists: [
                    [7, 11, 3],
                    [11, 3, 6, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 63,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [8, 7, 11, 3],
                    [8, 11, 6, 2],
                    [11, 7, 3],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 41, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 3, placement: [[2, -2], [2, -3]] },
            { dominoIndex: 7, placement: [[4, -3], [3, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[1, -1], [2, -1]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 51, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 25, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 60, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 3, placement: [[1, -3], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [4, 8, 11, 2],
                    [4, 0, 7],
                    [0, 8, 5],
                    [8, 3, 11],
                ],
                points: 13,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 30, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 66, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 56, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 49, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 9, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 35, placement: [[-2, -1], [-1, -2]] },
        ],
        handList: [4, 24, 55],
        moves: [
            {
                dominoIndex: 4,
                placement: [[0, -3], [-1, -3]],
                pitchLists: [
                    [4, 0, 9],
                    [0, 5, 9, 2],
                    [0, 8, 3],
                    [4, 8, 0],
                ],
                points: 13,
            },
            {
                dominoIndex: 24,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [2, 5, 11],
                    [2, 9, 5, 0],
                    [4, 0, 9, 5],
                    [5, 2, 9],
                ],
                points: 14,
            },
            {
                dominoIndex: 55,
                placement: [[4, -4], [3, -4]],
                pitchLists: [
                    [2, 10, 6],
                    [10, 5, 2, 9],
                ],
                points: 7,
            },
        ],
        points: 36,
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 59, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 12, placement: [[2, -3], [2, -2]] },
        ],
        handList: [13, 49, 25],
        moves: [
            {
                dominoIndex: 49,
                placement: [[2, -1], [2, 0]],
                pitchLists: [
                    [1, 2, 5, 9],
                ],
                points: 4,
            },
            {
                dominoIndex: 25,
                placement: [[0, 1], [1, 0]],
                pitchLists: [
                    [5, 6, 2, 10],
                    [3, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 13,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [1, 3, 6, 9],
                    [3, 1, 7, 10],
                ],
                points: 8,
            },
        ],
        points: 21,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 48, placement: [[2, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, 3], [0, 2]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 54, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 59, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 15, placement: [[1, -2], [2, -3]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [1, 9, 5, 6],
                    [5, 1, 10, 9],
                ],
                points: 8,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 51, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 65, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 41, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 2, placement: [[1, -4], [2, -4]] },
            { dominoIndex: 33, placement: [[3, -3], [2, -3]] },
        ],
        handList: [18, 60, 14],
        moves: [
            {
                dominoIndex: 18,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [1, 8, 11, 4],
                    [2, 11, 5, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 60,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [4, 2, 11, 7],
                    [8, 3, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [7, 4, 1],
                    [8, 3, 11, 4],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 24, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 36, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 4, placement: [[2, 3], [1, 3]] },
            { dominoIndex: 60, placement: [[2, 4], [3, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 7, placement: [[1, 2], [0, 3]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 9, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 48, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 3, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 8, placement: [[1, 0], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [0, 8, 3],
                    [7, 0, 3],
                    [6, 3, 0],
                    [8, 3, 0, 6],
                ],
                points: 13,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 54, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 7, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 42, placement: [[-3, 0], [-4, 1]] },
            { dominoIndex: 43, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 34, placement: [[-2, -2], [-3, -1]] },
            { dominoIndex: 3, placement: [[-3, 1], [-4, 2]] },
        ],
        handList: [66, 41, 15],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-5, 1], [-5, 2]],
                pitchLists: [
                    [4, 8, 0],
                    [0, 4, 8, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 66,
                placement: [[-3, 2], [-4, 3]],
                pitchLists: [
                    [7, 3, 10],
                    [7, 4, 0, 10],
                    [8, 3, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 15,
                placement: [[-6, 2], [-6, 1]],
                pitchLists: [
                    [1, 7, 3, 10],
                    [5, 4, 8, 0],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 54, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 4, placement: [[2, -2], [2, -1]] },
        ],
        handList: [55, 34, 19],
        moves: [
            {
                dominoIndex: 19,
                placement: [[3, -1], [3, -2]],
                pitchLists: [
                    [9, 1, 6],
                    [9, 4, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 55,
                placement: [[4, -2], [4, -1]],
                pitchLists: [
                    [0, 9, 6],
                    [6, 1, 9],
                    [4, 1, 10],
                ],
                points: 9,
            },
            {
                dominoIndex: 34,
                placement: [[5, -2], [5, -1]],
                pitchLists: [
                    [0, 9, 6, 3],
                    [3, 10, 6],
                    [4, 1, 10, 7],
                ],
                points: 11,
            },
        ],
        points: 28,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 48, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 34, placement: [[-2, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[0, 0], [-1, 1]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 4, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 41, placement: [[3, -1], [2, -1]] },
            { dominoIndex: 29, placement: [[1, 0], [2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[3, -3], [3, -2]],
                pitchLists: [
                    [8, 11, 4],
                    [8, 4, 0, 7],
                    [11, 7, 2],
                ],
                points: 10,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 17, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 23, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 60, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 41, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 54, placement: [[-1, 0], [-1, -1]] },
        ],
        handList: [38, 56, 52],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-2, 4], [-2, 3]],
                pitchLists: [
                    [7, 11, 3],
                    [7, 2, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 56,
                placement: [[-3, 4], [-4, 4]],
                pitchLists: [
                    [11, 6, 3],
                    [7, 2, 11, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 52,
                placement: [[-2, 5], [-1, 4]],
                pitchLists: [
                    [7, 11, 3, 6],
                    [11, 6, 3, 7],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    31: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 14, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 41, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 62, placement: [[2, -1], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[2, 0], [1, 0]] },
        ],
    },
}
