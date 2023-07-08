import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 59, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 37, placement: [[-1, -2], [-1, -1]] },
            { dominoIndex: 25, placement: [[0, -3], [-1, -3]] },
            { dominoIndex: 7, placement: [[2, -2], [2, -3]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-1, 0], [-2, 0]],
                pitchLists: [
                    [4, 1, 10],
                    [6, 3, 10, 1],
                    [7, 10, 4, 1],
                    [7, 10, 4],
                ],
                points: 14,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 38, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 2, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 49, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 59, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 55, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 26, placement: [[-2, 1], [-2, 0]] },
        ],
        handList: [17, 24, 41],
        moves: [
            {
                dominoIndex: 17,
                placement: [[3, -1], [3, 0]],
                pitchLists: [
                    [3, 10, 6, 1],
                    [10, 1, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 24,
                placement: [[2, -2], [3, -3]],
                pitchLists: [
                    [7, 2, 10],
                    [5, 2, 10, 8],
                    [5, 10, 1, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 41,
                placement: [[4, -2], [5, -3]],
                pitchLists: [
                    [7, 2, 10, 4],
                    [7, 4, 1],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 42, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 7, placement: [[-1, 2], [-2, 3]] },
        ],
        handList: [35, 44, 23],
        moves: [
            {
                dominoIndex: 35,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [3, 11, 4, 8],
                    [3, 8, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 44,
                placement: [[-1, 3], [0, 3]],
                pitchLists: [
                    [7, 4, 10],
                    [3, 8, 0, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 23,
                placement: [[-3, 3], [-2, 2]],
                pitchLists: [
                    [2, 7, 4, 10],
                    [11, 8, 4, 2],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 9, placement: [[0, -2], [1, -3]] },
        ],
        missingMoves: [
            { dominoIndex: 36, placement: [[-1, -1], [0, -1]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 30, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 32, placement: [[1, -4], [2, -4]] },
            { dominoIndex: 7, placement: [[-1, -2], [0, -3]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [11, 8, 5],
                    [5, 2, 11, 8],
                    [3, 7, 0, 11],
                ],
                points: 11,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 51, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 63, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 13, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 14, placement: [[-1, 1], [-1, 0]] },
        ],
        handList: [42, 3],
        moves: [
            {
                dominoIndex: 42,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [8, 11, 4],
                    [3, 8, 4, 0],
                    [4, 8, 1],
                    [8, 11, 4],
                ],
                points: 13,
            },
            {
                dominoIndex: 3,
                placement: [[2, -2], [2, -1]],
                pitchLists: [
                    [5, 8, 0],
                    [0, 4, 8, 1],
                    [8, 11, 4, 3],
                ],
                points: 11,
            },
        ],
        points: 24,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 48, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 28, placement: [[-1, 0], [0, -1]] },
            { dominoIndex: 8, placement: [[0, 1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 15, placement: [[1, -1], [0, 0]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 45, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 9, placement: [[1, -1], [1, -2]] },
            { dominoIndex: 60, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 33, placement: [[-2, 0], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 38,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [7, 3, 0],
                    [11, 3, 8],
                    [9, 3, 11, 6],
                    [11, 7, 3],
                ],
                points: 13,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 8, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 17, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 50, placement: [[2, 2], [2, 1]] },
            { dominoIndex: 30, placement: [[2, 3], [3, 2]] },
            { dominoIndex: 59, placement: [[1, 4], [1, 3]] },
            { dominoIndex: 56, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 31, placement: [[-1, 3], [-1, 4]] },
        ],
        handList: [16, 19, 26],
        moves: [
            {
                dominoIndex: 16,
                placement: [[3, 1], [4, 1]],
                pitchLists: [
                    [10, 1, 6],
                    [1, 5, 10],
                    [6, 11, 2, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 19,
                placement: [[4, -1], [4, 0]],
                pitchLists: [
                    [1, 9, 6],
                    [9, 1, 5, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 26,
                placement: [[4, -2], [5, -3]],
                pitchLists: [
                    [2, 1, 9, 6],
                    [7, 2, 11, 6],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 63, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 33, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 38, placement: [[1, -2], [1, -1]] },
        ],
        handList: [54, 15, 19],
        moves: [
            {
                dominoIndex: 54,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [3, 6, 9],
                    [6, 11, 2, 7],
                    [9, 3, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 15,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [1, 3, 6, 9],
                    [5, 3, 11, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 19,
                placement: [[2, -3], [2, -4]],
                pitchLists: [
                    [9, 1, 6],
                    [9, 5, 1],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 49, placement: [[3, -1], [2, 0]] },
            { dominoIndex: 8, placement: [[2, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 33, placement: [[0, 0], [1, 0]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 24, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 35, placement: [[-2, 0], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [2, 8, 5],
                    [2, 11, 8],
                    [3, 11, 8],
                ],
                points: 9,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 34, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 49, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 5, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 14, placement: [[-1, 2], [-1, 3]] },
        ],
        handList: [43, 13, 63],
        moves: [
            {
                dominoIndex: 43,
                placement: [[0, -1], [-1, 0]],
                pitchLists: [
                    [4, 0, 5, 9],
                    [9, 8, 1, 4],
                ],
                points: 8,
            },
            {
                dominoIndex: 13,
                placement: [[-2, 1], [-2, 0]],
                pitchLists: [
                    [1, 8, 5, 0],
                    [4, 9, 1],
                    [3, 9, 0],
                ],
                points: 10,
            },
            {
                dominoIndex: 63,
                placement: [[1, -2], [1, -3]],
                pitchLists: [
                    [11, 8, 3],
                    [8, 4, 9, 1],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 25, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 33, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 24, placement: [[-1, 3], [-2, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 9, placement: [[0, 1], [-1, 2]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 14, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 63, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 50, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 49, placement: [[1, 0], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 16,
                placement: [[2, 0], [3, -1]],
                pitchLists: [
                    [8, 5, 1],
                    [9, 1, 5],
                    [6, 1, 10, 4],
                    [1, 9, 6],
                ],
                points: 13,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 63, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 35, placement: [[3, 1], [3, 2]] },
            { dominoIndex: 4, placement: [[4, -2], [3, -1]] },
            { dominoIndex: 49, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 27, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 6, placement: [[-1, 1], [0, 1]] },
        ],
        handList: [54, 37, 30],
        moves: [
            {
                dominoIndex: 54,
                placement: [[-1, 3], [-1, 2]],
                pitchLists: [
                    [0, 9, 6],
                    [1, 6, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 37,
                placement: [[-2, 3], [-3, 3]],
                pitchLists: [
                    [10, 3, 6],
                    [1, 6, 9, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[-1, 4], [0, 3]],
                pitchLists: [
                    [0, 9, 6, 2],
                    [5, 11, 2],
                    [10, 3, 6, 11],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 18, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 9, placement: [[0, 1], [1, 1]] },
        ],
        handList: [20, 47, 19],
        moves: [
            {
                dominoIndex: 20,
                placement: [[1, 0], [2, 0]],
                pitchLists: [
                    [4, 1, 10],
                    [6, 1, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 47,
                placement: [[2, 1], [3, 0]],
                pitchLists: [
                    [0, 9, 5],
                    [4, 1, 10, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [1, 0, 9, 5],
                    [6, 4, 1, 9],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 3, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 60, placement: [[1, 0], [2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 42, placement: [[0, 0], [0, 1]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 12, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 51, placement: [[3, -2], [4, -2]] },
            { dominoIndex: 41, placement: [[0, -1], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[3, -3], [3, -4]],
                pitchLists: [
                    [11, 8, 5],
                    [8, 2, 6, 11],
                    [11, 1, 7, 4],
                ],
                points: 11,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 63, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 48, placement: [[2, -2], [1, -2]] },
            { dominoIndex: 30, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 4, placement: [[2, -3], [1, -3]] },
            { dominoIndex: 43, placement: [[3, -4], [3, -3]] },
        ],
        handList: [9, 17, 59],
        moves: [
            {
                dominoIndex: 9,
                placement: [[1, -1], [2, -1]],
                pitchLists: [
                    [3, 0, 9],
                    [4, 8, 0],
                    [9, 5, 0, 4],
                    [0, 5, 9],
                ],
                points: 13,
            },
            {
                dominoIndex: 17,
                placement: [[2, 0], [1, 0]],
                pitchLists: [
                    [4, 7, 1],
                    [0, 5, 9, 1],
                    [4, 8, 0, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 59,
                placement: [[3, -1], [3, 0]],
                pitchLists: [
                    [3, 0, 9, 7],
                    [4, 7, 1, 10],
                ],
                points: 8,
            },
        ],
        points: 34,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 33, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 5, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 14, placement: [[0, 3], [1, 2]] },
            { dominoIndex: 7, placement: [[2, 0], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 35, placement: [[1, 0], [1, 1]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 19, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 16, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 42, placement: [[0, -2], [-1, -2]] },
            { dominoIndex: 61, placement: [[0, 1], [1, 0]] },
            { dominoIndex: 49, placement: [[1, -1], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-1, -1], [-2, 0]],
                pitchLists: [
                    [0, 9, 5],
                    [8, 0, 4],
                    [4, 0, 8, 1],
                    [8, 4, 1, 9],
                ],
                points: 14,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 41, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 3, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 50, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 20, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 7, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 23, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 43, placement: [[-1, 3], [-1, 4]] },
            { dominoIndex: 33, placement: [[2, 2], [1, 2]] },
        ],
        handList: [60, 42, 14],
        moves: [
            {
                dominoIndex: 14,
                placement: [[0, 4], [1, 4]],
                pitchLists: [
                    [9, 1, 4],
                ],
                points: 3,
            },
            {
                dominoIndex: 60,
                placement: [[-2, 4], [-2, 5]],
                pitchLists: [
                    [7, 9, 1, 4],
                    [3, 7, 11],
                    [1, 10, 4, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 42,
                placement: [[-2, 6], [-1, 5]],
                pitchLists: [
                    [3, 7, 11, 4],
                    [1, 8, 4],
                    [0, 4, 9, 8],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 20, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 63, placement: [[-1, -2], [0, -2]] },
        ],
        handList: [42, 60, 36],
        moves: [
            {
                dominoIndex: 42,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [4, 10, 1],
                    [11, 1, 4, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[-2, 2], [-2, 1]],
                pitchLists: [
                    [4, 11, 7],
                    [1, 4, 7],
                    [8, 11, 4],
                ],
                points: 9,
            },
            {
                dominoIndex: 36,
                placement: [[-2, 3], [-3, 3]],
                pitchLists: [
                    [4, 11, 7, 3],
                    [1, 4, 7, 9],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 46, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 30, placement: [[1, 0], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[0, -1], [0, 0]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 36, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 63, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 45, placement: [[1, -1], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [5, 1, 9, 8],
                    [11, 4, 8, 1],
                ],
                points: 8,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 59, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 43, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 7, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 24, placement: [[-2, 2], [-1, 2]] },
        ],
        handList: [9, 52, 29],
        moves: [
            {
                dominoIndex: 9,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [9, 0, 3],
                    [9, 4, 0, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 52,
                placement: [[3, 0], [3, -1]],
                pitchLists: [
                    [3, 9, 0, 6],
                    [0, 4, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[5, -2], [4, -1]],
                pitchLists: [
                    [2, 10, 6, 7],
                    [0, 4, 7, 10],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 29, placement: [[0, -3], [-1, -2]] },
            { dominoIndex: 25, placement: [[-1, -1], [-2, -1]] },
            { dominoIndex: 32, placement: [[-3, -1], [-2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[0, -2], [0, -1]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 38, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 24, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 56, placement: [[-1, 0], [-1, -1]] },
            { dominoIndex: 63, placement: [[-1, 2], [0, 1]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[0, 2], [1, 1]],
                pitchLists: [
                    [5, 8, 2],
                    [8, 11, 2],
                    [11, 6, 2],
                    [2, 11, 6],
                    [10, 3, 6],
                ],
                points: 15,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 17, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 4, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 30, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 34, placement: [[-1, 4], [-1, 3]] },
            { dominoIndex: 28, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 8, placement: [[0, 3], [0, 4]] },
            { dominoIndex: 63, placement: [[2, 1], [2, 2]] },
        ],
        handList: [38, 59, 15],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-2, 3], [-2, 4]],
                pitchLists: [
                    [3, 7, 0],
                    [11, 3, 8],
                    [1, 4, 7, 11],
                ],
                points: 10,
            },
            {
                dominoIndex: 59,
                placement: [[-3, 4], [-3, 3]],
                pitchLists: [
                    [7, 11, 3, 8],
                    [0, 3, 7],
                    [10, 3, 7, 0],
                ],
                points: 11,
            },
            {
                dominoIndex: 15,
                placement: [[-3, 2], [-3, 1]],
                pitchLists: [
                    [5, 1, 10, 7],
                    [5, 2, 9],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
}
