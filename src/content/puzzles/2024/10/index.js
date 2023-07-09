import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 41, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 30, placement: [[-1, -1], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[0, 0], [1, -1]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 19, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 55, placement: [[1, 0], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[2, 0], [2, 1]],
                pitchLists: [
                    [0, 6, 3],
                    [10, 3, 6],
                    [5, 1, 9, 6],
                ],
                points: 10,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 34, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 44, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 38, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 24, placement: [[2, -1], [3, -2]] },
        ],
        handList: [60, 28, 8],
        moves: [
            {
                dominoIndex: 28,
                placement: [[0, -3], [0, -2]],
                pitchLists: [
                    [2, 9, 10, 6],
                ],
                points: 4,
            },
            {
                dominoIndex: 8,
                placement: [[-1, -2], [-1, -3]],
                pitchLists: [
                    [0, 9, 3],
                    [8, 0, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 60,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [3, 10, 11, 7],
                    [11, 6, 10, 3],
                    [8, 0, 4, 11],
                ],
                points: 12,
            },
        ],
        points: 24,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 16, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 42, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 9, placement: [[0, -2], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 38, placement: [[2, -2], [1, -1]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 55, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 20, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 3, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 14, placement: [[-1, 2], [-2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-1, -1], [0, -2]],
                pitchLists: [
                    [7, 3, 0],
                    [7, 10, 4, 1],
                    [10, 7, 1],
                    [10, 3, 7],
                ],
                points: 13,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 34, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 29, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 54, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 25, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 21, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 56, placement: [[4, -2], [3, -1]] },
        ],
        handList: [10, 32, 28],
        moves: [
            {
                dominoIndex: 10,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [0, 10, 3, 7],
                    [2, 10, 6],
                    [10, 6, 3, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 32,
                placement: [[0, -3], [-1, -2]],
                pitchLists: [
                    [3, 2, 6, 10],
                    [5, 2, 10, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 28,
                placement: [[-1, -4], [-1, -3]],
                pitchLists: [
                    [2, 9, 5],
                    [9, 3, 0],
                ],
                points: 6,
            },
        ],
        points: 27,
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 50, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 5, placement: [[1, 0], [2, 0]] },
        ],
        handList: [13, 49, 18],
        moves: [
            {
                dominoIndex: 49,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [5, 9, 0, 2],
                ],
                points: 4,
            },
            {
                dominoIndex: 13,
                placement: [[2, 1], [3, 0]],
                pitchLists: [
                    [9, 5, 1],
                    [8, 0, 5, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[1, -2], [2, -2]],
                pitchLists: [
                    [1, 8, 5],
                    [8, 9, 5, 1],
                ],
                points: 7,
            },
        ],
        points: 20,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 4, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 34, placement: [[0, 1], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[-1, 1], [0, 0]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 7, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 6, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 37, placement: [[-1, -1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-2, 1], [-2, 0]],
                pitchLists: [
                    [6, 3, 0],
                    [6, 10, 3],
                    [6, 10, 3],
                    [0, 3, 6],
                ],
                points: 12,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 42, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 50, placement: [[3, -4], [3, -3]] },
            { dominoIndex: 51, placement: [[3, -1], [2, -1]] },
            { dominoIndex: 30, placement: [[2, -4], [1, -4]] },
        ],
        handList: [19, 5, 23],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, -2], [0, -1]],
                pitchLists: [
                    [5, 4, 1, 9],
                    [9, 2, 11, 5],
                ],
                points: 8,
            },
            {
                dominoIndex: 5,
                placement: [[0, -2], [-1, -2]],
                pitchLists: [
                    [5, 0, 1, 8],
                    [0, 9, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 23,
                placement: [[0, -3], [-1, -3]],
                pitchLists: [
                    [2, 0, 9, 5],
                    [11, 2, 5],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 20, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 4, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 34, placement: [[-1, 2], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[0, 0], [0, -1]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 3, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 16, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 59, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 37, placement: [[1, 1], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-2, 2], [-3, 2]],
                pitchLists: [
                    [11, 3, 6, 10],
                    [0, 7, 3],
                    [6, 10, 3],
                    [3, 7, 11],
                ],
                points: 13,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 4, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 6, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 34, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 38, placement: [[2, 2], [2, 1]] },
            { dominoIndex: 63, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 32, placement: [[2, -3], [1, -2]] },
        ],
        handList: [50, 22, 60],
        moves: [
            {
                dominoIndex: 50,
                placement: [[-1, -1], [0, -2]],
                pitchLists: [
                    [5, 11, 8],
                    [5, 8, 0],
                    [10, 11, 3, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 22,
                placement: [[-1, -2], [-2, -1]],
                pitchLists: [
                    [2, 10, 5],
                    [2, 5, 8, 0],
                    [3, 5, 11, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 60,
                placement: [[-2, -2], [-2, -3]],
                pitchLists: [
                    [7, 2, 10, 5],
                    [11, 7, 3],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 10, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 37, placement: [[-2, 2], [-2, 3]] },
        ],
        handList: [54, 14, 42],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [9, 6, 1],
                    [6, 3, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 14,
                placement: [[-2, 0], [-1, -1]],
                pitchLists: [
                    [1, 6, 3, 10],
                    [4, 1, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[-4, 1], [-4, 2]],
                pitchLists: [
                    [4, 9, 6, 1],
                    [4, 1, 9, 8],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 20, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 24, placement: [[2, 0], [3, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 6, placement: [[1, 0], [1, 1]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 65, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 36, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 6, placement: [[0, -2], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [3, 6, 9],
                    [7, 3, 11],
                    [0, 3, 9],
                    [7, 0, 3],
                ],
                points: 12,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 33, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 6, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 48, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 9, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 36, placement: [[2, 2], [1, 3]] },
        ],
        handList: [54, 3, 5],
        moves: [
            {
                dominoIndex: 54,
                placement: [[3, 1], [2, 1]],
                pitchLists: [
                    [0, 9, 6],
                    [6, 3, 9],
                    [6, 9, 3],
                ],
                points: 9,
            },
            {
                dominoIndex: 5,
                placement: [[2, 3], [3, 3]],
                pitchLists: [
                    [9, 0, 5],
                    [6, 9, 3, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 3,
                placement: [[0, 4], [0, 3]],
                pitchLists: [
                    [9, 3, 0],
                    [6, 3, 9, 0],
                    [3, 9, 0, 5],
                    [9, 6, 3],
                ],
                points: 14,
            },
        ],
        points: 32,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 3, placement: [[-1, 3], [-1, 2]] },
            { dominoIndex: 63, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 60, placement: [[-2, 0], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[0, 0], [-1, 1]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 20, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 25, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 50, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 36, placement: [[2, 1], [3, 0]] },
            { dominoIndex: 43, placement: [[5, -3], [4, -3]] },
        ],
        moves: [
            {
                dominoIndex: 16,
                placement: [[4, -2], [4, -1]],
                pitchLists: [
                    [10, 5, 1],
                    [9, 1, 6],
                    [4, 1, 10, 6],
                    [7, 2, 10, 6],
                    [6, 9, 3],
                ],
                points: 17,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 30, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 49, placement: [[-4, 3], [-4, 4]] },
            { dominoIndex: 26, placement: [[-4, 2], [-5, 2]] },
            { dominoIndex: 60, placement: [[-3, 1], [-4, 1]] },
            { dominoIndex: 3, placement: [[-3, -1], [-3, 0]] },
            { dominoIndex: 38, placement: [[-5, 1], [-5, 0]] },
        ],
        handList: [29, 54, 37],
        moves: [
            {
                dominoIndex: 29,
                placement: [[-6, 3], [-5, 3]],
                pitchLists: [
                    [2, 10, 5],
                    [3, 11, 7, 2],
                    [11, 3, 7, 10],
                    [7, 2, 10],
                ],
                points: 14,
            },
            {
                dominoIndex: 54,
                placement: [[-6, 2], [-7, 3]],
                pitchLists: [
                    [6, 7, 2, 11],
                    [3, 6, 9],
                    [9, 2, 10, 5],
                ],
                points: 11,
            },
            {
                dominoIndex: 37,
                placement: [[-6, 4], [-6, 5]],
                pitchLists: [
                    [6, 2, 3, 10],
                    [7, 2, 10, 3],
                ],
                points: 8,
            },
        ],
        points: 35,
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 58, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 33, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 20, placement: [[0, 1], [1, 1]] },
        ],
        handList: [19, 3, 43],
        moves: [
            {
                dominoIndex: 19,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [1, 9, 5],
                    [9, 0, 6],
                ],
                points: 6,
            },
            {
                dominoIndex: 3,
                placement: [[-2, -1], [-2, 0]],
                pitchLists: [
                    [0, 3, 7, 9],
                    [3, 9, 0, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 43,
                placement: [[-1, -2], [0, -3]],
                pitchLists: [
                    [4, 1, 9, 5],
                    [9, 4, 0],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 8, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 3, placement: [[-2, -1], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[0, -3], [0, -2]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 5, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 14, placement: [[0, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[2, 0], [1, 1]],
                pitchLists: [
                    [1, 10, 5, 6],
                    [6, 9, 1],
                    [0, 5, 9],
                ],
                points: 10,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 66, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 33, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 25, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 20, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 15, placement: [[-2, 2], [-1, 2]] },
        ],
        handList: [60, 42, 30],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-2, 4], [-2, 3]],
                pitchLists: [
                    [1, 8, 4],
                    [10, 1, 5, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[-3, 2], [-2, 1]],
                pitchLists: [
                    [7, 1, 5, 10],
                    [4, 11, 7],
                    [11, 1, 8, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 30,
                placement: [[-4, 3], [-3, 3]],
                pitchLists: [
                    [2, 11, 8],
                    [4, 11, 7, 2],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 4, placement: [[-3, 0], [-3, 1]] },
            { dominoIndex: 48, placement: [[-4, 3], [-3, 3]] },
            { dominoIndex: 20, placement: [[-4, 2], [-4, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[-2, 1], [-3, 2]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 59, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 7, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 44, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 45, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 25, placement: [[2, -1], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 26,
                placement: [[1, -2], [0, -2]],
                pitchLists: [
                    [7, 2, 10, 6],
                    [2, 7, 10, 4],
                    [2, 11, 7],
                    [7, 11, 3],
                    [7, 4, 0],
                ],
                points: 17,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 9, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 25, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 49, placement: [[2, -2], [2, -3]] },
            { dominoIndex: 55, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 41, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 13, placement: [[1, 1], [1, 2]] },
        ],
        handList: [30, 63, 24],
        moves: [
            {
                dominoIndex: 30,
                placement: [[4, -2], [3, -2]],
                pitchLists: [
                    [5, 11, 2],
                    [2, 6, 10, 1],
                    [11, 2, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 63,
                placement: [[4, -3], [4, -4]],
                pitchLists: [
                    [11, 8, 2],
                    [8, 11, 2, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[3, -4], [4, -5]],
                pitchLists: [
                    [5, 2, 9],
                    [5, 11, 8, 2],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 38, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 35, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 60, placement: [[1, -3], [2, -3]] },
        ],
        handList: [40, 15, 29],
        moves: [
            {
                dominoIndex: 29,
                placement: [[2, -4], [1, -4]],
                pitchLists: [
                    [2, 11, 8],
                    [2, 7, 11],
                    [10, 7, 3],
                ],
                points: 9,
            },
            {
                dominoIndex: 15,
                placement: [[-2, -1], [-1, -1]],
                pitchLists: [
                    [1, 5, 8],
                    [2, 7, 11, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 40,
                placement: [[3, -3], [3, -4]],
                pitchLists: [
                    [3, 7, 11, 4],
                    [10, 2, 6],
                    [6, 11, 3, 8],
                ],
                points: 11,
            },
        ],
        points: 29,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 29, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 48, placement: [[-2, 0], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[0, -2], [0, -1]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 15, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 66, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 9, placement: [[2, -2], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 41,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [11, 7, 4],
                    [9, 1, 4],
                    [0, 3, 9, 7],
                ],
                points: 10,
            },
        ],
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 51, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 38, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 5, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 33, placement: [[3, 1], [3, 0]] },
            { dominoIndex: 64, placement: [[2, 2], [3, 2]] },
        ],
        handList: [22, 55, 15],
        moves: [
            {
                dominoIndex: 22,
                placement: [[3, 3], [2, 3]],
                pitchLists: [
                    [6, 3, 10, 2],
                    [0, 5, 9, 3],
                ],
                points: 8,
            },
            {
                dominoIndex: 55,
                placement: [[1, 3], [0, 3]],
                pitchLists: [
                    [10, 6, 3, 2],
                    [3, 9, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[0, 4], [0, 5]],
                pitchLists: [
                    [10, 1, 5],
                    [3, 9, 6, 1],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
}
