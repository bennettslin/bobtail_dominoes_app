import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 17, placement: [[-2, 0], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 55, placement: [[0, 1], [0, 0]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 39, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 36, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 18, placement: [[-1, -1], [-2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [8, 4, 0],
                    [1, 4, 7],
                    [3, 9, 0, 7],
                ],
                points: 10,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 16, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 25, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 30, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 60, placement: [[0, 3], [1, 3]] },
        ],
        handList: [29, 41, 8],
        moves: [
            {
                dominoIndex: 29,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [6, 2, 11],
                    [10, 2, 7],
                    [9, 2, 6, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 41,
                placement: [[2, 3], [2, 2]],
                pitchLists: [
                    [2, 7, 11, 4],
                    [10, 7, 4],
                    [11, 2, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 8,
                placement: [[2, 4], [1, 4]],
                pitchLists: [
                    [10, 7, 4, 0],
                    [6, 2, 11, 8],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 27, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 31, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 26, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 48, placement: [[2, 0], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[0, 1], [1, 1]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 60, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 50, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 24, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 59, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 19, placement: [[0, 3], [0, 4]] },
        ],
        moves: [
            {
                dominoIndex: 52,
                placement: [[3, 0], [3, -1]],
                pitchLists: [
                    [11, 7, 2, 6],
                    [6, 5, 10, 1],
                    [3, 10, 7],
                    [7, 2, 11, 5],
                ],
                points: 15,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 17, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 47, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 37, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 19, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 16, placement: [[2, -3], [2, -4]] },
            { dominoIndex: 20, placement: [[1, -4], [1, -3]] },
        ],
        handList: [36, 39, 9],
        moves: [
            {
                dominoIndex: 39,
                placement: [[2, -5], [3, -5]],
                pitchLists: [
                    [4, 6, 1, 10],
                    [5, 6, 10, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 9,
                placement: [[3, -7], [3, -6]],
                pitchLists: [
                    [0, 9, 5],
                    [9, 4, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 36,
                placement: [[3, -4], [4, -4]],
                pitchLists: [
                    [1, 6, 3, 9],
                    [0, 9, 5, 3],
                    [3, 1, 7, 10],
                ],
                points: 12,
            },
        ],
        points: 28,
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 3, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 33, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 49, placement: [[-2, 2], [-2, 1]] },
        ],
        handList: [19, 38, 6],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [1, 9, 6],
                    [1, 0, 9, 5],
                    [3, 9, 0],
                ],
                points: 10,
            },
            {
                dominoIndex: 38,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [1, 9, 6, 3],
                    [11, 3, 7],
                    [11, 6, 3, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 6,
                placement: [[0, -3], [1, -3]],
                pitchLists: [
                    [0, 3, 6, 10],
                    [6, 11, 3, 7],
                    [6, 3, 9, 0],
                ],
                points: 12,
            },
        ],
        points: 35,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 15, placement: [[2, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[0, -1], [0, 0]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 29, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 55, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 37, placement: [[1, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [2, 7, 10],
                    [3, 7, 11],
                    [6, 10, 2, 11],
                ],
                points: 10,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 3, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 33, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 59, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 20, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 60, placement: [[2, -4], [1, -3]] },
        ],
        handList: [55, 29, 47],
        moves: [
            {
                dominoIndex: 55,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [6, 10, 3],
                    [7, 11, 3, 6],
                    [3, 10, 7, 1],
                ],
                points: 11,
            },
            {
                dominoIndex: 29,
                placement: [[-2, -1], [-1, -2]],
                pitchLists: [
                    [2, 6, 10, 3],
                    [10, 3, 6, 0],
                ],
                points: 8,
            },
            {
                dominoIndex: 47,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [5, 7, 10, 1],
                    [10, 2, 7],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 33, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 20, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 41, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 3, placement: [[3, 0], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[0, 0], [0, 1]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 36, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 38, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 6, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 54, placement: [[1, -3], [2, -3]] },
        ],
        moves: [
            {
                dominoIndex: 4,
                placement: [[2, -1], [2, -2]],
                pitchLists: [
                    [6, 3, 0],
                    [9, 4, 0],
                    [0, 9, 3],
                    [4, 3, 7, 11],
                ],
                points: 13,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 3, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 63, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 28, placement: [[3, -1], [3, -2]] },
            { dominoIndex: 4, placement: [[5, -2], [4, -2]] },
            { dominoIndex: 17, placement: [[4, -4], [4, -3]] },
            { dominoIndex: 33, placement: [[2, -3], [2, -2]] },
        ],
        handList: [55, 37, 60],
        moves: [
            {
                dominoIndex: 55,
                placement: [[3, -4], [3, -3]],
                pitchLists: [
                    [6, 10, 9, 2],
                    [3, 10, 7],
                    [1, 10, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 37,
                placement: [[5, -5], [4, -5]],
                pitchLists: [
                    [3, 1, 10, 6],
                    [10, 1, 7, 4],
                    [10, 6, 3],
                ],
                points: 11,
            },
            {
                dominoIndex: 60,
                placement: [[5, -7], [5, -6]],
                pitchLists: [
                    [7, 11, 3],
                    [11, 10, 6, 3],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 38, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 54, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 2, placement: [[1, -1], [0, -1]] },
        ],
        handList: [40, 24, 63],
        moves: [
            {
                dominoIndex: 24,
                placement: [[2, 0], [3, -1]],
                pitchLists: [
                    [11, 6, 2],
                    [5, 2, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 63,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [8, 11, 6, 2],
                    [2, 8, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 40,
                placement: [[1, -2], [0, -2]],
                pitchLists: [
                    [4, 0, 6, 9],
                    [4, 2, 8, 11],
                    [6, 2, 11, 7],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 63, placement: [[2, -1], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[0, 0], [0, -1]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 3, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 11, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 54, placement: [[2, 1], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [4, 0, 9, 6],
                    [3, 4, 8, 0],
                ],
                points: 8,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 46, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 25, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 63, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 60, placement: [[2, 1], [2, 0]] },
        ],
        handList: [55, 19, 14],
        moves: [
            {
                dominoIndex: 55,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [6, 2, 11, 7],
                    [6, 10, 3],
                    [5, 6, 10, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 14,
                placement: [[1, 2], [1, 1]],
                pitchLists: [
                    [10, 6, 4, 1],
                    [11, 4, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [1, 11, 4, 7],
                    [5, 9, 1],
                    [6, 10, 3, 1],
                    [9, 3, 6, 11],
                ],
                points: 15,
            },
        ],
        points: 35,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 34, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 27, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 45, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 59, placement: [[-2, 0], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 66, placement: [[0, 0], [1, 0]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 9, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 28, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 26, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 35, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 25, placement: [[-4, 2], [-3, 1]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[-3, 3], [-2, 2]],
                pitchLists: [
                    [2, 6, 9, 1],
                    [10, 8, 5, 1],
                    [2, 9, 5],
                    [9, 0, 5],
                ],
                points: 14,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 19, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 4, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 14, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 16, placement: [[-1, 3], [-1, 2]] },
            { dominoIndex: 49, placement: [[-2, 3], [-3, 3]] },
            { dominoIndex: 22, placement: [[0, 3], [-1, 4]] },
        ],
        handList: [41, 64, 17],
        moves: [
            {
                dominoIndex: 41,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [4, 7, 1],
                    [0, 7, 4],
                    [7, 1, 9, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 64,
                placement: [[-1, -1], [0, -2]],
                pitchLists: [
                    [9, 4, 1],
                    [10, 7, 4],
                    [10, 4, 7, 1],
                ],
                points: 10,
            },
            {
                dominoIndex: 17,
                placement: [[-1, -2], [-2, -1]],
                pitchLists: [
                    [1, 10, 7, 4],
                    [7, 9, 4, 1],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 51, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 42, placement: [[1, 1], [0, 2]] },
        ],
        handList: [18, 20, 9],
        moves: [
            {
                dominoIndex: 20,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [8, 4, 1],
                    [5, 10, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 18,
                placement: [[3, 1], [3, 2]],
                pitchLists: [
                    [4, 10, 1],
                    [5, 1, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 9,
                placement: [[3, -1], [4, -1]],
                pitchLists: [
                    [0, 5, 1, 8],
                    [0, 11, 4, 8],
                    [9, 5, 10, 1],
                ],
                points: 12,
            },
        ],
        points: 26,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 15, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 56, placement: [[-2, 1], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[0, 1], [0, 0]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 4, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 19, placement: [[-2, 4], [-2, 3]] },
            { dominoIndex: 41, placement: [[-3, 1], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 17,
                placement: [[-3, 2], [-3, 3]],
                pitchLists: [
                    [4, 1, 7],
                    [10, 7, 1],
                    [9, 0, 4, 7],
                ],
                points: 10,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 4, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 39, placement: [[-2, -1], [-3, 0]] },
            { dominoIndex: 19, placement: [[-3, 2], [-2, 1]] },
            { dominoIndex: 41, placement: [[-1, 2], [-2, 2]] },
        ],
        handList: [63, 30, 32],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-4, 3], [-4, 2]],
                pitchLists: [
                    [4, 9, 1, 8],
                    [11, 1, 7, 4],
                ],
                points: 8,
            },
            {
                dominoIndex: 30,
                placement: [[-4, 4], [-3, 3]],
                pitchLists: [
                    [11, 8, 2],
                    [7, 11, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 32,
                placement: [[-5, 5], [-4, 5]],
                pitchLists: [
                    [7, 11, 2, 3],
                    [11, 8, 2, 5],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 5, placement: [[3, 1], [3, 2]] },
            { dominoIndex: 42, placement: [[3, -1], [4, -2]] },
            { dominoIndex: 60, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 7, placement: [[1, -1], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[2, 0], [3, 0]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 48, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 8, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 38, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 17, placement: [[-2, -1], [-1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[0, -3], [1, -3]],
                pitchLists: [
                    [4, 3, 8, 0],
                    [4, 7, 1],
                    [8, 11, 5],
                    [8, 3, 0],
                ],
                points: 13,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 19, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 29, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 4, placement: [[-2, 3], [-1, 2]] },
            { dominoIndex: 34, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 59, placement: [[-3, 4], [-2, 4]] },
            { dominoIndex: 45, placement: [[-4, 4], [-3, 3]] },
            { dominoIndex: 2, placement: [[-5, 5], [-5, 4]] },
        ],
        handList: [25, 48, 38],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-3, 5], [-4, 6]],
                pitchLists: [
                    [11, 7, 2],
                    [10, 2, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 38,
                placement: [[-3, 6], [-2, 6]],
                pitchLists: [
                    [6, 3, 11],
                    [11, 7, 2, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[-5, 7], [-5, 6]],
                pitchLists: [
                    [2, 0, 8, 5],
                    [10, 2, 6, 5],
                    [8, 6, 3, 11],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 34, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 20, placement: [[0, 1], [-1, 2]] },
        ],
        handList: [59, 9, 24],
        moves: [
            {
                dominoIndex: 59,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [4, 7, 10],
                    [7, 1, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 24,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [10, 2, 5],
                    [5, 7, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [0, 4, 7, 10],
                    [3, 9, 0],
                    [9, 10, 2, 5],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 54, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 43, placement: [[1, 2], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 3, placement: [[1, 0], [2, 0]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 32, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 54, placement: [[-1, 0], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [10, 7, 3],
                    [7, 11, 5, 2],
                    [10, 2, 6],
                ],
                points: 10,
            },
        ],
    },
}
