import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 23, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 49, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 28, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 16, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 62, placement: [[-1, -2], [-1, -1]] },
        ],
        handList: [3, 43, 24],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [3, 0, 9],
                    [3, 6, 1, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 43,
                placement: [[0, -4], [0, -3]],
                pitchLists: [
                    [4, 9, 1],
                    [9, 6, 0],
                ],
                points: 6,
            },
            {
                dominoIndex: 24,
                placement: [[-1, -3], [-1, -4]],
                pitchLists: [
                    [2, 9, 6, 0],
                    [5, 2, 8, 10],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 29, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 33, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 56, placement: [[3, 0], [4, -1]] },
            { dominoIndex: 24, placement: [[-1, 1], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 59, placement: [[1, 0], [0, 0]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 36, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 31, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 7, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 35, placement: [[0, -1], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 6,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [6, 0, 3],
                    [0, 8, 3],
                    [8, 0, 4, 7],
                    [6, 4, 0, 9],
                ],
                points: 14,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 15, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 17, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 14, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 50, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 26, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 27, placement: [[-2, -2], [-1, -2]] },
        ],
        handList: [20, 43, 3],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-3, 2], [-2, 1]],
                pitchLists: [
                    [8, 5, 10, 1],
                    [7, 10, 1],
                    [2, 10, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 43,
                placement: [[-3, -1], [-3, 0]],
                pitchLists: [
                    [4, 9, 7, 1],
                    [9, 2, 5, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 3,
                placement: [[-5, 2], [-4, 1]],
                pitchLists: [
                    [9, 3, 0],
                    [3, 7, 10, 1],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 26, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 20, placement: [[-2, 1], [-1, 1]] },
        ],
        handList: [43, 42, 63],
        moves: [
            {
                dominoIndex: 43,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [1, 10, 4],
                    [0, 4, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 42,
                placement: [[-1, 0], [0, -1]],
                pitchLists: [
                    [8, 4, 1],
                    [8, 0, 4, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 63,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [4, 0, 8],
                    [11, 8, 4],
                    [8, 3, 11],
                    [2, 7, 11],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 36, placement: [[0, 1], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[1, 0], [0, 0]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 9, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 37, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 6, placement: [[1, 2], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [9, 3, 0],
                    [0, 6, 3, 10],
                    [3, 6, 0],
                    [3, 0, 9],
                ],
                points: 13,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 19, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 9, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 25, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 38, placement: [[-1, -1], [0, -1]] },
        ],
        handList: [8, 30, 52],
        moves: [
            {
                dominoIndex: 8,
                placement: [[1, -3], [0, -2]],
                pitchLists: [
                    [0, 2, 6, 9],
                    [0, 8, 3],
                    [8, 11, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 30,
                placement: [[0, -3], [-1, -2]],
                pitchLists: [
                    [2, 8, 11, 4],
                    [11, 8, 2],
                    [11, 3, 7, 0],
                ],
                points: 11,
            },
            {
                dominoIndex: 52,
                placement: [[-2, -2], [-2, -1]],
                pitchLists: [
                    [6, 11, 8, 2],
                    [7, 3, 11, 6],
                    [2, 11, 7],
                ],
                points: 11,
            },
        ],
        points: 34,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 7, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 44, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 54, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 27, placement: [[2, -3], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 41, placement: [[1, -1], [2, -2]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 3, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 30, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 44, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 63, placement: [[-3, 3], [-3, 4]] },
            { dominoIndex: 41, placement: [[-2, 0], [-2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [7, 11, 4],
                    [8, 4, 1],
                    [4, 8, 0, 3],
                    [8, 11, 4],
                ],
                points: 13,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 51, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 26, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 42, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 30, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 36, placement: [[-4, 1], [-4, 2]] },
            { dominoIndex: 27, placement: [[-3, 2], [-3, 3]] },
        ],
        handList: [15, 50, 16],
        moves: [
            {
                dominoIndex: 15,
                placement: [[-1, 2], [-2, 2]],
                pitchLists: [
                    [9, 2, 5, 1],
                    [2, 8, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 50,
                placement: [[-3, 4], [-2, 3]],
                pitchLists: [
                    [11, 2, 8, 5],
                    [1, 10, 5],
                    [2, 8, 5, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 16,
                placement: [[-4, 4], [-4, 5]],
                pitchLists: [
                    [5, 8, 1],
                    [1, 10, 5, 6],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 12, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 63, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 55, placement: [[2, -1], [3, -1]] },
        ],
        handList: [49, 14, 33],
        moves: [
            {
                dominoIndex: 49,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [5, 8, 11],
                    [9, 5, 1, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 14,
                placement: [[0, -2], [0, -1]],
                pitchLists: [
                    [1, 5, 8, 11],
                    [1, 4, 10],
                    [4, 1, 6, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 33,
                placement: [[-1, -3], [0, -3]],
                pitchLists: [
                    [3, 6, 9],
                    [6, 1, 4, 10],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 41, placement: [[2, -4], [2, -3]] },
            { dominoIndex: 19, placement: [[2, -1], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[3, -3], [2, -2]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 15, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 26, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 54, placement: [[1, -1], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-2, 2], [-1, 2]],
                pitchLists: [
                    [1, 10, 5],
                    [6, 9, 3, 1],
                    [7, 3, 10],
                ],
                points: 10,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 21, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 26, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 54, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 49, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 29, placement: [[2, -2], [2, -1]] },
        ],
        handList: [42, 60, 45],
        moves: [
            {
                dominoIndex: 42,
                placement: [[2, 1], [1, 1]],
                pitchLists: [
                    [1, 9, 8, 4],
                    [2, 10, 7, 4],
                ],
                points: 8,
            },
            {
                dominoIndex: 60,
                placement: [[0, 3], [1, 2]],
                pitchLists: [
                    [4, 11, 7],
                    [2, 8, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 45,
                placement: [[1, 3], [2, 3]],
                pitchLists: [
                    [7, 4, 11],
                    [2, 8, 11, 4],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 49, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 29, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 43, placement: [[-1, 1], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 17, placement: [[-1, 0], [0, 0]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 55, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 34, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 44, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 28, placement: [[-4, 2], [-3, 1]] },
            { dominoIndex: 1, placement: [[-5, 3], [-4, 3]] },
        ],
        moves: [
            {
                dominoIndex: 7,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [9, 3, 7, 0],
                    [7, 0, 4],
                    [10, 7, 4],
                    [2, 7, 10],
                ],
                points: 13,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 30, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 55, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 16, placement: [[2, 1], [2, 0]] },
            { dominoIndex: 36, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 29, placement: [[0, 2], [-1, 2]] },
            { dominoIndex: 46, placement: [[-1, 4], [0, 4]] },
        ],
        handList: [41, 3, 9],
        moves: [
            {
                dominoIndex: 41,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [7, 4, 10],
                    [3, 7, 11, 4],
                    [7, 11, 2, 6],
                ],
                points: 11,
            },
            {
                dominoIndex: 3,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [0, 3, 7, 9],
                    [0, 7, 4, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 9,
                placement: [[-2, 1], [-3, 1]],
                pitchLists: [
                    [9, 0, 4],
                    [3, 7, 0],
                ],
                points: 6,
            },
        ],
        points: 27,
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 16, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 48, placement: [[-3, 3], [-3, 4]] },
            { dominoIndex: 9, placement: [[-3, 2], [-4, 2]] },
        ],
        handList: [4, 35],
        moves: [
            {
                dominoIndex: 4,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [4, 0, 8],
                    [9, 0, 6, 4],
                    [10, 1, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 35,
                placement: [[-2, 4], [-1, 3]],
                pitchLists: [
                    [6, 0, 3],
                    [5, 0, 8],
                    [10, 1, 4, 8],
                ],
                points: 10,
            },
        ],
        points: 20,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 36, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 1, placement: [[-2, 3], [-3, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[-1, 1], [-2, 2]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 29, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 32, placement: [[1, -2], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[0, 1], [1, 0]],
                pitchLists: [
                    [5, 0, 8],
                    [2, 11, 8],
                    [3, 6, 11],
                ],
                points: 9,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 62, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 20, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 42, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 33, placement: [[0, 2], [1, 1]] },
        ],
        handList: [30, 25, 54],
        moves: [
            {
                dominoIndex: 25,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [10, 6, 2],
                    [2, 10, 6, 3],
                    [1, 6, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 30,
                placement: [[2, 1], [3, 1]],
                pitchLists: [
                    [6, 2, 11],
                    [1, 6, 10, 2],
                    [2, 8, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 54,
                placement: [[3, 2], [4, 1]],
                pitchLists: [
                    [2, 8, 11, 6],
                    [6, 2, 11, 9],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 44, placement: [[-4, 4], [-3, 4]] },
            { dominoIndex: 14, placement: [[-2, 4], [-2, 5]] },
            { dominoIndex: 63, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 52, placement: [[1, 2], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 34, placement: [[-1, 2], [-2, 3]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 60, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 37, placement: [[-3, 3], [-3, 4]] },
            { dominoIndex: 33, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 9, placement: [[-4, 3], [-5, 3]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-3, 1], [-4, 2]],
                pitchLists: [
                    [0, 3, 7],
                    [0, 6, 3, 10],
                    [0, 3, 9],
                    [3, 6, 11],
                ],
                points: 13,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 55, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 50, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 15, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 61, placement: [[-3, 2], [-3, 3]] },
            { dominoIndex: 34, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 14, placement: [[2, 1], [2, 2]] },
        ],
        handList: [43, 11, 42],
        moves: [
            {
                dominoIndex: 43,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [1, 4, 7],
                    [9, 4, 6, 1],
                    [9, 7, 1, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 11,
                placement: [[3, -1], [3, 0]],
                pitchLists: [
                    [0, 7, 3, 10],
                    [1, 4, 7, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 42,
                placement: [[4, -1], [5, -2]],
                pitchLists: [
                    [9, 0, 4],
                    [8, 4, 11, 1],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 9, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 19, placement: [[-2, 3], [-1, 2]] },
            { dominoIndex: 56, placement: [[1, 0], [2, 0]] },
        ],
        handList: [62, 54, 25],
        moves: [
            {
                dominoIndex: 54,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [6, 9, 3],
                    [9, 6, 0],
                ],
                points: 6,
            },
            {
                dominoIndex: 25,
                placement: [[1, 2], [0, 3]],
                pitchLists: [
                    [9, 6, 0, 2],
                    [9, 2, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 62,
                placement: [[3, 1], [3, 0]],
                pitchLists: [
                    [4, 0, 9, 8],
                    [3, 6, 11, 10],
                    [10, 9, 2, 6],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 55, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 14, placement: [[-2, 2], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 59, placement: [[0, 1], [0, 2]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 27, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 5, placement: [[-1, 3], [0, 3]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [5, 2, 8],
                    [11, 5, 8],
                    [8, 0, 5],
                ],
                points: 9,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 59, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 4, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 55, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 19, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 43, placement: [[1, -2], [0, -2]] },
        ],
        handList: [5, 20, 42],
        moves: [
            {
                dominoIndex: 5,
                placement: [[-2, -2], [-1, -2]],
                pitchLists: [
                    [0, 5, 9, 4],
                    [5, 10, 1, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 42,
                placement: [[-2, -4], [-2, -3]],
                pitchLists: [
                    [4, 8, 0],
                ],
                points: 3,
            },
            {
                dominoIndex: 20,
                placement: [[-2, -1], [-3, 0]],
                pitchLists: [
                    [1, 10, 6, 2],
                    [4, 8, 0, 1],
                    [5, 1, 10],
                ],
                points: 11,
            },
        ],
        points: 24,
    },
}
