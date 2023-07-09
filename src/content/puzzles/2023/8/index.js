import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 46, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 6, placement: [[2, 0], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[0, 1], [0, 0]] },
        ],
    },
    2: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 13, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 43, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 27, placement: [[1, 1], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-3, 2], [-2, 1]],
                pitchLists: [
                    [4, 3, 11, 7],
                    [11, 5, 8, 2],
                ],
                points: 8,
            },
        ],
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 30, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 15, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 8, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 28, placement: [[1, 3], [0, 3]] },
        ],
        handList: [42, 14, 54],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [4, 5, 8, 0],
                    [4, 8, 1, 11],
                ],
                points: 8,
            },
            {
                dominoIndex: 14,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [4, 1, 8],
                    [1, 5, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 54,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [6, 9, 1, 2],
                    [1, 5, 8, 9],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 44, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 24, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 17, placement: [[-1, 1], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[-3, 0], [-2, 0]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 49, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 28, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 48, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 5, placement: [[2, -3], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [5, 0, 8, 1],
                    [9, 4, 1],
                    [1, 8, 4],
                    [0, 9, 5, 4],
                ],
                points: 14,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 44, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 50, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 17, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 29, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 20, placement: [[3, -2], [4, -3]] },
            { dominoIndex: 16, placement: [[1, 2], [2, 1]] },
        ],
        handList: [26, 60, 33],
        moves: [
            {
                dominoIndex: 26,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [2, 7, 4, 10],
                    [7, 2, 4, 10],
                    [7, 5, 10, 1],
                ],
                points: 12,
            },
            {
                dominoIndex: 60,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [7, 11, 4],
                    [5, 2, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 33,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [10, 6, 3],
                    [11, 2, 6],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    7: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 5, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 59, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 41, placement: [[1, -1], [1, -2]] },
        ],
        handList: [8, 19, 55],
        moves: [
            {
                dominoIndex: 8,
                placement: [[0, 2], [1, 1]],
                pitchLists: [
                    [5, 8, 0],
                    [7, 4, 0, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[3, -1], [2, -1]],
                pitchLists: [
                    [4, 9, 1],
                    [1, 5, 8, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [10, 6, 1],
                    [6, 9, 0],
                ],
                points: 6,
            },
        ],
        points: 22,
    },
    8: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 26, placement: [[1, 1], [1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 50, placement: [[0, 0], [1, 0]] },
        ],
    },
    9: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 48, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 36, placement: [[0, -2], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [5, 2, 11],
                    [9, 2, 5],
                    [11, 5, 8],
                ],
                points: 9,
            },
        ],
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 12, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 15, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 49, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 54, placement: [[1, -3], [1, -4]] },
            { dominoIndex: 41, placement: [[2, -4], [2, -3]] },
        ],
        handList: [8, 35, 51],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [9, 5, 0],
                    [1, 4, 0, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 51,
                placement: [[-4, 2], [-3, 2]],
                pitchLists: [
                    [5, 11, 8],
                ],
                points: 3,
            },
            {
                dominoIndex: 35,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [5, 11, 8, 3],
                    [9, 5, 0, 3],
                    [1, 10, 4, 8],
                ],
                points: 12,
            },
        ],
        points: 24,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 49, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 16, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 46, placement: [[1, -4], [0, -3]] },
            { dominoIndex: 42, placement: [[3, -5], [2, -4]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[2, -2], [1, -1]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 28, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 55, placement: [[2, -4], [2, -3]] },
            { dominoIndex: 33, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 19, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 8, placement: [[0, 1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [1, 5, 9, 8],
                    [6, 1, 9],
                    [9, 5, 2],
                    [10, 5, 1],
                ],
                points: 13,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 30, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 55, placement: [[3, -5], [3, -4]] },
            { dominoIndex: 34, placement: [[3, -2], [4, -2]] },
            { dominoIndex: 26, placement: [[1, -2], [2, -3]] },
            { dominoIndex: 59, placement: [[5, -4], [4, -3]] },
            { dominoIndex: 14, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 3, placement: [[5, -5], [4, -5]] },
        ],
        handList: [4, 36, 54],
        moves: [
            {
                dominoIndex: 4,
                placement: [[6, -4], [5, -3]],
                pitchLists: [
                    [0, 4, 7],
                    [7, 2, 10, 4],
                    [0, 7, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 36,
                placement: [[7, -4], [7, -5]],
                pitchLists: [
                    [7, 0, 3],
                    [9, 0, 4, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[7, -3], [8, -4]],
                pitchLists: [
                    [9, 3, 6],
                    [7, 0, 3, 9],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    14: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 4, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 5, placement: [[-2, 0], [-1, 0]] },
        ],
        handList: [41, 63, 38],
        moves: [
            {
                dominoIndex: 41,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [0, 5, 9, 4],
                ],
                points: 4,
            },
            {
                dominoIndex: 38,
                placement: [[2, 1], [1, 2]],
                pitchLists: [
                    [0, 7, 3],
                    [4, 7, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 63,
                placement: [[-1, 2], [-1, 1]],
                pitchLists: [
                    [8, 4, 11],
                    [5, 11, 8],
                    [4, 0, 8],
                    [11, 0, 7, 3],
                ],
                points: 13,
            },
        ],
        points: 25,
    },
    15: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 14, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 54, placement: [[1, -3], [2, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[3, -3], [2, -2]] },
        ],
    },
    16: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 9, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 43, placement: [[0, 2], [1, 1]] },
            { dominoIndex: 16, placement: [[1, 2], [1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [6, 3, 0],
                    [0, 9, 4],
                    [3, 9, 1, 6],
                    [3, 0, 9],
                ],
                points: 13,
            },
        ],
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 8, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 35, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 38, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 6, placement: [[0, -1], [0, -2]] },
        ],
        handList: [41, 28, 4],
        moves: [
            {
                dominoIndex: 4,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [8, 4, 0],
                    [0, 7, 4, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[3, -4], [2, -3]],
                pitchLists: [
                    [4, 0, 3, 8],
                    [4, 7, 11, 0],
                    [3, 7, 0],
                    [7, 8, 4, 0],
                ],
                points: 15,
            },
            {
                dominoIndex: 28,
                placement: [[1, -4], [0, -3]],
                pitchLists: [
                    [2, 3, 11, 7],
                    [9, 3, 7, 0],
                    [9, 6, 0, 3],
                ],
                points: 12,
            },
        ],
        points: 36,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 66, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 47, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 27, placement: [[2, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 24, placement: [[-1, -1], [0, -1]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 25, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 60, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 49, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 3, placement: [[-1, 1], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 54,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [9, 2, 6],
                    [2, 9, 6],
                    [6, 9, 3],
                    [11, 5, 2, 9],
                ],
                points: 13,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 18, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 41, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 64, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 6, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 4, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 14, placement: [[-2, 4], [-1, 3]] },
        ],
        handList: [43, 55, 25],
        moves: [
            {
                dominoIndex: 43,
                placement: [[0, 4], [-1, 4]],
                pitchLists: [
                    [1, 9, 4],
                    [7, 1, 4, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 55,
                placement: [[-3, 4], [-2, 3]],
                pitchLists: [
                    [6, 1, 9, 4],
                    [2, 1, 10, 6],
                    [4, 10, 1],
                ],
                points: 11,
            },
            {
                dominoIndex: 25,
                placement: [[-3, 6], [-2, 5]],
                pitchLists: [
                    [9, 6, 2],
                    [4, 10, 1, 6],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    21: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 7, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 15, placement: [[0, 1], [0, 2]] },
        ],
        handList: [63, 35, 4],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-1, 2], [-2, 2]],
                pitchLists: [
                    [11, 8, 5],
                    [4, 1, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 4,
                placement: [[2, -1], [2, -2]],
                pitchLists: [
                    [4, 0, 7],
                    [0, 4, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 35,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [11, 8, 5, 3],
                    [0, 8, 3],
                    [4, 0, 7, 8],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    22: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 30, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 34, placement: [[2, 0], [1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[0, 0], [1, 0]] },
        ],
    },
    23: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 54, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 65, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 5, placement: [[-1, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, 0], [1, 1]],
                pitchLists: [
                    [5, 2, 9, 0],
                    [0, 3, 9],
                    [0, 6, 3],
                ],
                points: 10,
            },
        ],
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 8, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 24, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 35, placement: [[-1, 1], [-1, 0]] },
            { dominoIndex: 14, placement: [[0, 3], [-1, 3]] },
        ],
        handList: [56, 33, 9],
        moves: [
            {
                dominoIndex: 56,
                placement: [[-2, 2], [-3, 3]],
                pitchLists: [
                    [10, 3, 6, 11],
                    [11, 8, 4, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 33,
                placement: [[-3, 2], [-3, 1]],
                pitchLists: [
                    [3, 6, 0],
                    [6, 3, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 9,
                placement: [[-5, 3], [-4, 2]],
                pitchLists: [
                    [6, 9, 0],
                    [9, 3, 6, 0],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 59, placement: [[4, -1], [4, 0]] },
            { dominoIndex: 30, placement: [[4, -2], [5, -3]] },
            { dominoIndex: 43, placement: [[2, 0], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[2, -1], [3, -1]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 27, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 48, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 5, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 63, placement: [[1, 0], [2, 0]] },
        ],
        moves: [
            {
                dominoIndex: 24,
                placement: [[2, 1], [1, 1]],
                pitchLists: [
                    [11, 5, 2],
                    [11, 2, 5],
                    [2, 0, 5, 8],
                    [8, 5, 0],
                    [11, 5, 8],
                ],
                points: 16,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 15, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 30, placement: [[1, -3], [2, -3]] },
            { dominoIndex: 48, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 63, placement: [[-2, -1], [-1, -1]] },
            { dominoIndex: 41, placement: [[2, -4], [2, -5]] },
            { dominoIndex: 43, placement: [[1, 0], [0, 1]] },
        ],
        handList: [6, 34, 10],
        moves: [
            {
                dominoIndex: 6,
                placement: [[2, -2], [3, -3]],
                pitchLists: [
                    [5, 8, 1, 0],
                    [7, 4, 11, 0],
                    [2, 11, 6],
                ],
                points: 11,
            },
            {
                dominoIndex: 34,
                placement: [[4, -4], [4, -3]],
                pitchLists: [
                    [3, 6, 0],
                    [2, 11, 6, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 10,
                placement: [[4, -5], [5, -5]],
                pitchLists: [
                    [0, 3, 7],
                    [10, 3, 6, 0],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    28: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 37, placement: [[3, 0], [2, 0]] },
            { dominoIndex: 8, placement: [[3, 1], [3, 2]] },
            { dominoIndex: 41, placement: [[3, -1], [4, -2]] },
        ],
        handList: [22, 20, 59],
        moves: [
            {
                dominoIndex: 59,
                placement: [[2, 1], [1, 2]],
                pitchLists: [
                    [3, 7, 10],
                ],
                points: 3,
            },
            {
                dominoIndex: 20,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [10, 1, 4],
                    [1, 10, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 22,
                placement: [[3, -3], [2, -2]],
                pitchLists: [
                    [2, 3, 10, 6],
                    [3, 1, 10, 7],
                ],
                points: 8,
            },
        ],
        points: 19,
    },
    29: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 2, placement: [[-1, 3], [0, 3]] },
            { dominoIndex: 38, placement: [[1, 1], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[0, 1], [0, 2]] },
        ],
    },
    30: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 9, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 50, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 26, placement: [[-1, -1], [-1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 16,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [10, 4, 6, 1],
                    [7, 2, 10, 6],
                ],
                points: 8,
            },
        ],
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 36, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 43, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 8, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 20, placement: [[0, 1], [-1, 1]] },
        ],
        handList: [24, 16, 56],
        moves: [
            {
                dominoIndex: 16,
                placement: [[1, 2], [1, 1]],
                pitchLists: [
                    [9, 6, 1],
                    [4, 10, 1, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [8, 2, 5],
                    [2, 9, 6, 1],
                    [2, 5, 10],
                    [5, 9, 1],
                ],
                points: 13,
            },
            {
                dominoIndex: 56,
                placement: [[3, -2], [3, -1]],
                pitchLists: [
                    [6, 5, 9, 1],
                    [8, 2, 5, 11],
                    [11, 3, 6],
                ],
                points: 11,
            },
        ],
        points: 33,
    },
}
