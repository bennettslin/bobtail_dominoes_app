import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 48, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 50, placement: [[3, -2], [2, -2]] },
            { dominoIndex: 25, placement: [[-1, 1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 16, placement: [[1, -2], [1, -1]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 16, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 30, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 47, placement: [[2, -2], [1, -2]] },
            { dominoIndex: 41, placement: [[3, -1], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 29,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [2, 10, 7, 4],
                    [2, 7, 11],
                    [7, 2, 10],
                    [10, 7, 2],
                    [10, 1, 6],
                ],
                points: 16,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 30, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 27, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 38, placement: [[4, -2], [3, -2]] },
            { dominoIndex: 56, placement: [[5, -2], [4, -1]] },
            { dominoIndex: 25, placement: [[3, -3], [4, -3]] },
            { dominoIndex: 64, placement: [[5, -3], [6, -3]] },
            { dominoIndex: 33, placement: [[6, -5], [6, -4]] },
        ],
        handList: [50, 8, 16],
        moves: [
            {
                dominoIndex: 8,
                placement: [[7, -5], [8, -5]],
                pitchLists: [
                    [3, 0, 8],
                    [0, 6, 9, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 50,
                placement: [[5, -5], [4, -4]],
                pitchLists: [
                    [5, 3, 0, 8],
                    [5, 10, 2, 8],
                    [10, 6, 3, 11],
                ],
                points: 12,
            },
            {
                dominoIndex: 16,
                placement: [[2, -4], [3, -4]],
                pitchLists: [
                    [1, 6, 10],
                    [6, 2, 11],
                ],
                points: 6,
            },
        ],
        points: 27,
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 63, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 15, placement: [[-1, -1], [0, -1]] },
        ],
        handList: [20, 41, 59],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [5, 10, 1],
                    [1, 10, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 59,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [10, 2, 7],
                    [1, 4, 10],
                    [5, 2, 10],
                ],
                points: 9,
            },
            {
                dominoIndex: 41,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [4, 10, 2, 7],
                    [1, 4, 7],
                    [7, 1, 4, 10],
                ],
                points: 11,
            },
        ],
        points: 28,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 55, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 15, placement: [[0, 2], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 9, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 15, placement: [[2, -3], [3, -3]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, -2], [0, -2]],
                pitchLists: [
                    [7, 4, 0],
                    [1, 4, 10],
                    [7, 10, 4],
                ],
                points: 9,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 20, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 44, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 15, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 57, placement: [[3, 0], [2, 1]] },
        ],
        handList: [55, 49, 16],
        moves: [
            {
                dominoIndex: 16,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [1, 10, 4],
                    [6, 10, 1, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[-1, -1], [0, -2]],
                pitchLists: [
                    [6, 1, 10, 4],
                    [10, 6, 1],
                    [10, 1, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 49,
                placement: [[3, -2], [4, -3]],
                pitchLists: [
                    [10, 6, 1, 5],
                    [9, 5, 4, 1],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 27, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 60, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 20, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 46, placement: [[1, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 32, placement: [[0, 0], [0, 1]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 55, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 14, placement: [[-4, 2], [-3, 2]] },
            { dominoIndex: 25, placement: [[-2, 0], [-2, -1]] },
            { dominoIndex: 37, placement: [[-1, -2], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 26,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [3, 10, 6, 2],
                    [11, 2, 7],
                    [1, 4, 7],
                    [6, 2, 10, 7],
                ],
                points: 14,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 8, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 33, placement: [[-1, -1], [0, -2]] },
            { dominoIndex: 5, placement: [[-2, 0], [-2, -1]] },
            { dominoIndex: 63, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 55, placement: [[-3, 0], [-3, 1]] },
            { dominoIndex: 17, placement: [[-3, 2], [-2, 2]] },
        ],
        handList: [4, 35, 65],
        moves: [
            {
                dominoIndex: 4,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [9, 4, 0],
                    [1, 7, 4],
                    [3, 8, 11, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 35,
                placement: [[-2, 4], [-3, 4]],
                pitchLists: [
                    [7, 0, 3],
                    [9, 4, 0, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 65,
                placement: [[-2, 5], [-1, 4]],
                pitchLists: [
                    [7, 0, 3, 9],
                    [8, 3, 11],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 51, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 40, placement: [[-2, 1], [-1, 1]] },
        ],
        handList: [25, 49, 29],
        moves: [
            {
                dominoIndex: 25,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [10, 6, 2],
                    [5, 11, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 49,
                placement: [[3, 0], [2, 1]],
                pitchLists: [
                    [10, 6, 2, 5],
                    [5, 11, 2, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 29,
                placement: [[1, 2], [1, 1]],
                pitchLists: [
                    [1, 6, 10, 2],
                    [5, 9, 2],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 27, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 30, placement: [[3, -2], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 48, placement: [[1, -2], [1, -1]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 18, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 45, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 19, placement: [[0, 1], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [2, 5, 9, 11],
                    [1, 6, 10, 2],
                    [8, 1, 5],
                ],
                points: 11,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 14, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 53, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 36, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 52, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 45, placement: [[-2, 1], [-2, 0]] },
        ],
        handList: [33, 60, 37],
        moves: [
            {
                dominoIndex: 33,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [0, 10, 6, 3],
                    [9, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [7, 11, 3],
                    [11, 4, 7],
                    [9, 3, 6, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 37,
                placement: [[-3, 1], [-3, 2]],
                pitchLists: [
                    [6, 11, 3],
                    [10, 7, 11, 3],
                    [0, 7, 4, 10],
                ],
                points: 11,
            },
        ],
        points: 30,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 63, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 42, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 33, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 37, placement: [[-2, -1], [-1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[1, -1], [2, -2]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 63, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 4, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 38, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 60, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 14, placement: [[3, -1], [2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 35,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [3, 8, 11, 4],
                    [8, 3, 0],
                    [11, 3, 8],
                    [8, 0, 4, 7],
                ],
                points: 14,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 50, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 15, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 43, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 29, placement: [[3, 1], [2, 1]] },
            { dominoIndex: 63, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 49, placement: [[3, 0], [4, 0]] },
        ],
        handList: [53, 8, 40],
        moves: [
            {
                dominoIndex: 53,
                placement: [[2, 2], [3, 2]],
                pitchLists: [
                    [5, 1, 10, 6],
                    [9, 2, 6],
                    [10, 5, 2, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 8,
                placement: [[5, -1], [5, 0]],
                pitchLists: [
                    [0, 9, 2, 6],
                    [1, 5, 9, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 40,
                placement: [[5, -2], [4, -2]],
                pitchLists: [
                    [4, 0, 8],
                    [6, 10, 1, 5],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 58, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 6, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 48, placement: [[-1, 2], [-2, 2]] },
        ],
        handList: [20, 30, 12],
        moves: [
            {
                dominoIndex: 20,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [8, 5, 0, 1],
                    [10, 1, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[-1, 4], [-1, 3]],
                pitchLists: [
                    [7, 5, 11, 2],
                    [10, 1, 6, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 12,
                placement: [[-3, 4], [-2, 3]],
                pitchLists: [
                    [9, 5, 2, 1],
                    [2, 11, 6],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 15, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 42, placement: [[-2, 0], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 64, placement: [[-1, -1], [0, -1]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 42, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 36, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 30, placement: [[2, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [3, 0, 7],
                    [9, 0, 3],
                    [3, 7, 4, 11],
                ],
                points: 10,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 36, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 15, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 54, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 12, placement: [[-4, 2], [-3, 2]] },
        ],
        handList: [10, 33, 43],
        moves: [
            {
                dominoIndex: 10,
                placement: [[-2, 3], [-3, 3]],
                pitchLists: [
                    [1, 5, 9, 0],
                    [3, 9, 6, 0],
                ],
                points: 8,
            },
            {
                dominoIndex: 43,
                placement: [[-4, 0], [-4, 1]],
                pitchLists: [
                    [4, 9, 1],
                ],
                points: 3,
            },
            {
                dominoIndex: 33,
                placement: [[-5, 3], [-4, 3]],
                pitchLists: [
                    [3, 6, 10, 0],
                    [4, 9, 1, 6],
                    [10, 5, 2, 6],
                ],
                points: 12,
            },
        ],
        points: 25,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 48, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 3, placement: [[-1, -1], [-2, -1]] },
            { dominoIndex: 59, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 9, placement: [[-1, 1], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[0, -2], [0, -1]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 36, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 26, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 37, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 55, placement: [[2, -1], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [6, 11, 2],
                    [3, 10, 7, 2],
                    [3, 11, 7],
                    [10, 6, 2, 11],
                ],
                points: 14,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 47, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 33, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 36, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 9, placement: [[-2, 4], [-2, 3]] },
            { dominoIndex: 25, placement: [[-3, 4], [-3, 5]] },
            { dominoIndex: 20, placement: [[-5, 5], [-4, 5]] },
        ],
        handList: [50, 24, 48],
        moves: [
            {
                dominoIndex: 50,
                placement: [[-2, 5], [-3, 6]],
                pitchLists: [
                    [1, 10, 6, 5],
                    [3, 9, 0, 5],
                    [2, 6, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 24,
                placement: [[-4, 7], [-3, 7]],
                pitchLists: [
                    [5, 10, 2],
                    [2, 6, 10, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 48,
                placement: [[0, 4], [-1, 4]],
                pitchLists: [
                    [2, 0, 8, 5],
                    [11, 6, 3, 8],
                    [8, 5, 10, 2],
                ],
                points: 12,
            },
        ],
        points: 32,
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 38, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 57, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 33, placement: [[-2, 2], [-1, 2]] },
        ],
        handList: [9, 7, 43],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-2, 3], [-2, 4]],
                pitchLists: [
                    [3, 0, 9],
                    [10, 3, 6, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 7,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [7, 0, 3],
                    [8, 0, 3],
                    [7, 3, 0, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 43,
                placement: [[-3, 3], [-3, 2]],
                pitchLists: [
                    [8, 0, 3, 4],
                    [9, 3, 6, 11],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 63, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 34, placement: [[3, -3], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 3, placement: [[1, -1], [2, -1]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 66, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 60, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 3, placement: [[1, 1], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [4, 1, 7],
                    [10, 7, 1],
                    [4, 7, 11],
                ],
                points: 9,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 15, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 18, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 43, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 24, placement: [[3, -1], [2, 0]] },
        ],
        handList: [54, 14, 51],
        moves: [
            {
                dominoIndex: 54,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [4, 9, 1, 6],
                    [6, 9, 1],
                    [5, 9, 2],
                    [1, 9, 5],
                ],
                points: 13,
            },
            {
                dominoIndex: 14,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [1, 5, 9, 2],
                    [4, 1, 9],
                    [9, 1, 4],
                    [4, 9, 1, 5],
                ],
                points: 14,
            },
            {
                dominoIndex: 51,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [11, 5, 8],
                    [9, 1, 4, 5],
                ],
                points: 7,
            },
        ],
        points: 36,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 22, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 43, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 12, placement: [[-2, 3], [-1, 3]] },
            { dominoIndex: 56, placement: [[1, -2], [0, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 51, placement: [[0, 0], [-1, 0]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 14, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 18, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 55, placement: [[3, 1], [2, 1]] },
            { dominoIndex: 16, placement: [[2, -1], [2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [5, 1, 10, 6],
                    [2, 5, 9, 1],
                    [1, 9, 5],
                    [6, 1, 9],
                ],
                points: 14,
            },
        ],
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 29, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 45, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 48, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 42, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 30, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 24, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 56, placement: [[-3, 1], [-2, 1]] },
        ],
        handList: [27, 59, 50],
        moves: [
            {
                dominoIndex: 27,
                placement: [[1, -3], [0, -2]],
                pitchLists: [
                    [2, 8, 5],
                    [8, 2, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 50,
                placement: [[0, -3], [-1, -3]],
                pitchLists: [
                    [10, 5, 2],
                    [5, 8, 2, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [10, 5, 2, 7],
                    [10, 7, 4],
                    [10, 2, 8, 5],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
}
