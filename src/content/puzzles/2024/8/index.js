import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 6, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 34, placement: [[-1, 4], [-2, 5]] },
            { dominoIndex: 37, placement: [[2, 2], [1, 2]] },
            { dominoIndex: 4, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 60, placement: [[1, 0], [2, 0]] },
        ],
        handList: [9, 54, 30],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-2, 4], [-1, 3]],
                pitchLists: [
                    [4, 0, 7],
                    [6, 9, 0],
                    [4, 9, 0],
                    [0, 9, 3],
                ],
                points: 12,
            },
            {
                dominoIndex: 30,
                placement: [[-3, 5], [-4, 5]],
                pitchLists: [
                    [11, 2, 7],
                    [6, 9, 0, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[-1, 5], [-2, 6]],
                pitchLists: [
                    [11, 2, 7, 6],
                    [0, 9, 3, 6],
                    [4, 0, 7, 9],
                ],
                points: 12,
            },
        ],
        points: 33,
    },
    2: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 24, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 27, placement: [[-1, 2], [-1, 1]] },
            { dominoIndex: 54, placement: [[-2, 3], [-3, 4]] },
            { dominoIndex: 42, placement: [[-4, 3], [-3, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 66, placement: [[-2, 0], [-1, 0]] },
        ],
    },
    3: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 36, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 54, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 11, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 38, placement: [[1, -1], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[-2, 2], [-2, 1]],
                pitchLists: [
                    [2, 6, 9, 0],
                    [6, 2, 9],
                    [3, 6, 10, 2],
                    [6, 10, 3],
                ],
                points: 14,
            },
        ],
    },
    4: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 44, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 33, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 17, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 63, placement: [[1, 1], [1, 0]] },
            { dominoIndex: 8, placement: [[2, 1], [3, 0]] },
            { dominoIndex: 32, placement: [[2, 3], [1, 3]] },
        ],
        handList: [43, 34, 56],
        moves: [
            {
                dominoIndex: 43,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [4, 7, 11],
                    [4, 9, 1],
                    [9, 4, 8, 0],
                ],
                points: 10,
            },
            {
                dominoIndex: 34,
                placement: [[-2, 0], [-1, -1]],
                pitchLists: [
                    [3, 4, 7, 11],
                    [7, 4, 9, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 56,
                placement: [[-2, -2], [-2, -1]],
                pitchLists: [
                    [6, 11, 3],
                    [11, 7, 2],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 20, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 7, placement: [[3, -4], [3, -3]] },
        ],
        handList: [37, 54, 41],
        moves: [
            {
                dominoIndex: 37,
                placement: [[3, -2], [4, -3]],
                pitchLists: [
                    [0, 7, 3],
                    [1, 7, 10],
                ],
                points: 6,
            },
            {
                dominoIndex: 54,
                placement: [[2, -1], [3, -1]],
                pitchLists: [
                    [1, 6, 9],
                    [1, 10, 6],
                    [10, 3, 6],
                    [0, 7, 3, 9],
                ],
                points: 13,
            },
            {
                dominoIndex: 41,
                placement: [[4, -1], [4, -2]],
                pitchLists: [
                    [1, 6, 9, 4],
                    [10, 7, 4],
                    [10, 3, 7],
                ],
                points: 10,
            },
        ],
        points: 31,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 33, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 41, placement: [[2, 0], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[0, 1], [0, 0]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 45, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 25, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 27, placement: [[2, 0], [3, -1]] },
        ],
        moves: [
            {
                dominoIndex: 36,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [3, 4, 11, 8],
                    [9, 3, 0],
                    [9, 2, 6],
                ],
                points: 10,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 3, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 7, placement: [[-4, 2], [-3, 2]] },
            { dominoIndex: 54, placement: [[-1, 3], [-1, 2]] },
            { dominoIndex: 38, placement: [[-1, 0], [-2, 1]] },
        ],
        handList: [60, 41, 14],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-2, 0], [-3, 0]],
                pitchLists: [
                    [11, 7, 3, 8],
                    [7, 11, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[-3, 1], [-4, 1]],
                pitchLists: [
                    [7, 4, 11, 0],
                    [11, 4, 7],
                    [7, 4, 0],
                ],
                points: 10,
            },
            {
                dominoIndex: 14,
                placement: [[-3, -1], [-2, -1]],
                pitchLists: [
                    [1, 11, 4, 7],
                    [4, 7, 11, 3],
                    [4, 11, 7],
                ],
                points: 11,
            },
        ],
        points: 30,
    },
    9: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 34, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 54, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 21, placement: [[0, -2], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[-1, 1], [0, 0]] },
        ],
    },
    10: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 15, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 30, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 41, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 63, placement: [[-2, 1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 45,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [8, 4, 0],
                    [7, 11, 4],
                    [2, 8, 4, 11],
                    [4, 8, 11],
                ],
                points: 13,
            },
        ],
    },
    11: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 38, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 24, placement: [[3, 0], [2, 1]] },
            { dominoIndex: 27, placement: [[2, 2], [1, 2]] },
            { dominoIndex: 63, placement: [[2, -1], [3, -2]] },
            { dominoIndex: 11, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 25, placement: [[-1, 3], [-1, 2]] },
        ],
        handList: [34, 7, 44],
        moves: [
            {
                dominoIndex: 34,
                placement: [[4, -2], [3, -1]],
                pitchLists: [
                    [3, 7, 11],
                    [11, 7, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 7,
                placement: [[5, -3], [4, -3]],
                pitchLists: [
                    [0, 3, 7, 11],
                    [7, 11, 8, 3],
                ],
                points: 8,
            },
            {
                dominoIndex: 44,
                placement: [[3, -3], [4, -4]],
                pitchLists: [
                    [4, 7, 0],
                    [4, 11, 7, 2],
                    [10, 7, 3],
                ],
                points: 10,
            },
        ],
        points: 26,
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 63, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 34, placement: [[-3, 3], [-2, 3]] },
        ],
        handList: [38, 8, 39],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-1, 2], [-1, 3]],
                pitchLists: [
                    [6, 8, 3, 11],
                    [3, 7, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[0, 1], [0, 2]],
                pitchLists: [
                    [5, 0, 8],
                    [0, 3, 7],
                    [11, 3, 8],
                ],
                points: 9,
            },
            {
                dominoIndex: 39,
                placement: [[0, 3], [1, 2]],
                pitchLists: [
                    [3, 7, 11, 4],
                    [5, 0, 8, 4],
                    [11, 3, 8, 5],
                ],
                points: 12,
            },
        ],
        points: 30,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 10, placement: [[0, -3], [-1, -2]] },
            { dominoIndex: 28, placement: [[-2, 0], [-3, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 56, placement: [[-1, -1], [-1, 0]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 61, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 35, placement: [[3, -3], [3, -2]] },
            { dominoIndex: 45, placement: [[4, -5], [3, -4]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[1, -2], [0, -2]],
                pitchLists: [
                    [5, 1, 9, 8],
                    [4, 11, 8, 1],
                ],
                points: 8,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 1, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 49, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 19, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 43, placement: [[2, -1], [3, -1]] },
        ],
        handList: [8, 33, 51],
        moves: [
            {
                dominoIndex: 8,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [4, 8, 0],
                    [9, 1, 5, 0],
                    [4, 0, 8],
                ],
                points: 10,
            },
            {
                dominoIndex: 33,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [6, 3, 9],
                    [3, 4, 0, 8],
                    [6, 9, 1, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 51,
                placement: [[2, -3], [3, -4]],
                pitchLists: [
                    [5, 9, 4, 1],
                    [11, 6, 3, 9],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    16: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 60, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 17, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 44, placement: [[-1, 2], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[0, 0], [0, 1]] },
        ],
    },
    17: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 33, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 53, placement: [[3, -4], [3, -3]] },
            { dominoIndex: 54, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 14, placement: [[2, -3], [1, -3]] },
            { dominoIndex: 36, placement: [[1, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[3, -2], [3, -1]],
                pitchLists: [
                    [6, 8, 0, 3],
                    [0, 9, 3],
                    [1, 6, 9, 3],
                    [3, 6, 9],
                ],
                points: 14,
            },
        ],
    },
    18: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 59, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 40, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 44, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 4, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 14, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 29, placement: [[3, -1], [2, 0]] },
        ],
        handList: [7, 48],
        moves: [
            {
                dominoIndex: 48,
                placement: [[3, 0], [3, 1]],
                pitchLists: [
                    [1, 7, 10, 5],
                    [2, 5, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 7,
                placement: [[3, -2], [2, -2]],
                pitchLists: [
                    [4, 7, 0],
                    [0, 2, 5, 8],
                    [0, 4, 7, 10],
                    [0, 7, 4, 10],
                    [7, 10, 1, 4],
                ],
                points: 19,
            },
        ],
        points: 26,
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 34, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 42, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 24, placement: [[0, 2], [0, 1]] },
        ],
        handList: [14, 9, 54],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-3, 2], [-4, 3]],
                pitchLists: [
                    [4, 1, 7],
                    [8, 1, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 9,
                placement: [[-2, 3], [-3, 4]],
                pitchLists: [
                    [4, 7, 0],
                    [8, 3, 0],
                    [4, 1, 7, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 54,
                placement: [[-2, 4], [-1, 3]],
                pitchLists: [
                    [8, 3, 0, 6],
                    [2, 9, 6],
                    [4, 7, 0, 9],
                ],
                points: 11,
            },
        ],
        points: 29,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 44, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 55, placement: [[1, 2], [2, 2]] },
            { dominoIndex: 14, placement: [[-1, 2], [-2, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 26, placement: [[0, 2], [0, 1]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 50, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 14, placement: [[-1, 2], [0, 1]] },
            { dominoIndex: 6, placement: [[-2, 3], [-1, 3]] },
        ],
        moves: [
            {
                dominoIndex: 19,
                placement: [[1, 1], [0, 2]],
                pitchLists: [
                    [10, 4, 1],
                    [1, 9, 6],
                    [0, 4, 9],
                ],
                points: 9,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 8, placement: [[0, 3], [0, 2]] },
            { dominoIndex: 63, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 24, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 30, placement: [[-1, 2], [-1, 3]] },
        ],
        handList: [27, 55, 31],
        moves: [
            {
                dominoIndex: 27,
                placement: [[1, -1], [2, -2]],
                pitchLists: [
                    [2, 8, 5],
                    [8, 2, 11],
                    [8, 11, 2],
                ],
                points: 9,
            },
            {
                dominoIndex: 55,
                placement: [[2, -3], [1, -2]],
                pitchLists: [
                    [6, 8, 11, 2],
                    [10, 2, 8, 5],
                ],
                points: 8,
            },
            {
                dominoIndex: 31,
                placement: [[3, -4], [3, -3]],
                pitchLists: [
                    [3, 6, 10],
                    [4, 8, 2, 11],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    23: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 39, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 30, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 26, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 29, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 49, placement: [[1, -2], [1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[-2, 1], [-1, 1]] },
        ],
    },
    24: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 8, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 36, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 59, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 63, placement: [[1, 0], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [3, 8, 0],
                    [3, 0, 9],
                    [0, 3, 8],
                    [6, 11, 3],
                    [3, 8, 0],
                ],
                points: 15,
            },
        ],
    },
    25: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 16, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 48, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 3, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 19, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 6, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 36, placement: [[3, -3], [4, -3]] },
            { dominoIndex: 9, placement: [[2, -3], [3, -4]] },
        ],
        handList: [28, 4, 35],
        moves: [
            {
                dominoIndex: 28,
                placement: [[2, 0], [1, 1]],
                pitchLists: [
                    [9, 1, 6, 2],
                    [6, 2, 9],
                    [0, 6, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 4,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [8, 4, 0],
                    [6, 2, 9, 0],
                    [1, 9, 5, 4],
                ],
                points: 11,
            },
            {
                dominoIndex: 35,
                placement: [[1, 2], [0, 3]],
                pitchLists: [
                    [8, 4, 0, 3],
                    [0, 6, 9, 3],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 41, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 27, placement: [[0, 2], [0, 3]] },
        ],
        handList: [18, 30, 51],
        moves: [
            {
                dominoIndex: 18,
                placement: [[-2, 1], [-1, 1]],
                pitchLists: [
                    [1, 8, 5],
                    [4, 7, 0, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[1, 0], [1, 1]],
                pitchLists: [
                    [7, 2, 11],
                    [1, 8, 5, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 51,
                placement: [[-1, 3], [-1, 2]],
                pitchLists: [
                    [8, 11, 5],
                    [11, 2, 5],
                    [2, 5, 11],
                ],
                points: 9,
            },
        ],
        points: 25,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 18, placement: [[1, 1], [2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[0, 1], [0, 2]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 51, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 63, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 14, placement: [[1, -1], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-1, -1], [-1, 0]],
                pitchLists: [
                    [0, 8, 1, 4],
                    [0, 3, 8],
                    [5, 11, 8, 3],
                ],
                points: 11,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 57, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 24, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 29, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 50, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 17, placement: [[2, 0], [3, 0]] },
        ],
        handList: [58, 44, 16],
        moves: [
            {
                dominoIndex: 58,
                placement: [[1, 3], [2, 2]],
                pitchLists: [
                    [10, 2, 7],
                    [5, 2, 9],
                    [1, 5, 9],
                ],
                points: 9,
            },
            {
                dominoIndex: 44,
                placement: [[2, 3], [3, 2]],
                pitchLists: [
                    [10, 7, 4],
                    [1, 5, 9, 4],
                    [5, 2, 9, 10],
                ],
                points: 11,
            },
            {
                dominoIndex: 16,
                placement: [[0, 5], [1, 4]],
                pitchLists: [
                    [10, 4, 6, 1],
                    [10, 2, 7, 6],
                ],
                points: 8,
            },
        ],
        points: 30,
    },
    30: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 25, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 9, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 53, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 30, placement: [[3, -1], [4, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 38, placement: [[1, 0], [2, 0]] },
        ],
    },
    31: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 21, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 26, placement: [[2, 0], [2, -1]] },
            { dominoIndex: 44, placement: [[3, -2], [3, -1]] },
            { dominoIndex: 47, placement: [[4, -1], [4, -2]] },
        ],
        moves: [
            {
                dominoIndex: 59,
                placement: [[3, -3], [2, -2]],
                pitchLists: [
                    [7, 4, 10],
                    [7, 10, 1, 3],
                    [10, 4, 7],
                    [10, 7, 2],
                ],
                points: 13,
            },
        ],
    },
}
