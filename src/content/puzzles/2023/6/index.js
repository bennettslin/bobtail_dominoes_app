import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 30, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 44, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 19, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 47, placement: [[3, -2], [3, -1]] },
        ],
        handList: [59, 27, 3],
        moves: [
            {
                dominoIndex: 27,
                placement: [[4, -2], [5, -2]],
                pitchLists: [
                    [5, 2, 8],
                    [2, 7, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 3,
                placement: [[5, -4], [5, -3]],
                pitchLists: [
                    [0, 3, 8],
                    [3, 2, 7, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[5, -1], [6, -2]],
                pitchLists: [
                    [0, 3, 8, 7],
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
            { dominoIndex: 63, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 33, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 16, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 55, placement: [[-3, 1], [-4, 2]] },
            { dominoIndex: 58, placement: [[-2, 3], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[-2, 0], [-2, 1]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 54, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 9, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 14, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 42, placement: [[-1, 1], [-2, 2]] },
        ],
        moves: [
            {
                dominoIndex: 28,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [5, 9, 2],
                    [2, 6, 9],
                    [1, 9, 6],
                    [9, 0, 4, 8],
                ],
                points: 13,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 26, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 59, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 49, placement: [[-1, -1], [-1, -2]] },
            { dominoIndex: 25, placement: [[-1, -3], [0, -3]] },
            { dominoIndex: 51, placement: [[-2, -2], [-2, -3]] },
            { dominoIndex: 17, placement: [[1, -4], [1, -5]] },
            { dominoIndex: 64, placement: [[-3, -1], [-3, -2]] },
        ],
        handList: [37, 15, 20],
        moves: [
            {
                dominoIndex: 37,
                placement: [[2, -5], [2, -6]],
                pitchLists: [
                    [10, 3, 7],
                    [3, 1, 6, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[2, -7], [1, -6]],
                pitchLists: [
                    [1, 10, 3, 7],
                    [5, 7, 1, 10],
                ],
                points: 8,
            },
            {
                dominoIndex: 20,
                placement: [[0, -6], [0, -5]],
                pitchLists: [
                    [1, 5, 10],
                    [10, 7, 3],
                    [1, 5, 10],
                ],
                points: 9,
            },
        ],
        points: 26,
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 3, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 43, placement: [[-4, 1], [-5, 2]] },
        ],
        handList: [8, 45, 15],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-2, -2], [-2, -1]],
                pitchLists: [
                    [0, 8, 3],
                    [8, 0, 4, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 45,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [0, 8, 3, 4],
                    [7, 4, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 15,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [8, 5, 1],
                    [1, 7, 4, 11],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 48, placement: [[-2, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 2, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 61, placement: [[0, 2], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 56,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [3, 6, 11],
                    [6, 2, 9],
                    [11, 2, 8],
                ],
                points: 9,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 25, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 9, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 30, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 33, placement: [[1, 3], [2, 3]] },
            { dominoIndex: 8, placement: [[1, 4], [2, 4]] },
        ],
        handList: [64, 15, 41],
        moves: [
            {
                dominoIndex: 64,
                placement: [[3, 2], [3, 3]],
                pitchLists: [
                    [2, 6, 11, 9],
                    [9, 6, 0],
                    [0, 3, 6, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 15,
                placement: [[3, 5], [3, 4]],
                pitchLists: [
                    [9, 10, 5, 1],
                    [0, 8, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[4, 4], [5, 3]],
                pitchLists: [
                    [0, 8, 5, 4],
                    [7, 4, 1],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 59, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 45, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 17, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 43, placement: [[3, -2], [3, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 3, placement: [[1, -1], [2, -2]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 24, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 8, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 63, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 40, placement: [[-3, 0], [-3, -1]] },
            { dominoIndex: 35, placement: [[1, -2], [2, -3]] },
        ],
        moves: [
            {
                dominoIndex: 38,
                placement: [[0, -3], [1, -3]],
                pitchLists: [
                    [3, 11, 8],
                    [3, 8, 11, 4],
                    [3, 0, 8, 4],
                    [11, 8, 2],
                ],
                points: 14,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 29, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 51, placement: [[3, -2], [4, -2]] },
            { dominoIndex: 9, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 42, placement: [[4, -3], [3, -3]] },
            { dominoIndex: 25, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 15, placement: [[1, -3], [1, -4]] },
        ],
        handList: [37, 48, 10],
        moves: [
            {
                dominoIndex: 48,
                placement: [[5, -1], [4, -1]],
                pitchLists: [
                    [2, 8, 5],
                    [4, 11, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 37,
                placement: [[4, 0], [3, 0]],
                pitchLists: [
                    [6, 10, 3],
                    [4, 11, 8, 3],
                    [8, 5, 2, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 10,
                placement: [[5, 0], [6, -1]],
                pitchLists: [
                    [6, 10, 3, 0],
                    [2, 8, 5, 10],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 63, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 30, placement: [[0, 3], [-1, 4]] },
        ],
        handList: [48, 33, 38],
        moves: [
            {
                dominoIndex: 48,
                placement: [[2, 2], [1, 2]],
                pitchLists: [
                    [11, 8, 5],
                    [8, 2, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 33,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [3, 11, 8, 5],
                    [3, 6, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [6, 11, 3, 8],
                    [3, 11, 6],
                    [11, 8, 3],
                ],
                points: 10,
            },
        ],
        points: 25,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 31, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 28, placement: [[1, 0], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 16, placement: [[-1, 1], [0, 0]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 51, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 62, placement: [[-1, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [2, 5, 10],
                    [11, 2, 5],
                    [5, 11, 8],
                ],
                points: 9,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 42, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 3, placement: [[2, 2], [1, 3]] },
            { dominoIndex: 7, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 54, placement: [[3, 1], [3, 0]] },
            { dominoIndex: 36, placement: [[3, -2], [4, -2]] },
        ],
        handList: [5, 41, 18],
        moves: [
            {
                dominoIndex: 5,
                placement: [[5, -2], [4, -1]],
                pitchLists: [
                    [3, 9, 0],
                    [0, 5, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 41,
                placement: [[6, -3], [6, -2]],
                pitchLists: [
                    [4, 0, 5, 9],
                    [3, 9, 0, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 18,
                placement: [[6, -1], [5, -1]],
                pitchLists: [
                    [0, 5, 8, 1],
                    [4, 7, 1],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 20, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 50, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 48, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 14, placement: [[2, 2], [1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 64, placement: [[1, 1], [0, 2]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 52, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 45, placement: [[1, -3], [2, -4]] },
            { dominoIndex: 20, placement: [[-1, -1], [-2, -1]] },
            { dominoIndex: 17, placement: [[2, -2], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[0, -3], [-1, -3]],
                pitchLists: [
                    [9, 1, 4],
                    [1, 7, 4, 10],
                    [1, 6, 10],
                    [9, 6, 1],
                ],
                points: 13,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 26, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 45, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 37, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 41, placement: [[-3, 4], [-2, 4]] },
            { dominoIndex: 56, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 8, placement: [[2, 0], [1, 1]] },
        ],
        handList: [14, 30, 55],
        moves: [
            {
                dominoIndex: 14,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [7, 1, 4],
                    [1, 10, 6, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [11, 2, 6, 7],
                    [7, 2, 11],
                    [11, 7, 1, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 55,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [10, 6, 1],
                    [6, 7, 2, 11],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 34, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 14, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 36, placement: [[0, -2], [0, -1]] },
        ],
        handList: [54, 24, 8],
        moves: [
            {
                dominoIndex: 54,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [1, 9, 6],
                    [3, 9, 0, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [9, 5, 2],
                    [2, 11, 6],
                    [5, 0, 9],
                ],
                points: 9,
            },
            {
                dominoIndex: 8,
                placement: [[3, -1], [3, -2]],
                pitchLists: [
                    [9, 5, 2, 0],
                    [8, 2, 11, 6],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 8, placement: [[2, -5], [1, -4]] },
        ],
        missingMoves: [
            { dominoIndex: 49, placement: [[0, -3], [0, -2]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 55, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 16, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 37, placement: [[2, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [6, 4, 0, 9],
                    [3, 10, 6, 0],
                ],
                points: 8,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 14, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 59, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 15, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 43, placement: [[4, -1], [3, -1]] },
        ],
        handList: [9, 58, 3],
        moves: [
            {
                dominoIndex: 9,
                placement: [[4, -2], [4, -3]],
                pitchLists: [
                    [9, 0, 4],
                    [0, 9, 4],
                    [9, 5, 1, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 3,
                placement: [[3, -3], [2, -3]],
                pitchLists: [
                    [3, 0, 9],
                    [0, 5, 9, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 58,
                placement: [[5, -3], [5, -2]],
                pitchLists: [
                    [3, 0, 9, 7],
                    [7, 0, 9, 4],
                    [5, 0, 9],
                    [9, 4, 1, 7],
                ],
                points: 15,
            },
        ],
        points: 34,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 60, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 29, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 27, placement: [[-1, 2], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 32, placement: [[1, 0], [0, 0]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 41, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 53, placement: [[3, -3], [3, -2]] },
            { dominoIndex: 9, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 25, placement: [[0, -2], [-1, -1]] },
            { dominoIndex: 43, placement: [[-2, 1], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [10, 1, 5, 7],
                    [6, 1, 9],
                    [9, 1, 4],
                    [2, 6, 10],
                ],
                points: 13,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 30, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 22, placement: [[2, 3], [1, 3]] },
            { dominoIndex: 51, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 54, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 44, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 60, placement: [[-2, 1], [-3, 2]] },
        ],
        handList: [17, 14, 59],
        moves: [
            {
                dominoIndex: 17,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [1, 2, 6, 9],
                    [1, 4, 7, 11],
                    [7, 4, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 14,
                placement: [[-1, -2], [-2, -1]],
                pitchLists: [
                    [1, 7, 4, 10],
                    [4, 7, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 59,
                placement: [[-3, 0], [-3, -1]],
                pitchLists: [
                    [1, 4, 7],
                    [10, 4, 7, 1],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 2, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 17, placement: [[-2, -1], [-2, 0]] },
        ],
        handList: [4, 43, 54],
        moves: [
            {
                dominoIndex: 4,
                placement: [[-3, 2], [-2, 1]],
                pitchLists: [
                    [9, 4, 0],
                    [1, 7, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 43,
                placement: [[-1, 2], [-2, 2]],
                pitchLists: [
                    [0, 9, 4],
                    [1, 7, 4, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [0, 9, 4, 6],
                    [3, 9, 6],
                    [0, 9, 4],
                ],
                points: 10,
            },
        ],
        points: 25,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 20, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 5, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 17, placement: [[3, -1], [3, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[3, 0], [2, 0]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 29, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 8, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 48, placement: [[1, 1], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[2, 1], [3, 0]],
                pitchLists: [
                    [10, 5, 1],
                    [4, 1, 8],
                    [5, 0, 8, 4],
                ],
                points: 10,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 61, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 6, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 22, placement: [[-3, 3], [-2, 3]] },
            { dominoIndex: 43, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 14, placement: [[-2, 0], [-1, 0]] },
        ],
        handList: [7, 51, 28],
        moves: [
            {
                dominoIndex: 7,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [0, 4, 9],
                    [7, 4, 0],
                    [7, 1, 4],
                ],
                points: 9,
            },
            {
                dominoIndex: 51,
                placement: [[0, 1], [-1, 2]],
                pitchLists: [
                    [4, 9, 0, 5],
                    [0, 9, 5],
                    [8, 5, 11, 3],
                    [7, 4, 0, 11],
                ],
                points: 15,
            },
            {
                dominoIndex: 28,
                placement: [[0, 2], [1, 2]],
                pitchLists: [
                    [6, 11, 2, 9],
                    [0, 9, 5, 2],
                ],
                points: 8,
            },
        ],
        points: 34,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 19, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 55, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 34, placement: [[3, -1], [3, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[0, 1], [0, 2]] },
        ],
    },
}
