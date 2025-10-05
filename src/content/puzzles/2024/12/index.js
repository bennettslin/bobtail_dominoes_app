import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 38, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 24, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 61, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 36, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 25, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 64, placement: [[3, 0], [3, -1]] },
        ],
        handList: [54, 9, 15],
        moves: [
            {
                dominoIndex: 54,
                placement: [[2, -2], [3, -3]],
                pitchLists: [
                    [6, 9, 3],
                    [9, 6, 2, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [0, 6, 9, 3],
                    [0, 9, 6],
                    [9, 2, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 15,
                placement: [[1, -3], [0, -3]],
                pitchLists: [
                    [5, 1, 0, 9],
                    [1, 9, 2, 6],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 13, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 63, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 33, placement: [[-1, 3], [0, 2]] },
        ],
        handList: [6, 59, 10],
        moves: [
            {
                dominoIndex: 6,
                placement: [[0, 3], [1, 3]],
                pitchLists: [
                    [3, 0, 6],
                    [9, 3, 6, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [1, 3, 7, 10],
                    [10, 3, 0, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 10,
                placement: [[-1, 5], [-1, 4]],
                pitchLists: [
                    [7, 3, 10, 0],
                ],
                points: 4,
            },
        ],
        points: 21,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 13, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 63, placement: [[0, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[1, -1], [0, 0]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 21, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 53, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 29, placement: [[0, 1], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 28,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [2, 5, 11],
                    [6, 2, 9],
                    [9, 5, 2, 10],
                ],
                points: 10,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 42, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 62, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 24, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 17, placement: [[3, -3], [3, -4]] },
        ],
        handList: [34, 9, 38],
        moves: [
            {
                dominoIndex: 38,
                placement: [[2, -4], [2, -3]],
                pitchLists: [
                    [3, 11, 8],
                    [7, 11, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 34,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [11, 7, 3],
                    [7, 1, 10, 3],
                    [3, 11, 8, 7],
                    [10, 7, 4],
                ],
                points: 14,
            },
            {
                dominoIndex: 9,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [5, 0, 9],
                    [10, 7, 4, 0],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 66, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 60, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 29, placement: [[2, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[0, 1], [0, 2]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 9, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 29, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 24, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 30, placement: [[0, 2], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 27,
                placement: [[0, -2], [-1, -1]],
                pitchLists: [
                    [2, 5, 11],
                    [2, 8, 5],
                    [8, 5, 2, 10],
                    [8, 2, 5, 11],
                ],
                points: 14,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 33, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 38, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 7, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 60, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 40, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 25, placement: [[-2, 5], [-1, 4]] },
        ],
        handList: [29, 20, 55],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-3, 4], [-3, 5]],
                pitchLists: [
                    [2, 11, 6],
                    [6, 2, 10],
                    [6, 3, 11, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 55,
                placement: [[-4, 5], [-5, 6]],
                pitchLists: [
                    [6, 10, 2],
                    [7, 2, 6, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[-5, 5], [-4, 4]],
                pitchLists: [
                    [1, 6, 10, 2],
                    [4, 6, 10, 1],
                    [10, 2, 11, 6],
                ],
                points: 12,
            },
        ],
        points: 31,
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 43, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 45, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 26, placement: [[1, -1], [0, -1]] },
        ],
        handList: [35, 7, 15],
        moves: [
            {
                dominoIndex: 35,
                placement: [[-2, -1], [-3, 0]],
                pitchLists: [
                    [3, 11, 7, 2],
                    [8, 4, 9, 0],
                ],
                points: 8,
            },
            {
                dominoIndex: 7,
                placement: [[-4, 1], [-3, 1]],
                pitchLists: [
                    [3, 8, 0],
                    [11, 4, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 15,
                placement: [[-4, 2], [-5, 2]],
                pitchLists: [
                    [11, 4, 7, 1],
                    [3, 8, 0, 5],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 20, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 44, placement: [[1, -1], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[0, 0], [0, 1]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 54, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 58, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 4, placement: [[0, -1], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [9, 6, 1],
                    [4, 6, 10, 1],
                    [7, 2, 10],
                ],
                points: 10,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 25, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 30, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 54, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 33, placement: [[2, 1], [1, 2]] },
        ],
        handList: [18, 65, 49],
        moves: [
            {
                dominoIndex: 18,
                placement: [[2, 2], [3, 1]],
                pitchLists: [
                    [9, 6, 3, 1],
                    [6, 2, 11, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 65,
                placement: [[0, 2], [1, 1]],
                pitchLists: [
                    [9, 6, 1],
                    [2, 6, 11, 9],
                    [11, 3, 8],
                    [2, 11, 6],
                ],
                points: 13,
            },
            {
                dominoIndex: 49,
                placement: [[0, 4], [1, 3]],
                pitchLists: [
                    [8, 1, 9, 5],
                    [2, 11, 6, 9],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 3, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 48, placement: [[1, -4], [1, -3]] },
            { dominoIndex: 4, placement: [[0, -2], [0, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 27, placement: [[1, -2], [0, -1]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 28, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 60, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 3, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 52, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 53, placement: [[1, 2], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[1, -2], [0, -1]],
                pitchLists: [
                    [6, 2, 9],
                    [6, 9, 0],
                    [9, 2, 6],
                    [9, 4, 0, 8],
                ],
                points: 13,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 33, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 37, placement: [[2, 2], [1, 2]] },
            { dominoIndex: 14, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 60, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 41, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 20, placement: [[-2, 1], [-3, 2]] },
        ],
        handList: [8, 34, 54],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [3, 1, 7, 10],
                    [7, 3, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[-3, 3], [-4, 3]],
                pitchLists: [
                    [8, 0, 4],
                    [7, 3, 10, 0],
                    [4, 1, 10, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 54,
                placement: [[-4, 2], [-5, 3]],
                pitchLists: [
                    [3, 6, 9],
                    [9, 8, 0, 4],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 14, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 60, placement: [[-2, -1], [-1, -1]] },
        ],
        handList: [24, 20, 56],
        moves: [
            {
                dominoIndex: 24,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [7, 11, 2, 5],
                    [5, 8, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [1, 10, 4],
                    [5, 8, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 56,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [1, 10, 4, 6],
                    [2, 8, 11, 6],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 43, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 18, placement: [[1, 1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[0, 0], [1, -1]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 38, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 55, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 33, placement: [[-1, 3], [-2, 4]] },
        ],
        moves: [
            {
                dominoIndex: 26,
                placement: [[1, 1], [0, 1]],
                pitchLists: [
                    [11, 7, 2],
                    [2, 10, 3, 6],
                    [4, 7, 10],
                ],
                points: 10,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 48, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 65, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 3, placement: [[1, -3], [0, -3]] },
            { dominoIndex: 14, placement: [[0, -1], [-1, -1]] },
        ],
        handList: [20, 55, 16],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [1, 10, 5],
                    [4, 10, 1],
                    [9, 5, 1, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 55,
                placement: [[-1, -2], [-2, -1]],
                pitchLists: [
                    [6, 4, 10, 1],
                    [3, 6, 10],
                    [10, 4, 1, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 16,
                placement: [[1, -4], [0, -4]],
                pitchLists: [
                    [1, 0, 5, 8],
                    [1, 3, 6, 10],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 29, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 45, placement: [[-4, 2], [-3, 2]] },
            { dominoIndex: 2, placement: [[-2, 3], [-1, 2]] },
            { dominoIndex: 19, placement: [[-4, 3], [-4, 4]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[-2, 1], [-2, 2]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 33, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 51, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 36, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 37, placement: [[1, -1], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 7,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [9, 3, 0],
                    [10, 3, 7, 0],
                    [3, 0, 7],
                    [7, 3, 6, 11],
                ],
                points: 14,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 41, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 28, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 38, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 33, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 20, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 26, placement: [[3, -2], [2, -1]] },
        ],
        handList: [65, 51, 48],
        moves: [
            {
                dominoIndex: 51,
                placement: [[3, 0], [3, -1]],
                pitchLists: [
                    [2, 11, 5],
                    [0, 3, 7, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 65,
                placement: [[3, -3], [2, -2]],
                pitchLists: [
                    [9, 2, 11, 5],
                    [9, 11, 3, 6],
                    [7, 11, 2],
                    [4, 11, 7],
                ],
                points: 14,
            },
            {
                dominoIndex: 48,
                placement: [[4, -2], [5, -3]],
                pitchLists: [
                    [7, 11, 2, 5],
                    [8, 5, 11],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 15, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 9, placement: [[-2, -2], [-1, -2]] },
        ],
        handList: [35, 54, 20],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [5, 1, 10],
                ],
                points: 3,
            },
            {
                dominoIndex: 54,
                placement: [[-3, 1], [-2, 0]],
                pitchLists: [
                    [6, 1, 10],
                    [1, 9, 6],
                    [9, 5, 0],
                ],
                points: 9,
            },
            {
                dominoIndex: 35,
                placement: [[0, -2], [0, -1]],
                pitchLists: [
                    [0, 9, 3],
                    [3, 8, 0],
                    [3, 1, 9, 6],
                    [8, 5, 1, 10],
                ],
                points: 14,
            },
        ],
        points: 28,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 57, placement: [[3, -2], [3, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[2, -2], [1, -1]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 28, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 61, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 54, placement: [[1, -2], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [1, 5, 8, 9],
                    [1, 9, 4],
                    [2, 9, 5],
                ],
                points: 10,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 35, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 30, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 38, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 6, placement: [[-1, -1], [0, -1]] },
        ],
        handList: [41, 51, 26],
        moves: [
            {
                dominoIndex: 51,
                placement: [[3, 0], [2, 1]],
                pitchLists: [
                    [8, 11, 3, 5],
                    [8, 3, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 26,
                placement: [[1, 2], [2, 2]],
                pitchLists: [
                    [11, 2, 7],
                    [5, 11, 2],
                    [8, 3, 11, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 41,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [4, 11, 2, 7],
                    [0, 4, 7],
                    [8, 11, 2, 4],
                ],
                points: 11,
            },
        ],
        points: 30,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 55, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 59, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 9, placement: [[-1, -1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 22, placement: [[0, 0], [0, -1]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 6, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 25, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 9, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 36, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 10, placement: [[-2, 5], [-3, 5]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-2, 2], [-3, 3]],
                pitchLists: [
                    [5, 9, 2],
                    [5, 3, 9, 0],
                    [1, 0, 5, 9],
                    [9, 3, 6],
                ],
                points: 14,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 40, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 36, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 4, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 18, placement: [[-3, 2], [-4, 2]] },
            { dominoIndex: 49, placement: [[-5, 3], [-5, 2]] },
            { dominoIndex: 5, placement: [[0, -2], [0, -1]] },
        ],
        handList: [16, 29, 48],
        moves: [
            {
                dominoIndex: 16,
                placement: [[0, 1], [1, 0]],
                pitchLists: [
                    [3, 9, 6, 1],
                    [0, 5, 9, 1],
                    [0, 4, 9, 6],
                ],
                points: 12,
            },
            {
                dominoIndex: 29,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [2, 10, 6, 1],
                    [5, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[3, 0], [3, -1]],
                pitchLists: [
                    [2, 8, 5],
                    [5, 1, 10, 8],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 41, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 56, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 48, placement: [[-2, 2], [-1, 1]] },
        ],
        handList: [19, 54, 33],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [1, 9, 6],
                    [1, 11, 8, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [1, 6, 9],
                    [6, 9, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 33,
                placement: [[4, -1], [3, 0]],
                pitchLists: [
                    [1, 6, 9, 3],
                    [3, 6, 11],
                ],
                points: 7,
            },
        ],
        points: 22,
    },
    31: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 3, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 44, placement: [[-2, 2], [-3, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 18, placement: [[-1, 2], [0, 2]] },
        ],
    },
}
