import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 34, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 5, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 58, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 9, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 29, placement: [[2, 2], [3, 2]] },
            { dominoIndex: 18, placement: [[4, -1], [3, -1]] },
        ],
        handList: [43, 30, 52],
        moves: [
            {
                dominoIndex: 30,
                placement: [[3, -2], [3, -3]],
                pitchLists: [
                    [11, 2, 8],
                    [2, 5, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 43,
                placement: [[4, -2], [4, -3]],
                pitchLists: [
                    [9, 4, 1],
                    [4, 8, 0, 3],
                    [9, 2, 5, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 52,
                placement: [[3, -4], [4, -4]],
                pitchLists: [
                    [6, 11, 2, 8],
                    [7, 9, 4, 1],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 2, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 19, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 4, placement: [[-2, 0], [-1, 0]] },
        ],
        handList: [48, 43, 15],
        moves: [
            {
                dominoIndex: 43,
                placement: [[1, -3], [1, -2]],
                pitchLists: [
                    [4, 9, 0],
                ],
                points: 3,
            },
            {
                dominoIndex: 15,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [5, 1, 9],
                    [9, 1, 4],
                    [5, 9, 2],
                ],
                points: 9,
            },
            {
                dominoIndex: 48,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [0, 4, 9, 5],
                    [4, 9, 0, 5],
                    [5, 8, 1],
                    [5, 1, 9, 8],
                ],
                points: 15,
            },
        ],
        points: 29,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 11, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 6, placement: [[-1, 1], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 36, placement: [[1, 0], [1, 1]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 34, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 48, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 14, placement: [[1, 0], [2, -1]] },
        ],
        moves: [
            {
                dominoIndex: 42,
                placement: [[1, -2], [1, -1]],
                pitchLists: [
                    [4, 8, 1],
                    [4, 0, 5, 8],
                    [0, 8, 4],
                ],
                points: 10,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 42, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 2, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 63, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 41, placement: [[-1, -2], [0, -3]] },
            { dominoIndex: 37, placement: [[-2, -2], [-2, -1]] },
        ],
        handList: [24, 51, 20],
        moves: [
            {
                dominoIndex: 24,
                placement: [[1, -4], [1, -3]],
                pitchLists: [
                    [2, 5, 11],
                    [2, 7, 4, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 51,
                placement: [[3, -4], [2, -4]],
                pitchLists: [
                    [2, 11, 5],
                    [11, 5, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 20,
                placement: [[3, -5], [3, -6]],
                pitchLists: [
                    [10, 1, 5],
                    [1, 11, 5, 8],
                ],
                points: 7,
            },
        ],
        points: 22,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 49, placement: [[1, -1], [1, 0]] },
            { dominoIndex: 26, placement: [[2, 0], [2, 1]] },
            { dominoIndex: 55, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 9, placement: [[3, -2], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 28, placement: [[1, -2], [0, -1]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 24, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 8, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 20, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 59, placement: [[-2, 3], [-2, 2]] },
        ],
        moves: [
            {
                dominoIndex: 15,
                placement: [[0, 2], [1, 1]],
                pitchLists: [
                    [10, 5, 1],
                    [5, 10, 1],
                    [2, 10, 5],
                    [8, 1, 5],
                ],
                points: 12,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 3, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 27, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 51, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 6, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 54, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 35, placement: [[2, -2], [3, -2]] },
        ],
        handList: [47, 11, 30],
        moves: [
            {
                dominoIndex: 47,
                placement: [[3, -3], [2, -3]],
                pitchLists: [
                    [5, 3, 9, 0],
                    [7, 0, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 11,
                placement: [[2, -4], [3, -4]],
                pitchLists: [
                    [0, 7, 3],
                    [11, 5, 8],
                    [11, 7, 0, 3],
                ],
                points: 10,
            },
            {
                dominoIndex: 30,
                placement: [[3, -5], [2, -5]],
                pitchLists: [
                    [2, 11, 5, 8],
                    [11, 0, 7, 3],
                ],
                points: 8,
            },
        ],
        points: 27,
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 3, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 4, placement: [[2, -3], [2, -2]] },
        ],
        handList: [19, 49, 36],
        moves: [
            {
                dominoIndex: 19,
                placement: [[0, -2], [1, -2]],
                pitchLists: [
                    [1, 9, 4],
                    [9, 7, 0, 3],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [1, 9, 4, 5],
                    [5, 9, 0],
                    [0, 4, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 36,
                placement: [[4, -3], [3, -3]],
                pitchLists: [
                    [0, 9, 3],
                    [3, 5, 9, 0],
                    [9, 4, 7, 1],
                ],
                points: 11,
            },
        ],
        points: 30,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 54, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 24, placement: [[0, 2], [-1, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 37, placement: [[-1, 1], [0, 0]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 3, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 30, placement: [[-2, -2], [-2, -1]] },
            { dominoIndex: 48, placement: [[-1, -2], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [5, 9, 0],
                    [2, 11, 5],
                    [8, 0, 5],
                    [5, 0, 9],
                ],
                points: 12,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 15, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 29, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 42, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 60, placement: [[1, 1], [2, 1]] },
        ],
        handList: [20, 43, 56],
        moves: [
            {
                dominoIndex: 20,
                placement: [[1, -1], [1, -2]],
                pitchLists: [
                    [10, 1, 5, 7],
                    [4, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 43,
                placement: [[3, -1], [4, -1]],
                pitchLists: [
                    [1, 8, 4, 9],
                    [4, 1, 7],
                ],
                points: 7,
            },
            {
                dominoIndex: 56,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [8, 2, 11, 6],
                    [4, 1, 7, 11],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 49, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 25, placement: [[-2, 1], [-1, 0]] },
            { dominoIndex: 29, placement: [[2, -2], [1, -2]] },
            { dominoIndex: 9, placement: [[-1, -1], [-1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[0, -2], [0, -1]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 13, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 28, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 54, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 3, placement: [[-2, -1], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[1, -1], [1, 0]],
                pitchLists: [
                    [0, 3, 9, 5],
                    [2, 5, 9, 1],
                    [5, 0, 9],
                    [6, 0, 9],
                ],
                points: 14,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 14, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 37, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 56, placement: [[1, -2], [0, -2]] },
            { dominoIndex: 49, placement: [[0, -3], [1, -3]] },
            { dominoIndex: 2, placement: [[2, -3], [3, -3]] },
            { dominoIndex: 29, placement: [[-1, -2], [-2, -1]] },
        ],
        handList: [50, 17, 7],
        moves: [
            {
                dominoIndex: 17,
                placement: [[-2, -3], [-2, -2]],
                pitchLists: [
                    [1, 7, 10],
                    [7, 2, 11, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 50,
                placement: [[-2, 0], [-1, 0]],
                pitchLists: [
                    [5, 10, 8, 2],
                    [1, 7, 10, 5],
                    [0, 6, 3, 10],
                ],
                points: 12,
            },
            {
                dominoIndex: 7,
                placement: [[0, 2], [-1, 2]],
                pitchLists: [
                    [4, 7, 0],
                    [10, 1, 7],
                ],
                points: 6,
            },
        ],
        points: 27,
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 22, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 9, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 34, placement: [[-2, 2], [-1, 2]] },
        ],
        handList: [59, 25, 29],
        moves: [
            {
                dominoIndex: 59,
                placement: [[0, 3], [0, 2]],
                pitchLists: [
                    [2, 3, 10, 7],
                    [3, 7, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 25,
                placement: [[1, 2], [1, 1]],
                pitchLists: [
                    [3, 7, 10, 2],
                    [9, 6, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[-1, 3], [-1, 4]],
                pitchLists: [
                    [7, 2, 10],
                    [6, 10, 2],
                    [2, 7, 10],
                ],
                points: 9,
            },
        ],
        points: 25,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 60, placement: [[0, -2], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[0, 0], [1, 0]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 9, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 30, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 35, placement: [[1, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-1, 1], [-1, 2]],
                pitchLists: [
                    [3, 0, 8],
                    [9, 3, 6],
                    [11, 6, 3],
                    [3, 0, 6],
                ],
                points: 12,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 51, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 60, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 2, placement: [[0, 3], [1, 2]] },
            { dominoIndex: 26, placement: [[-2, 1], [-2, 2]] },
        ],
        handList: [14, 44, 27],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-3, 4], [-2, 4]],
                pitchLists: [
                    [8, 5, 11, 1],
                    [2, 7, 11, 4],
                ],
                points: 8,
            },
            {
                dominoIndex: 44,
                placement: [[-3, 3], [-4, 4]],
                pitchLists: [
                    [7, 4, 10],
                    [10, 1, 4],
                ],
                points: 6,
            },
            {
                dominoIndex: 27,
                placement: [[-5, 5], [-5, 4]],
                pitchLists: [
                    [7, 4, 10, 2],
                    [8, 10, 1, 4],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 47, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 4, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 45, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 54, placement: [[-3, 1], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 27, placement: [[0, -1], [1, -1]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 59, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 26, placement: [[4, -2], [3, -1]] },
            { dominoIndex: 4, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 37, placement: [[2, -1], [1, -1]] },
            { dominoIndex: 19, placement: [[0, -1], [0, -2]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [7, 11, 2],
                    [7, 3, 10],
                    [7, 10, 4],
                    [11, 3, 7],
                ],
                points: 12,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 47, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 39, placement: [[3, -3], [4, -3]] },
            { dominoIndex: 14, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 50, placement: [[-2, 0], [-1, -1]] },
            { dominoIndex: 9, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 25, placement: [[-4, 1], [-3, 1]] },
        ],
        handList: [38, 8, 48],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-3, 0], [-3, -1]],
                pitchLists: [
                    [3, 5, 0, 9],
                    [11, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[-2, 2], [-3, 2]],
                pitchLists: [
                    [5, 9, 0],
                    [11, 3, 6, 8],
                    [4, 0, 9, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 48,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [8, 0, 5],
                    [1, 4, 9, 8],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 23, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 26, placement: [[0, 1], [1, 1]] },
        ],
        handList: [51, 29, 33],
        moves: [
            {
                dominoIndex: 51,
                placement: [[-2, 1], [-2, 0]],
                pitchLists: [
                    [5, 11, 2, 7],
                    [11, 5, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 29,
                placement: [[-1, 0], [0, -1]],
                pitchLists: [
                    [11, 2, 7],
                    [10, 2, 5],
                    [10, 7, 2],
                ],
                points: 9,
            },
            {
                dominoIndex: 33,
                placement: [[0, -2], [-1, -1]],
                pitchLists: [
                    [3, 10, 7, 2],
                    [3, 6, 11],
                    [6, 2, 11],
                ],
                points: 10,
            },
        ],
        points: 28,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 5, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 30, placement: [[-1, 0], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 19, placement: [[1, -1], [0, 0]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 54, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 32, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 22, placement: [[1, -1], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [9, 0, 5],
                    [3, 6, 0],
                    [2, 6, 9],
                ],
                points: 9,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 59, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 20, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 40, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 41, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 38, placement: [[-1, 1], [-1, 2]] },
        ],
        handList: [30, 1, 8],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-1, -1], [0, -1]],
                pitchLists: [
                    [2, 11, 6],
                    [2, 7, 3, 11],
                    [4, 11, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 1,
                placement: [[2, -3], [2, -2]],
                pitchLists: [
                    [0, 4, 11, 7],
                    [1, 6, 10, 3],
                ],
                points: 8,
            },
            {
                dominoIndex: 8,
                placement: [[4, -2], [3, -2]],
                pitchLists: [
                    [4, 1, 8, 0],
                    [0, 7, 4, 10],
                ],
                points: 8,
            },
        ],
        points: 28,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 31, placement: [[2, -4], [2, -3]] },
            { dominoIndex: 18, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 59, placement: [[0, -2], [-1, -2]] },
            { dominoIndex: 55, placement: [[1, -1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 20, placement: [[1, -2], [0, -1]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 14, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 34, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 3, placement: [[-2, 2], [-3, 2]] },
            { dominoIndex: 60, placement: [[-2, 1], [-3, 1]] },
            { dominoIndex: 6, placement: [[-4, 3], [-3, 3]] },
        ],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-2, 3], [-3, 4]],
                pitchLists: [
                    [0, 6, 3],
                    [7, 0, 3],
                    [7, 3, 10],
                    [11, 3, 6, 10],
                ],
                points: 13,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 59, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 27, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 20, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 56, placement: [[-2, -2], [-2, -1]] },
            { dominoIndex: 32, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 4, placement: [[0, 1], [-1, 1]] },
            { dominoIndex: 38, placement: [[-3, -1], [-4, 0]] },
        ],
        handList: [34, 63, 44],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, 2], [1, 1]],
                pitchLists: [
                    [3, 11, 8],
                    [8, 4, 0, 11],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[0, 2], [-1, 3]],
                pitchLists: [
                    [6, 0, 3],
                    [11, 3, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 44,
                placement: [[1, 3], [0, 3]],
                pitchLists: [
                    [7, 10, 4],
                    [3, 11, 8, 4],
                    [6, 0, 3, 10],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 53, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 51, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 16, placement: [[-1, 2], [0, 2]] },
        ],
        handList: [28, 3, 34],
        moves: [
            {
                dominoIndex: 28,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [2, 11, 6],
                    [5, 2, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 3,
                placement: [[0, -2], [0, -1]],
                pitchLists: [
                    [0, 3, 6],
                    [0, 5, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [0, 7, 3],
                    [7, 3, 11],
                ],
                points: 6,
            },
        ],
        points: 21,
    },
    31: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 33, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 63, placement: [[1, -1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 10, placement: [[0, 0], [0, 1]] },
        ],
    },
}
