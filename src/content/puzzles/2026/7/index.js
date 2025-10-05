import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 58, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 16, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 19, placement: [[-2, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 44,
                placement: [[-1, -2], [-2, -1]],
                pitchLists: [
                    [4, 1, 9],
                    [7, 4, 10],
                    [10, 1, 4],
                    [10, 6, 1],
                ],
                points: 12,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 33, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 35, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 63, placement: [[2, -3], [1, -3]] },
            { dominoIndex: 31, placement: [[3, -3], [3, -4]] },
            { dominoIndex: 17, placement: [[2, -4], [1, -4]] },
        ],
        handList: [58, 45, 41],
        moves: [
            {
                dominoIndex: 58,
                placement: [[4, -3], [4, -4]],
                pitchLists: [
                    [11, 8, 3, 7],
                    [7, 1, 4, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 45,
                placement: [[2, -5], [3, -6]],
                pitchLists: [
                    [4, 1, 8],
                    [11, 4, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 41,
                placement: [[4, -6], [3, -5]],
                pitchLists: [
                    [4, 7, 1, 11],
                    [11, 7, 4, 3],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 55, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 65, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 7, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 33, placement: [[1, -3], [2, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 22, placement: [[0, 0], [-1, 0]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 63, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 8, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 15, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 28, placement: [[2, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 5,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [0, 8, 5, 1],
                    [8, 5, 0],
                    [5, 2, 9],
                    [0, 5, 8],
                ],
                points: 13,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 51, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 25, placement: [[-1, 3], [-1, 4]] },
            { dominoIndex: 48, placement: [[-3, 3], [-2, 3]] },
            { dominoIndex: 27, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 49, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 18, placement: [[2, -2], [1, -2]] },
        ],
        handList: [44, 21, 59],
        moves: [
            {
                dominoIndex: 44,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [4, 8, 1],
                    [4, 9, 0, 5],
                    [10, 8, 5, 2],
                ],
                points: 11,
            },
            {
                dominoIndex: 21,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [1, 9, 5],
                    [10, 4, 1],
                    [11, 4, 8, 1],
                ],
                points: 10,
            },
            {
                dominoIndex: 59,
                placement: [[-2, 0], [-2, -1]],
                pitchLists: [
                    [10, 7, 2],
                    [10, 4, 1, 7],
                    [10, 1, 9, 5],
                ],
                points: 11,
            },
        ],
        points: 34,
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 24, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 60, placement: [[-2, 3], [-3, 4]] },
            { dominoIndex: 27, placement: [[1, 2], [0, 2]] },
        ],
        handList: [30, 14, 42],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-2, 1], [-2, 2]],
                pitchLists: [
                    [2, 11, 7],
                    [11, 5, 8, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[-1, 3], [-2, 4]],
                pitchLists: [
                    [8, 1, 4],
                    [2, 11, 7, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[-3, 3], [-4, 4]],
                pitchLists: [
                    [4, 7, 1],
                    [11, 4, 8],
                    [8, 11, 4],
                ],
                points: 9,
            },
        ],
        points: 25,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 6, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 20, placement: [[-2, 3], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[0, 2], [0, 3]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 60, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 48, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 63, placement: [[0, 1], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [10, 8, 4, 1],
                    [11, 5, 8, 1],
                    [7, 11, 4],
                ],
                points: 11,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 43, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 54, placement: [[-3, 3], [-3, 4]] },
            { dominoIndex: 5, placement: [[-3, 2], [-4, 2]] },
            { dominoIndex: 15, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 3, placement: [[-4, 5], [-3, 5]] },
        ],
        handList: [20, 25, 44],
        moves: [
            {
                dominoIndex: 20,
                placement: [[0, 3], [-1, 3]],
                pitchLists: [
                    [6, 5, 10, 1],
                    [4, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [2, 9, 5],
                    [9, 6, 2, 0],
                    [6, 4, 1, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 44,
                placement: [[-3, 0], [-2, 0]],
                pitchLists: [
                    [4, 10, 6, 1],
                    [10, 2, 9, 5],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 12, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 19, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 42, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 39, placement: [[4, -2], [4, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 16, placement: [[3, -1], [2, -1]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 59, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 37, placement: [[0, 1], [1, 0]] },
            { dominoIndex: 33, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 30, placement: [[-1, -2], [-2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[1, -2], [1, -1]],
                pitchLists: [
                    [11, 2, 7, 3],
                    [3, 7, 10],
                    [3, 10, 6],
                    [3, 10, 7],
                    [7, 1, 10],
                ],
                points: 16,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 55, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 24, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 25, placement: [[2, 1], [2, 0]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 56, placement: [[-2, 3], [-3, 3]] },
            { dominoIndex: 20, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 51, placement: [[1, 3], [2, 3]] },
        ],
        handList: [35, 17, 59],
        moves: [
            {
                dominoIndex: 35,
                placement: [[4, 1], [3, 2]],
                pitchLists: [
                    [3, 8, 11],
                    [5, 1, 10, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 17,
                placement: [[0, 4], [1, 4]],
                pitchLists: [
                    [10, 5, 1],
                    [10, 1, 5, 7],
                    [3, 8, 11, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 59,
                placement: [[-1, 5], [-1, 4]],
                pitchLists: [
                    [2, 10, 7],
                    [10, 5, 1, 7],
                    [10, 1, 7],
                ],
                points: 10,
            },
        ],
        points: 30,
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 14, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 33, placement: [[0, 1], [0, 2]] },
        ],
        handList: [15, 9, 7],
        moves: [
            {
                dominoIndex: 15,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [1, 10, 3, 6],
                    [5, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-2, 1], [-2, 2]],
                pitchLists: [
                    [4, 0, 9],
                    [5, 1, 8, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 7,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [9, 0, 6],
                    [3, 0, 7],
                    [4, 0, 9, 7],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 56, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 44, placement: [[2, -1], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 34, placement: [[0, 0], [0, -1]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 48, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 35, placement: [[-1, 3], [-2, 4]] },
            { dominoIndex: 14, placement: [[-2, 2], [-2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-3, 3], [-4, 3]],
                pitchLists: [
                    [11, 8, 4, 3],
                    [9, 5, 1, 8],
                ],
                points: 8,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 34, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 20, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 44, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 15, placement: [[2, -4], [2, -3]] },
            { dominoIndex: 7, placement: [[3, -1], [2, -1]] },
        ],
        handList: [42, 54, 37],
        moves: [
            {
                dominoIndex: 42,
                placement: [[0, -4], [1, -4]],
                pitchLists: [
                    [4, 8, 1],
                    [8, 10, 1, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[3, -5], [3, -4]],
                pitchLists: [
                    [6, 1, 10, 4],
                    [4, 8, 1, 9],
                    [9, 5, 1],
                ],
                points: 11,
            },
            {
                dominoIndex: 37,
                placement: [[5, -5], [4, -5]],
                pitchLists: [
                    [6, 10, 3],
                    [10, 9, 5, 1],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 9, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 21, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 20, placement: [[2, -1], [3, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[0, 0], [1, 0]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 41, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 5, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 8, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 17, placement: [[-2, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 38,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [7, 11, 3],
                    [7, 3, 0],
                    [5, 11, 3, 8],
                    [4, 7, 11],
                ],
                points: 13,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 24, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 7, placement: [[-3, 2], [-3, 3]] },
            { dominoIndex: 35, placement: [[-3, 1], [-4, 2]] },
            { dominoIndex: 45, placement: [[-5, 2], [-5, 3]] },
            { dominoIndex: 9, placement: [[-4, 1], [-3, 0]] },
            { dominoIndex: 46, placement: [[-6, 3], [-6, 4]] },
        ],
        handList: [47, 27, 51],
        moves: [
            {
                dominoIndex: 47,
                placement: [[-4, 0], [-5, 1]],
                pitchLists: [
                    [5, 0, 8],
                    [7, 0, 3],
                    [7, 4, 11],
                ],
                points: 9,
            },
            {
                dominoIndex: 27,
                placement: [[-5, 0], [-6, 1]],
                pitchLists: [
                    [2, 5, 9],
                    [2, 7, 4, 11],
                    [8, 7, 0, 3],
                ],
                points: 11,
            },
            {
                dominoIndex: 51,
                placement: [[-6, -1], [-6, 0]],
                pitchLists: [
                    [5, 11, 8],
                    [11, 2, 5, 9],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 33, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 54, placement: [[-1, -1], [-1, 0]] },
        ],
        handList: [18, 15, 3],
        moves: [
            {
                dominoIndex: 18,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [6, 9, 1],
                    [4, 0, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [8, 5, 1],
                    [6, 9, 1, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[-3, 2], [-2, 1]],
                pitchLists: [
                    [0, 8, 5, 1],
                    [9, 3, 0],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 42, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 9, placement: [[-2, 2], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 16, placement: [[-1, 0], [0, 0]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 52, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 28, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 3, placement: [[2, -3], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 6,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [9, 0, 6],
                    [3, 0, 7],
                    [0, 3, 6],
                ],
                points: 9,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 34, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 37, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 16, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 20, placement: [[1, 1], [0, 2]] },
        ],
        handList: [5, 60, 42],
        moves: [
            {
                dominoIndex: 60,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [3, 11, 7, 10],
                    [3, 7, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 5,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [3, 9, 0, 5],
                    [0, 3, 7, 11],
                    [5, 7, 1, 10],
                ],
                points: 12,
            },
            {
                dominoIndex: 42,
                placement: [[2, 1], [2, 2]],
                pitchLists: [
                    [7, 1, 4],
                    [0, 7, 4, 8],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 28, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 50, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 20, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 6, placement: [[1, 2], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[1, 0], [0, 0]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 27, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 16, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 49, placement: [[-2, 4], [-2, 3]] },
            { dominoIndex: 19, placement: [[-2, 5], [-3, 5]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-3, 3], [-2, 2]],
                pitchLists: [
                    [4, 9, 1, 6],
                    [11, 3, 8, 4],
                    [8, 9, 5, 1],
                ],
                points: 12,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 41, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 44, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 7, placement: [[-1, -1], [-1, -2]] },
            { dominoIndex: 20, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 36, placement: [[-3, 1], [-2, 0]] },
            { dominoIndex: 54, placement: [[0, -2], [0, -3]] },
        ],
        handList: [59, 60, 45],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-3, 0], [-3, -1]],
                pitchLists: [
                    [7, 9, 4, 1],
                    [10, 7, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [3, 7, 10],
                    [3, 4, 7, 11],
                    [10, 7, 3, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 45,
                placement: [[-5, 2], [-4, 1]],
                pitchLists: [
                    [7, 11, 4],
                    [11, 3, 7, 10],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 64, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 7, placement: [[0, 2], [0, 3]] },
        ],
        handList: [42, 30, 16],
        moves: [
            {
                dominoIndex: 42,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [8, 4, 0],
                    [1, 4, 9, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[-2, 3], [-1, 3]],
                pitchLists: [
                    [2, 11, 7],
                    [8, 4, 0, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[1, 2], [1, 3]],
                pitchLists: [
                    [9, 4, 1, 6],
                    [2, 11, 7, 6],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 38, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 42, placement: [[-1, 1], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 18, placement: [[0, 1], [0, 0]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 55, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 11, placement: [[0, 1], [1, 0]] },
            { dominoIndex: 9, placement: [[-1, -1], [-2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 36,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [3, 9, 0],
                    [10, 6, 3],
                    [0, 6, 9],
                ],
                points: 9,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 49, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 26, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 25, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 66, placement: [[1, 2], [1, 1]] },
        ],
        handList: [60, 3, 33],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-2, 4], [-2, 3]],
                pitchLists: [
                    [2, 11, 7],
                    [11, 6, 2, 7],
                    [7, 11, 2],
                ],
                points: 10,
            },
            {
                dominoIndex: 3,
                placement: [[0, 4], [0, 3]],
                pitchLists: [
                    [6, 3, 0],
                    [7, 11, 2, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[3, 1], [2, 1]],
                pitchLists: [
                    [11, 6, 3],
                    [6, 10, 3],
                ],
                points: 6,
            },
        ],
        points: 25,
    },
    31: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 45, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 33, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 8, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 28, placement: [[1, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[1, 0], [2, 0]] },
        ],
    },
}
