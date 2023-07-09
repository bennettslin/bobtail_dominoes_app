import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 24, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 48, placement: [[2, -4], [1, -3]] },
        ],
        handList: [8, 33, 38],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [8, 0, 5],
                    [5, 8, 2, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 33,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [8, 0, 5, 3],
                    [6, 3, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [3, 11, 6],
                    [6, 3, 10, 11],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 7, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 34, placement: [[-1, 0], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[-2, 2], [-1, 1]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 21, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 41, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 20, placement: [[2, -1], [3, -2]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [1, 2, 5, 9],
                    [10, 1, 7, 5],
                ],
                points: 8,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 41, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 45, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 14, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 9, placement: [[-1, 1], [-2, 1]] },
        ],
        handList: [29, 43, 34],
        moves: [
            {
                dominoIndex: 29,
                placement: [[1, 0], [2, -1]],
                pitchLists: [
                    [4, 11, 7, 2],
                    [10, 2, 6],
                    [4, 1, 7, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 43,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [1, 10, 6, 4],
                    [10, 2, 6, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 34,
                placement: [[3, 0], [2, 0]],
                pitchLists: [
                    [10, 2, 7, 3],
                    [4, 10, 7],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    5: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 45, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 38, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 3, placement: [[2, 1], [2, 0]] },
            { dominoIndex: 8, placement: [[3, -2], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 60, placement: [[2, -1], [1, 0]] },
        ],
    },
    6: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 63, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 31, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 24, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 15, placement: [[-1, -2], [-2, -2]] },
            { dominoIndex: 55, placement: [[-3, 0], [-3, 1]] },
        ],
        moves: [
            {
                dominoIndex: 28,
                placement: [[-3, -1], [-2, -1]],
                pitchLists: [
                    [2, 9, 5, 11],
                    [2, 6, 10],
                    [5, 9, 2],
                    [1, 9, 6],
                ],
                points: 13,
            },
        ],
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 4, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 64, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 33, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 25, placement: [[1, 0], [1, -1]] },
            { dominoIndex: 5, placement: [[-1, 3], [0, 2]] },
            { dominoIndex: 29, placement: [[2, 2], [2, 3]] },
        ],
        handList: [54, 37, 40],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [6, 9, 2],
                    [9, 6, 0],
                    [9, 1, 6],
                ],
                points: 9,
            },
            {
                dominoIndex: 37,
                placement: [[-2, -1], [-2, 0]],
                pitchLists: [
                    [3, 9, 1, 6],
                    [10, 6, 9, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 40,
                placement: [[-1, -2], [-2, -2]],
                pitchLists: [
                    [4, 9, 6, 0],
                    [6, 3, 10],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 37, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 54, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 16, placement: [[2, -3], [2, -4]] },
        ],
        handList: [24, 47, 29],
        moves: [
            {
                dominoIndex: 24,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [10, 5, 2],
                    [6, 1, 9, 2],
                    [9, 5, 1],
                ],
                points: 10,
            },
            {
                dominoIndex: 47,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [1, 6, 10, 5],
                    [7, 10, 5, 2],
                ],
                points: 8,
            },
            {
                dominoIndex: 29,
                placement: [[1, 1], [1, 0]],
                pitchLists: [
                    [6, 5, 10, 2],
                    [5, 1, 10],
                    [2, 10, 7],
                ],
                points: 10,
            },
        ],
        points: 30,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 21, placement: [[-2, -1], [-1, -2]] },
            { dominoIndex: 31, placement: [[-1, -3], [-2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 57, placement: [[-1, -1], [-2, 0]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 8, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 27, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 24, placement: [[2, 2], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [4, 8, 11],
                    [8, 2, 5],
                    [11, 8, 2],
                    [11, 2, 8],
                ],
                points: 12,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 34, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 58, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 7, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 38, placement: [[1, -1], [1, 0]] },
        ],
        handList: [35, 8, 45],
        moves: [
            {
                dominoIndex: 35,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [3, 8, 0],
                    [3, 0, 7],
                    [3, 4, 8, 0],
                ],
                points: 10,
            },
            {
                dominoIndex: 8,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [8, 0, 4, 11],
                    [0, 8, 3],
                    [7, 9, 0, 3],
                    [8, 3, 0, 7],
                ],
                points: 15,
            },
            {
                dominoIndex: 45,
                placement: [[-3, 1], [-4, 2]],
                pitchLists: [
                    [4, 3, 8, 0],
                    [8, 4, 11],
                ],
                points: 7,
            },
        ],
        points: 34,
    },
    12: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 33, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 60, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 57, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 31, placement: [[1, -2], [0, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[-1, 0], [0, 0]] },
        ],
    },
    13: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 35, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 58, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 6, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 10, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 24, placement: [[2, 1], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[-1, 1], [-1, 0]],
                pitchLists: [
                    [7, 11, 5, 2],
                    [10, 7, 3],
                    [3, 7, 0],
                    [10, 3, 6, 0],
                ],
                points: 14,
            },
        ],
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 35, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 5, placement: [[3, 0], [3, 1]] },
            { dominoIndex: 63, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 25, placement: [[3, -2], [4, -2]] },
            { dominoIndex: 45, placement: [[4, -1], [5, -1]] },
            { dominoIndex: 43, placement: [[1, -1], [2, -2]] },
        ],
        handList: [26, 44, 16],
        moves: [
            {
                dominoIndex: 26,
                placement: [[2, 2], [1, 2]],
                pitchLists: [
                    [11, 8, 2],
                    [4, 0, 8, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 44,
                placement: [[2, 3], [1, 3]],
                pitchLists: [
                    [11, 8, 2, 4],
                    [3, 7, 10],
                    [5, 2, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 16,
                placement: [[1, 4], [0, 4]],
                pitchLists: [
                    [3, 7, 10, 1],
                    [5, 2, 10, 6],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 9, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 48, placement: [[-4, 2], [-3, 2]] },
        ],
        handList: [24, 38, 8],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [5, 8, 0, 2],
                    [9, 2, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[-2, 1], [-1, 0]],
                pitchLists: [
                    [11, 3, 8],
                    [11, 9, 2, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[-3, 1], [-2, 0]],
                pitchLists: [
                    [0, 3, 9],
                    [8, 0, 5],
                    [8, 11, 5],
                    [8, 3, 0],
                ],
                points: 12,
            },
        ],
        points: 28,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 41, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 27, placement: [[1, -1], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 50, placement: [[0, -1], [0, 0]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 19, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 44, placement: [[0, -3], [1, -4]] },
            { dominoIndex: 8, placement: [[-1, -1], [-2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [10, 3, 6],
                    [3, 9, 0],
                    [1, 9, 6],
                ],
                points: 9,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 35, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 26, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 5, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 3, placement: [[2, -1], [2, -2]] },
        ],
        handList: [59, 45, 33],
        moves: [
            {
                dominoIndex: 59,
                placement: [[3, -2], [4, -2]],
                pitchLists: [
                    [0, 3, 7, 10],
                    [7, 0, 3, 8],
                    [10, 2, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 45,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [8, 4, 11],
                    [10, 2, 7, 4],
                    [3, 0, 7, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 33,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [3, 8, 4, 11],
                    [0, 3, 6],
                ],
                points: 7,
            },
        ],
        points: 31,
    },
    19: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 34, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 9, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 11, placement: [[2, 1], [2, 0]] },
            { dominoIndex: 63, placement: [[0, 2], [0, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 33, placement: [[0, 0], [0, 1]] },
        ],
    },
    20: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 18, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 5, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 45, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 38, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 30, placement: [[-1, 0], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[1, -2], [2, -2]],
                pitchLists: [
                    [1, 4, 8],
                    [4, 11, 8],
                    [4, 8, 2, 11],
                    [8, 4, 11],
                    [8, 11, 5],
                ],
                points: 16,
            },
        ],
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 56, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 63, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 49, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 42, placement: [[-2, -1], [-1, -1]] },
            { dominoIndex: 19, placement: [[-1, -2], [-2, -2]] },
            { dominoIndex: 5, placement: [[-3, -1], [-3, -2]] },
        ],
        handList: [43, 33, 8],
        moves: [
            {
                dominoIndex: 43,
                placement: [[-4, 0], [-3, 0]],
                pitchLists: [
                    [9, 0, 4],
                    [5, 0, 9],
                    [1, 4, 9],
                ],
                points: 9,
            },
            {
                dominoIndex: 33,
                placement: [[-3, 1], [-4, 1]],
                pitchLists: [
                    [5, 0, 9, 3],
                    [1, 4, 9, 6],
                ],
                points: 8,
            },
            {
                dominoIndex: 8,
                placement: [[-6, 1], [-5, 1]],
                pitchLists: [
                    [0, 8, 6, 3],
                    [9, 0, 4, 8],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 38, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 35, placement: [[-2, 4], [-1, 3]] },
            { dominoIndex: 7, placement: [[2, 1], [1, 1]] },
        ],
        handList: [59, 42, 21],
        moves: [
            {
                dominoIndex: 59,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [7, 8, 3, 11],
                    [10, 2, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 42,
                placement: [[1, 2], [2, 2]],
                pitchLists: [
                    [11, 4, 8],
                    [10, 2, 7, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 21,
                placement: [[3, 2], [3, 1]],
                pitchLists: [
                    [11, 4, 8, 1],
                    [3, 7, 0, 11],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 25, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 4, placement: [[1, -1], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 61, placement: [[0, 0], [1, 0]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 4, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 30, placement: [[2, 2], [1, 3]] },
            { dominoIndex: 54, placement: [[3, 1], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[3, 0], [2, 0]],
                pitchLists: [
                    [10, 8, 5, 1],
                    [1, 9, 4],
                    [5, 9, 2],
                ],
                points: 10,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 14, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 5, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 8, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 23, placement: [[3, -1], [2, 0]] },
        ],
        handList: [43, 35, 3],
        moves: [
            {
                dominoIndex: 43,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [9, 4, 1],
                    [0, 5, 8, 4],
                    [0, 6, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 35,
                placement: [[-3, 2], [-3, 1]],
                pitchLists: [
                    [0, 6, 9, 3],
                    [8, 9, 4, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 3,
                placement: [[-3, 0], [-2, 0]],
                pitchLists: [
                    [0, 3, 6, 8],
                    [0, 8, 3],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    26: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 9, placement: [[2, -4], [1, -3]] },
            { dominoIndex: 33, placement: [[-1, -1], [-2, -1]] },
            { dominoIndex: 36, placement: [[-2, -2], [-1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[0, -3], [0, -2]] },
        ],
    },
    27: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 25, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 27, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 59, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 38, placement: [[-3, 1], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [3, 11, 2, 7],
                    [6, 2, 10],
                    [11, 2, 5],
                    [2, 8, 11, 5],
                ],
                points: 14,
            },
        ],
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 42, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 12, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 26, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 59, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 15, placement: [[2, 1], [3, 0]] },
            { dominoIndex: 30, placement: [[3, 2], [3, 1]] },
            { dominoIndex: 64, placement: [[3, -1], [4, -1]] },
        ],
        handList: [60, 33, 20],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-1, 3], [0, 2]],
                pitchLists: [
                    [4, 11, 7],
                    [2, 11, 8],
                    [1, 4, 7, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 33,
                placement: [[-2, 3], [-2, 2]],
                pitchLists: [
                    [10, 6, 3],
                    [11, 7, 2, 3],
                    [6, 2, 11, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 20,
                placement: [[-2, 4], [-1, 4]],
                pitchLists: [
                    [10, 6, 3, 1],
                    [4, 11, 7, 1],
                    [2, 7, 10],
                ],
                points: 11,
            },
        ],
        points: 34,
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 48, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 27, placement: [[1, 2], [1, 3]] },
            { dominoIndex: 5, placement: [[3, 1], [3, 0]] },
        ],
        handList: [49, 30, 3],
        moves: [
            {
                dominoIndex: 49,
                placement: [[2, 2], [3, 2]],
                pitchLists: [
                    [2, 5, 9],
                    [0, 5, 8],
                    [5, 0, 9],
                ],
                points: 9,
            },
            {
                dominoIndex: 30,
                placement: [[3, -1], [2, 0]],
                pitchLists: [
                    [2, 5, 0, 9],
                    [2, 11, 5],
                    [11, 8, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 3,
                placement: [[1, 4], [2, 3]],
                pitchLists: [
                    [5, 2, 8, 0],
                    [9, 3, 0],
                    [11, 8, 5, 3],
                ],
                points: 11,
            },
        ],
        points: 32,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 44, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 15, placement: [[1, 2], [0, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 59, placement: [[2, 0], [3, 0]] },
        ],
    },
}
