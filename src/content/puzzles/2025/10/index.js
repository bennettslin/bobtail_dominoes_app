import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 37, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 21, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 20, placement: [[1, 1], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 47,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [1, 7, 10, 5],
                    [10, 1, 5],
                    [11, 4, 7],
                    [3, 10, 7],
                ],
                points: 13,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 21, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 36, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 49, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 14, placement: [[-1, 0], [-2, 1]] },
        ],
        handList: [6, 30, 41],
        moves: [
            {
                dominoIndex: 6,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [3, 9, 0],
                    [6, 0, 9],
                    [6, 9, 1, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 30,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [6, 2, 11],
                    [6, 0, 9, 2],
                    [5, 2, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 41,
                placement: [[-2, 3], [-1, 3]],
                pitchLists: [
                    [9, 6, 1, 4],
                    [5, 2, 11, 7],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 56, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 38, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 58, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 50, placement: [[-1, 0], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[0, 0], [-1, 1]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 24, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 48, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 28, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 21, placement: [[1, -1], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 5,
                placement: [[1, 2], [0, 2]],
                pitchLists: [
                    [8, 5, 0],
                    [1, 5, 9, 0],
                    [9, 2, 5],
                    [2, 9, 5],
                ],
                points: 13,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 49, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 54, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 3, placement: [[0, -1], [1, -2]] },
            { dominoIndex: 15, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 29, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 6, placement: [[-2, 4], [-1, 4]] },
        ],
        handList: [41, 36, 16],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [1, 4, 7],
                    [4, 5, 9, 0],
                    [10, 2, 5, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 36,
                placement: [[0, 4], [1, 3]],
                pitchLists: [
                    [0, 6, 3],
                    [1, 4, 7, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[-1, 5], [-2, 6]],
                pitchLists: [
                    [2, 9, 6, 1],
                    [9, 3, 1, 6],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 49, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 45, placement: [[-3, -1], [-3, 0]] },
        ],
        handList: [20, 16, 17],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [4, 1, 10],
                    [1, 5, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 16,
                placement: [[0, -2], [0, -1]],
                pitchLists: [
                    [1, 6, 9],
                    [1, 10, 5],
                    [4, 1, 10, 6],
                    [6, 2, 9],
                ],
                points: 13,
            },
            {
                dominoIndex: 17,
                placement: [[-3, 2], [-3, 1]],
                pitchLists: [
                    [4, 11, 7, 1],
                    [6, 2, 9, 1],
                    [1, 10, 5, 7],
                ],
                points: 12,
            },
        ],
        points: 33,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 34, placement: [[0, 1], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[0, 0], [-1, 1]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 63, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 42, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 60, placement: [[-1, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-2, 1], [-2, 2]],
                pitchLists: [
                    [8, 2, 11],
                    [5, 11, 2],
                    [2, 7, 11],
                ],
                points: 9,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 56, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 8, placement: [[1, -4], [0, -3]] },
            { dominoIndex: 38, placement: [[-1, -2], [-2, -2]] },
            { dominoIndex: 26, placement: [[2, -3], [1, -2]] },
        ],
        handList: [54, 33, 65],
        moves: [
            {
                dominoIndex: 65,
                placement: [[-2, 2], [-2, 3]],
                pitchLists: [
                    [3, 0, 9],
                ],
                points: 3,
            },
            {
                dominoIndex: 33,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [11, 6, 3],
                    [6, 3, 0, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [3, 9, 6, 0],
                    [2, 7, 11, 6],
                    [9, 11, 6, 3],
                ],
                points: 12,
            },
        ],
        points: 24,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 32, placement: [[1, 0], [1, -1]] },
            { dominoIndex: 4, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 36, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 51, placement: [[-1, 3], [-2, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 7, placement: [[0, 0], [0, 1]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 9, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 5, placement: [[-1, -1], [0, -2]] },
            { dominoIndex: 49, placement: [[-2, -1], [-1, -2]] },
            { dominoIndex: 14, placement: [[-2, -2], [-1, -3]] },
            { dominoIndex: 20, placement: [[-3, 1], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-3, -2], [-3, -1]],
                pitchLists: [
                    [4, 1, 9, 5],
                    [4, 8, 0, 1],
                    [8, 5, 0],
                    [4, 1, 8],
                ],
                points: 14,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 49, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 25, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 24, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 54, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 5, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 19, placement: [[0, -3], [-1, -3]] },
            { dominoIndex: 63, placement: [[-3, 1], [-2, 1]] },
        ],
        handList: [38, 27, 46],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-4, 1], [-3, 0]],
                pitchLists: [
                    [3, 8, 11, 5],
                    [11, 5, 2, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 27,
                placement: [[-3, -1], [-2, -1]],
                pitchLists: [
                    [2, 11, 8],
                    [8, 5, 11],
                    [8, 11, 3],
                ],
                points: 9,
            },
            {
                dominoIndex: 46,
                placement: [[-2, -3], [-3, -2]],
                pitchLists: [
                    [5, 9, 1, 6],
                    [6, 2, 11, 8],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 54, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 19, placement: [[-1, 0], [-2, 1]] },
        ],
        handList: [42, 25, 14],
        moves: [
            {
                dominoIndex: 25,
                placement: [[2, 0], [3, -1]],
                pitchLists: [
                    [1, 10, 6, 2],
                    [6, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [10, 4, 1],
                    [6, 2, 9, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[1, -2], [0, -1]],
                pitchLists: [
                    [4, 0, 6, 9],
                    [4, 8, 1, 9],
                    [8, 10, 4, 1],
                ],
                points: 12,
            },
        ],
        points: 28,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 12, placement: [[3, -3], [3, -2]] },
            { dominoIndex: 8, placement: [[2, -1], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[2, -2], [1, -1]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 43, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 42, placement: [[2, -4], [2, -3]] },
            { dominoIndex: 17, placement: [[2, -2], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [0, 4, 7],
                    [4, 10, 7],
                    [1, 10, 4],
                ],
                points: 9,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 43, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 16, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 48, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 42, placement: [[-1, -1], [-2, 0]] },
        ],
        handList: [19, 55],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [4, 9, 1],
                    [4, 1, 9],
                    [1, 4, 8],
                    [8, 1, 4, 9],
                ],
                points: 13,
            },
            {
                dominoIndex: 55,
                placement: [[2, -1], [2, -2]],
                pitchLists: [
                    [4, 9, 1, 6],
                    [6, 9, 1],
                    [10, 1, 4, 8],
                ],
                points: 11,
            },
        ],
        points: 24,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 45, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 63, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 4, placement: [[2, 1], [1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 34, placement: [[-2, 2], [-1, 1]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 14, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 41, placement: [[2, 1], [2, 0]] },
            { dominoIndex: 59, placement: [[3, -2], [2, -2]] },
            { dominoIndex: 28, placement: [[1, -2], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 50,
                placement: [[0, 1], [1, 0]],
                pitchLists: [
                    [9, 2, 5],
                    [7, 1, 10, 5],
                    [2, 10, 7],
                    [2, 7, 10],
                ],
                points: 13,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 63, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 1, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 35, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 56, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 38, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 36, placement: [[-1, -2], [-2, -2]] },
            { dominoIndex: 59, placement: [[2, -3], [1, -3]] },
        ],
        handList: [55, 25, 3],
        moves: [
            {
                dominoIndex: 25,
                placement: [[0, -4], [-1, -3]],
                pitchLists: [
                    [2, 6, 9],
                    [6, 3, 11, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[-2, -1], [-3, -1]],
                pitchLists: [
                    [10, 6, 11, 3],
                    [9, 6, 3],
                    [2, 6, 9, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 3,
                placement: [[-2, -3], [-3, -3]],
                pitchLists: [
                    [3, 0, 6],
                    [0, 9, 6, 3],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 13, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 33, placement: [[3, -1], [2, 0]] },
        ],
        handList: [10, 35, 59],
        moves: [
            {
                dominoIndex: 10,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [3, 6, 0],
                    [1, 6, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 59,
                placement: [[1, 2], [0, 2]],
                pitchLists: [
                    [3, 0, 7],
                    [3, 6, 0, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 35,
                placement: [[2, 2], [1, 3]],
                pitchLists: [
                    [10, 7, 3],
                    [1, 6, 10, 3],
                    [3, 0, 7, 8],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 3, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 40, placement: [[-1, 1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[0, 1], [0, 2]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 33, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 3, placement: [[1, 1], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [3, 9, 0],
                    [6, 9, 0],
                    [0, 9, 3],
                ],
                points: 9,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 44, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 20, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 48, placement: [[2, 1], [3, 0]] },
            { dominoIndex: 41, placement: [[0, 2], [0, 1]] },
        ],
        handList: [17, 45, 50],
        moves: [
            {
                dominoIndex: 17,
                placement: [[1, 2], [2, 2]],
                pitchLists: [
                    [4, 1, 7],
                    [8, 5, 1],
                    [1, 10, 5, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 45,
                placement: [[3, 1], [3, 2]],
                pitchLists: [
                    [8, 4, 11],
                    [4, 1, 7, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 50,
                placement: [[1, 4], [1, 3]],
                pitchLists: [
                    [1, 10, 5],
                    [4, 7, 10],
                ],
                points: 6,
            },
        ],
        points: 25,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 45, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 15, placement: [[-2, -1], [-1, -1]] },
            { dominoIndex: 58, placement: [[2, -3], [2, -4]] },
        ],
        missingMoves: [
            { dominoIndex: 27, placement: [[0, -2], [0, -1]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 34, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 7, placement: [[-3, 0], [-3, 1]] },
            { dominoIndex: 45, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 55, placement: [[-2, -1], [-3, -1]] },
            { dominoIndex: 36, placement: [[-4, 1], [-5, 2]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [10, 6, 11, 2],
                    [2, 10, 5],
                    [2, 7, 11, 4],
                    [11, 3, 7],
                ],
                points: 14,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 60, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 44, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 42, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 24, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 11, placement: [[-3, 0], [-3, 1]] },
            { dominoIndex: 37, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 41, placement: [[1, 2], [0, 2]] },
        ],
        handList: [7, 19, 18],
        moves: [
            {
                dominoIndex: 7,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [4, 7, 0],
                    [0, 3, 7],
                    [2, 5, 10, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 19,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [1, 4, 10],
                    [9, 1, 5, 4],
                    [9, 4, 7, 0],
                ],
                points: 11,
            },
            {
                dominoIndex: 18,
                placement: [[4, -3], [4, -2]],
                pitchLists: [
                    [1, 10, 7],
                    [1, 4, 10, 8],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 54, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 28, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 24, placement: [[-2, 0], [-2, -1]] },
        ],
        handList: [9, 29, 13],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-4, 1], [-3, 0]],
                pitchLists: [
                    [5, 9, 0],
                    [9, 2, 6, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[-1, -2], [-1, -1]],
                pitchLists: [
                    [2, 10, 6],
                    [2, 5, 9, 0],
                    [5, 10, 1],
                ],
                points: 10,
            },
            {
                dominoIndex: 13,
                placement: [[-2, -2], [-1, -3]],
                pitchLists: [
                    [1, 5, 2, 9],
                    [3, 2, 10, 6],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 8, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 33, placement: [[1, -1], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[1, 0], [0, 0]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 45, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 24, placement: [[2, -3], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 27,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [11, 2, 8],
                    [5, 2, 9],
                    [2, 5, 8],
                ],
                points: 9,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 14, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 41, placement: [[-1, -3], [0, -3]] },
            { dominoIndex: 59, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 46, placement: [[-1, -1], [-1, 0]] },
        ],
        handList: [19, 45, 54],
        moves: [
            {
                dominoIndex: 19,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [4, 7, 10, 1],
                    [1, 9, 4, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 45,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [1, 9, 4],
                    [7, 1, 4, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[3, -2], [4, -3]],
                pitchLists: [
                    [1, 9, 4, 6],
                    [9, 6, 11, 2],
                ],
                points: 8,
            },
        ],
        points: 25,
    },
    31: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 58, placement: [[3, -1], [2, -1]] },
            { dominoIndex: 30, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 38, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 2, placement: [[0, 3], [-1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[0, 1], [-1, 2]] },
        ],
    },
}
