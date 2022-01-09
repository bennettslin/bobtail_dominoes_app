import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 7, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 17, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 44, placement: [[0, 1], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [10, 4, 1],
                    [7, 10, 1],
                    [1, 10, 4],
                ],
                points: 9,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 63, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 38, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 30, placement: [[1, 0], [1, -1]] },
            { dominoIndex: 27, placement: [[3, -1], [2, -1]] },
        ],
        handList: [50, 25, 29],
        moves: [
            {
                dominoIndex: 50,
                placement: [[2, 0], [3, 0]],
                pitchLists: [
                    [6, 2, 5, 10],
                    [8, 5, 11],
                    [2, 5, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 29,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [6, 5, 10, 2],
                    [2, 5, 8, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 25,
                placement: [[2, 2], [1, 2]],
                pitchLists: [
                    [11, 10, 6, 2],
                    [8, 5, 11, 2],
                    [11, 2, 8, 6],
                    [10, 11, 6, 2],
                ],
                points: 16,
            },
        ],
        points: 36,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 62, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 26, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 51, placement: [[1, -1], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[1, 0], [0, 1]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 19, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 31, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 24, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 16, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 6, placement: [[1, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [5, 9, 1, 6],
                    [5, 0, 9, 4],
                    [4, 0, 9],
                    [9, 6, 1],
                ],
                points: 14,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 35, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 59, placement: [[3, -2], [4, -2]] },
            { dominoIndex: 11, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 41, placement: [[3, -4], [2, -4]] },
            { dominoIndex: 4, placement: [[3, -5], [4, -6]] },
            { dominoIndex: 43, placement: [[5, -5], [4, -5]] },
        ],
        handList: [60, 26, 10],
        moves: [
            {
                dominoIndex: 60,
                placement: [[5, -6], [5, -7]],
                pitchLists: [
                    [11, 7, 4],
                    [7, 9, 4, 0],
                    [11, 4, 0, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 26,
                placement: [[5, -4], [6, -5]],
                pitchLists: [
                    [11, 7, 4, 2],
                    [0, 9, 4, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 10,
                placement: [[6, -6], [7, -6]],
                pitchLists: [
                    [4, 7, 0, 10],
                    [10, 7, 2],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 25, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 4, placement: [[2, -3], [1, -2]] },
        ],
        handList: [24, 17, 50],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [2, 5, 10],
                    [0, 4, 9, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 17,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [4, 1, 7],
                    [2, 5, 10, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 50,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [5, 10, 9, 1],
                    [6, 10, 2],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 29, placement: [[-1, 0], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, -1], [0, 0]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 24, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 5, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 56, placement: [[1, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[1, -2], [0, -1]],
                pitchLists: [
                    [2, 6, 11],
                    [2, 10, 5],
                    [5, 2, 10, 6],
                ],
                points: 10,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 10, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 42, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 4, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 17, placement: [[2, 0], [2, -1]] },
        ],
        handList: [63, 41, 21],
        moves: [
            {
                dominoIndex: 63,
                placement: [[3, 1], [2, 2]],
                pitchLists: [
                    [7, 0, 4, 8],
                    [7, 1, 4, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 41,
                placement: [[1, 3], [1, 2]],
                pitchLists: [
                    [0, 7, 4],
                    [8, 11, 4],
                    [4, 7, 11],
                ],
                points: 9,
            },
            {
                dominoIndex: 21,
                placement: [[0, 4], [1, 4]],
                pitchLists: [
                    [8, 11, 4, 1],
                    [0, 7, 4, 11],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 41, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 17, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 20, placement: [[1, -3], [0, -3]] },
            { dominoIndex: 58, placement: [[1, -4], [2, -4]] },
        ],
        missingMoves: [
            { dominoIndex: 39, placement: [[1, -2], [0, -2]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 54, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 31, placement: [[-2, 4], [-2, 5]] },
            { dominoIndex: 14, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 25, placement: [[-1, 2], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-2, 3], [-2, 2]],
                pitchLists: [
                    [11, 7, 3, 4],
                    [10, 2, 7],
                    [11, 2, 6],
                    [3, 6, 11],
                ],
                points: 13,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 28, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 30, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 63, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 56, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 35, placement: [[3, 2], [3, 1]] },
            { dominoIndex: 26, placement: [[1, 2], [1, 3]] },
        ],
        handList: [41, 4, 48],
        moves: [
            {
                dominoIndex: 41,
                placement: [[3, -1], [4, -1]],
                pitchLists: [
                    [11, 4, 7],
                    [4, 11, 8, 3],
                    [4, 8, 11],
                    [7, 11, 6, 2],
                ],
                points: 14,
            },
            {
                dominoIndex: 4,
                placement: [[4, -2], [4, -3]],
                pitchLists: [
                    [4, 0, 7],
                    [0, 4, 8, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[3, -3], [4, -4]],
                pitchLists: [
                    [8, 5, 2],
                    [8, 4, 0, 7],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 33, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 36, placement: [[0, 1], [1, 1]] },
        ],
        handList: [60, 26, 29],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-2, 0], [-2, 1]],
                pitchLists: [
                    [7, 11, 3],
                    [11, 6, 3, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 26,
                placement: [[-1, 0], [0, -1]],
                pitchLists: [
                    [7, 2, 10],
                    [7, 2, 11],
                    [7, 10, 3],
                ],
                points: 9,
            },
            {
                dominoIndex: 29,
                placement: [[0, -2], [-1, -1]],
                pitchLists: [
                    [2, 7, 10, 3],
                    [2, 10, 7],
                    [10, 7, 1],
                    [10, 2, 6],
                ],
                points: 13,
            },
        ],
        points: 31,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 56, placement: [[-1, 4], [-2, 5]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[0, 3], [0, 2]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 27, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 38, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 9, placement: [[-1, 2], [-2, 2]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-1, 3], [0, 2]],
                pitchLists: [
                    [6, 0, 3],
                    [11, 6, 3],
                    [9, 0, 6],
                    [10, 3, 6],
                ],
                points: 12,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 63, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 5, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 49, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 19, placement: [[-3, 2], [-3, 3]] },
        ],
        handList: [14, 59, 37],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-4, 1], [-3, 0]],
                pitchLists: [
                    [1, 5, 9, 2],
                    [4, 5, 1, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 59,
                placement: [[-5, 2], [-4, 2]],
                pitchLists: [
                    [7, 10, 1],
                    [4, 1, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 37,
                placement: [[-6, 2], [-6, 3]],
                pitchLists: [
                    [3, 7, 10, 1],
                    [4, 1, 7, 10],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 53, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 30, placement: [[1, 2], [1, 3]] },
            { dominoIndex: 44, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 27, placement: [[-1, 3], [0, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[1, 1], [2, 1]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 36, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 4, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 15, placement: [[0, 3], [1, 2]] },
            { dominoIndex: 9, placement: [[1, 1], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [6, 9, 3],
                    [6, 3, 9],
                    [3, 0, 9],
                    [6, 9, 3, 0],
                ],
                points: 13,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 43, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 36, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 60, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 17, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 25, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 5, placement: [[-2, 4], [-1, 3]] },
        ],
        handList: [16, 44, 26],
        moves: [
            {
                dominoIndex: 16,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [11, 7, 4, 1],
                    [1, 9, 5, 0],
                    [1, 9, 6],
                ],
                points: 11,
            },
            {
                dominoIndex: 44,
                placement: [[2, 2], [1, 3]],
                pitchLists: [
                    [1, 9, 6, 4],
                    [1, 6, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 26,
                placement: [[1, 4], [0, 4]],
                pitchLists: [
                    [1, 6, 10, 2],
                    [4, 10, 7],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 34, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 14, placement: [[0, 1], [0, 2]] },
        ],
        handList: [54, 45, 24],
        moves: [
            {
                dominoIndex: 54,
                placement: [[1, -2], [0, -1]],
                pitchLists: [
                    [6, 9, 0],
                    [9, 8, 1, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 45,
                placement: [[-2, 1], [-2, 2]],
                pitchLists: [
                    [7, 4, 11],
                    [6, 9, 0, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [2, 5, 9],
                    [2, 7, 4, 11],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 8, placement: [[-3, 1], [-4, 2]] },
            { dominoIndex: 41, placement: [[-1, -2], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 14, placement: [[-3, 0], [-2, 0]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 17, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 63, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 3, placement: [[1, -1], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 43,
                placement: [[1, -2], [2, -2]],
                pitchLists: [
                    [1, 4, 9],
                    [4, 0, 7],
                    [9, 0, 4, 8],
                ],
                points: 10,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 43, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 54, placement: [[0, -3], [-1, -2]] },
            { dominoIndex: 15, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 49, placement: [[-1, 0], [-2, 0]] },
        ],
        handList: [12, 55, 24],
        moves: [
            {
                dominoIndex: 12,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [2, 1, 9, 5],
                    [9, 1, 5],
                    [4, 1, 9],
                    [6, 9, 2],
                ],
                points: 13,
            },
            {
                dominoIndex: 24,
                placement: [[-1, -3], [-2, -2]],
                pitchLists: [
                    [2, 9, 1, 5],
                    [5, 9, 4, 1],
                    [5, 2, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 55,
                placement: [[-3, 1], [-2, 1]],
                pitchLists: [
                    [4, 1, 9, 6],
                    [5, 2, 9, 10],
                    [1, 9, 5, 10],
                ],
                points: 12,
            },
        ],
        points: 38,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 4, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 18, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 7, placement: [[-1, 3], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[0, 0], [-1, 1]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 49, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 25, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 8, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 5, placement: [[-2, 3], [-1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [9, 0, 5],
                    [0, 9, 5],
                    [3, 0, 6],
                    [9, 6, 0],
                ],
                points: 12,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 48, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 61, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 17, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 42, placement: [[1, -2], [1, -3]] },
            { dominoIndex: 30, placement: [[-2, -1], [-3, 0]] },
            { dominoIndex: 38, placement: [[2, -2], [2, -3]] },
            { dominoIndex: 7, placement: [[1, -4], [2, -4]] },
        ],
        handList: [54, 22, 55],
        moves: [
            {
                dominoIndex: 54,
                placement: [[2, -5], [3, -6]],
                pitchLists: [
                    [6, 7, 11, 3],
                    [9, 6, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 22,
                placement: [[0, -3], [0, -4]],
                pitchLists: [
                    [2, 8, 11],
                    [9, 6, 0, 2],
                    [3, 0, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 55,
                placement: [[-1, -3], [-2, -2]],
                pitchLists: [
                    [6, 2, 8, 11],
                    [3, 6, 10],
                    [10, 2, 7],
                ],
                points: 10,
            },
        ],
        points: 29,
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 13, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 24, placement: [[-2, 1], [-1, 1]] },
        ],
        handList: [51, 35, 27],
        moves: [
            {
                dominoIndex: 51,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [8, 11, 5],
                    [2, 5, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 35,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [0, 3, 8],
                    [2, 5, 11, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 27,
                placement: [[-1, 3], [-1, 2]],
                pitchLists: [
                    [5, 8, 2],
                    [8, 5, 2],
                    [3, 11, 8],
                ],
                points: 9,
            },
        ],
        points: 24,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 28, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 41, placement: [[-1, -1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[0, 0], [-1, 1]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 18, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 31, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 19, placement: [[-2, 2], [-3, 2]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-1, 2], [-1, 1]],
                pitchLists: [
                    [9, 1, 6],
                    [3, 1, 10, 6],
                    [7, 10, 1],
                ],
                points: 10,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 29, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 56, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 38, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 37, placement: [[0, 1], [-1, 2]] },
        ],
        handList: [59, 21, 33],
        moves: [
            {
                dominoIndex: 59,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [7, 0, 3],
                    [2, 7, 10],
                    [10, 0, 7, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 21,
                placement: [[-1, -1], [0, -2]],
                pitchLists: [
                    [1, 7, 10],
                    [11, 7, 0, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[-2, -1], [-1, -2]],
                pitchLists: [
                    [3, 1, 7, 10],
                    [6, 11, 2],
                    [6, 1, 10],
                ],
                points: 10,
            },
        ],
        points: 29,
    },
}
