import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {

    1: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 33, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 59, placement: [[2, -4], [3, -4]] },
            { dominoIndex: 29, placement: [[1, -4], [2, -5]] },
            { dominoIndex: 17, placement: [[3, -5], [3, -6]] },
            { dominoIndex: 25, placement: [[2, -6], [1, -5]] },
            { dominoIndex: 32, placement: [[4, -4], [3, -3]] },
        ],
        handList: [45, 31, 60],
        moves: [
            {
                dominoIndex: 45,
                placement: [[0, -5], [1, -6]],
                pitchLists: [
                    [4, 6, 10, 1],
                    [11, 2, 7],
                    [11, 6, 2],
                ],
                points: 10,
            },
            {
                dominoIndex: 31,
                placement: [[4, -7], [4, -6]],
                pitchLists: [
                    [3, 7, 10, 2],
                    [11, 2, 7, 4],
                    [4, 1, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 60,
                placement: [[6, -7], [5, -7]],
                pitchLists: [
                    [3, 11, 7],
                    [11, 4, 1, 7],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 3, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 53, placement: [[1, -2], [2, -2]] },
        ],
        handList: [45, 4, 36],
        moves: [
            {
                dominoIndex: 4,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [8, 4, 0],
                    [8, 4, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 36,
                placement: [[-1, -2], [-1, -1]],
                pitchLists: [
                    [3, 9, 0],
                    [9, 8, 4, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 45,
                placement: [[0, -3], [0, -2]],
                pitchLists: [
                    [4, 11, 8, 1],
                    [3, 11, 6, 8],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    3: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 9, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 51, placement: [[-1, 0], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[-1, -2], [0, -2]] },
        ],
    },
    4: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 35, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 26, placement: [[1, 1], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 5,
                placement: [[2, -1], [1, 0]],
                pitchLists: [
                    [3, 8, 0],
                    [0, 5, 9],
                    [8, 5, 2],
                ],
                points: 9,
            },
        ],
    },
    5: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 26, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 59, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 54, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 25, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 21, placement: [[3, -2], [3, -1]] },
        ],
        handList: [56, 36, 4],
        moves: [
            {
                dominoIndex: 56,
                placement: [[-1, 0], [-2, 1]],
                pitchLists: [
                    [6, 10, 2],
                    [10, 2, 6, 11],
                    [11, 2, 6],
                ],
                points: 10,
            },
            {
                dominoIndex: 36,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [3, 6, 10, 2],
                    [3, 11, 7],
                    [9, 11, 2, 6],
                ],
                points: 11,
            },
            {
                dominoIndex: 4,
                placement: [[-2, -1], [-1, -2]],
                pitchLists: [
                    [0, 3, 11, 7],
                    [4, 7, 10],
                ],
                points: 7,
            },
        ],
        points: 30,
    },
    6: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 30, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 38, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 59, placement: [[-1, 2], [-2, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 25, placement: [[0, 0], [-1, 1]] },
        ],
    },
    7: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 25, placement: [[-2, 1], [-3, 2]] },
            { dominoIndex: 48, placement: [[-4, 3], [-3, 3]] },
            { dominoIndex: 51, placement: [[-2, 2], [-2, 3]] },
            { dominoIndex: 27, placement: [[-1, 3], [-2, 4]] },
            { dominoIndex: 8, placement: [[-4, 4], [-4, 5]] },
        ],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-3, 4], [-3, 5]],
                pitchLists: [
                    [0, 3, 8],
                    [6, 8, 3, 11],
                    [11, 3, 8],
                    [2, 8, 11],
                ],
                points: 13,
            },
        ],
    },
    8: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 19, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 39, placement: [[-1, -2], [0, -2]] },
            { dominoIndex: 15, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 8, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 9, placement: [[-2, -1], [-1, -1]] },
            { dominoIndex: 44, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 55, placement: [[2, 1], [1, 1]] },
        ],
        handList: [49, 5, 33],
        moves: [
            {
                dominoIndex: 49,
                placement: [[-3, -1], [-3, 0]],
                pitchLists: [
                    [5, 0, 9, 4],
                    [4, 0, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 5,
                placement: [[-3, 1], [-4, 1]],
                pitchLists: [
                    [5, 0, 8],
                    [5, 9, 0],
                    [4, 0, 9, 5],
                ],
                points: 10,
            },
            {
                dominoIndex: 33,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [3, 6, 9],
                    [5, 9, 0, 3],
                    [4, 0, 8, 3],
                ],
                points: 11,
            },
        ],
        points: 30,
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 37, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 53, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 55, placement: [[0, 2], [0, 1]] },
        ],
        handList: [14, 17, 45],
        moves: [
            {
                dominoIndex: 14,
                placement: [[0, -1], [1, -2]],
                pitchLists: [
                    [1, 3, 10, 6],
                    [4, 1, 10, 8],
                ],
                points: 8,
            },
            {
                dominoIndex: 17,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [6, 10, 3, 1],
                    [4, 7, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 45,
                placement: [[2, -1], [2, -2]],
                pitchLists: [
                    [1, 7, 4],
                    [4, 1, 10],
                    [11, 7, 3],
                ],
                points: 9,
            },
        ],
        points: 26,
    },
    10: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 25, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 50, placement: [[2, 0], [2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 54, placement: [[1, 0], [0, 0]] },
        ],
    },
    11: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 26, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 9, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 3, placement: [[1, -3], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[3, -3], [2, -3]],
                pitchLists: [
                    [2, 0, 8, 5],
                    [5, 0, 9, 3],
                    [8, 3, 11],
                ],
                points: 11,
            },
        ],
    },
    12: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 23, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 3, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 42, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 9, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 54, placement: [[2, -1], [2, 0]] },
        ],
        handList: [49, 14, 60],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-2, 4], [-1, 3]],
                pitchLists: [
                    [4, 11, 7],
                    [8, 2, 11],
                ],
                points: 6,
            },
            {
                dominoIndex: 14,
                placement: [[0, 4], [-1, 4]],
                pitchLists: [
                    [7, 4, 1],
                    [8, 2, 11, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 49,
                placement: [[-2, 3], [-3, 4]],
                pitchLists: [
                    [1, 2, 5, 9],
                    [9, 7, 4, 1],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    13: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 7, placement: [[3, -1], [3, 0]] },
            { dominoIndex: 45, placement: [[3, -2], [4, -3]] },
            { dominoIndex: 62, placement: [[3, -3], [2, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 48, placement: [[1, -1], [2, -1]] },
        ],
    },
    14: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 43, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 4, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 41, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 16, placement: [[2, 0], [3, 0]] },
            { dominoIndex: 18, placement: [[1, 2], [0, 2]] },
        ],
        moves: [
            {
                dominoIndex: 49,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [0, 5, 9],
                    [9, 5, 1],
                    [1, 5, 8],
                    [4, 7, 1, 9],
                    [6, 9, 1],
                ],
                points: 16,
            },
        ],
    },
    15: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 41, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 18, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 30, placement: [[-3, 1], [-3, 2]] },
            { dominoIndex: 59, placement: [[-2, 1], [-2, 0]] },
            { dominoIndex: 14, placement: [[-5, 3], [-4, 3]] },
            { dominoIndex: 24, placement: [[-2, -1], [-3, 0]] },
        ],
        handList: [49, 50, 22],
        moves: [
            {
                dominoIndex: 49,
                placement: [[0, 1], [1, 0]],
                pitchLists: [
                    [2, 7, 11, 5],
                    [0, 5, 8],
                    [9, 5, 1],
                ],
                points: 10,
            },
            {
                dominoIndex: 50,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [0, 9, 5],
                    [10, 9, 5, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 22,
                placement: [[2, 1], [3, 0]],
                pitchLists: [
                    [10, 5, 2],
                    [0, 9, 5, 3],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 55, placement: [[2, -2], [2, -1]] },
            { dominoIndex: 15, placement: [[3, -1], [4, -1]] },
        ],
        handList: [43, 35, 38],
        moves: [
            {
                dominoIndex: 43,
                placement: [[3, -3], [3, -2]],
                pitchLists: [
                    [4, 9, 1],
                    [4, 6, 9, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 35,
                placement: [[2, 0], [3, 0]],
                pitchLists: [
                    [6, 10, 3],
                    [4, 9, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[1, 2], [2, 1]],
                pitchLists: [
                    [5, 8, 11, 3],
                    [6, 10, 3, 11],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    17: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 19, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 37, placement: [[-2, 1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 47, placement: [[0, 0], [0, -1]] },
        ],
    },
    18: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 14, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 58, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 30, placement: [[-2, 1], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 55,
                placement: [[1, -1], [0, -1]],
                pitchLists: [
                    [10, 6, 1],
                    [6, 3, 11, 7],
                    [10, 3, 7],
                ],
                points: 10,
            },
        ],
    },
    19: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 48, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 17, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 51, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 12, placement: [[-2, 3], [-2, 2]] },
            { dominoIndex: 30, placement: [[1, 1], [1, 0]] },
        ],
        handList: [63, 44, 37],
        moves: [
            {
                dominoIndex: 44,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [4, 7, 11, 2],
                    [10, 4, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 63,
                placement: [[-1, 0], [-1, 1]],
                pitchLists: [
                    [8, 5, 11],
                    [8, 11, 5],
                    [10, 4, 1, 8],
                    [11, 8, 2],
                    [7, 5, 11, 2],
                ],
                points: 17,
            },
            {
                dominoIndex: 37,
                placement: [[-1, -1], [-2, -1]],
                pitchLists: [
                    [10, 3, 1, 7],
                    [3, 8, 11, 5],
                ],
                points: 8,
            },
        ],
        points: 34,
    },
    20: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 5, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 24, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 18, placement: [[0, -1], [-1, -1]] },
            { dominoIndex: 28, placement: [[0, 2], [1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[0, 0], [-1, 0]] },
        ],
    },
    21: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 40, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 9, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 17, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 45, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 41, placement: [[1, 1], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 20,
                placement: [[2, 1], [3, 0]],
                pitchLists: [
                    [9, 4, 1],
                    [11, 4, 7, 1],
                    [10, 1, 7],
                    [4, 1, 7, 10],
                ],
                points: 14,
            },
        ],
    },
    22: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 51, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 9, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 34, placement: [[-4, 1], [-4, 2]] },
            { dominoIndex: 5, placement: [[-4, 3], [-3, 2]] },
            { dominoIndex: 65, placement: [[-3, 0], [-4, 0]] },
            { dominoIndex: 30, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 35, placement: [[-5, 3], [-6, 3]] },
            { dominoIndex: 25, placement: [[-3, -1], [-2, -1]] },
        ],
        handList: [28, 54, 18],
        moves: [
            {
                dominoIndex: 28,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [9, 2, 5, 11],
                    [2, 9, 5, 0],
                    [2, 6, 9],
                ],
                points: 11,
            },
            {
                dominoIndex: 54,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [2, 11, 6],
                    [9, 11, 5, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [9, 6, 1],
                    [2, 11, 6, 8],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 21, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 14, placement: [[2, 1], [2, 0]] },
        ],
        handList: [41, 63, 18],
        moves: [
            {
                dominoIndex: 41,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [4, 7, 1],
                    [7, 4, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 63,
                placement: [[1, -2], [2, -2]],
                pitchLists: [
                    [8, 11, 4],
                    [11, 7, 4, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[4, -2], [3, -1]],
                pitchLists: [
                    [8, 11, 4, 1],
                    [1, 8, 4, 11],
                ],
                points: 8,
            },
        ],
        points: 23,
    },
    24: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 1, placement: [[1, 1], [0, 2]] },
            { dominoIndex: 26, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 49, placement: [[-2, 0], [-2, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 44, placement: [[0, 1], [0, 0]] },
        ],
    },
    25: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 41, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 14, placement: [[-2, -1], [-1, -1]] },
            { dominoIndex: 55, placement: [[-2, 0], [-2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 63,
                placement: [[1, 0], [1, -1]],
                pitchLists: [
                    [6, 0, 3, 8],
                    [4, 11, 8],
                    [1, 4, 7, 11],
                ],
                points: 11,
            },
        ],
    },
    26: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 56, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 25, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 34, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 38, placement: [[2, 1], [1, 1]] },
            { dominoIndex: 55, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 18, placement: [[2, 2], [3, 1]] },
        ],
        handList: [41, 30, 8],
        moves: [
            {
                dominoIndex: 41,
                placement: [[4, 0], [3, 0]],
                pitchLists: [
                    [10, 7, 4],
                    [4, 8, 1],
                ],
                points: 6,
            },
            {
                dominoIndex: 30,
                placement: [[5, 0], [5, -1]],
                pitchLists: [
                    [10, 7, 4, 2],
                    [11, 4, 8, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 8,
                placement: [[4, -1], [5, -2]],
                pitchLists: [
                    [8, 0, 7, 3],
                    [8, 11, 2],
                ],
                points: 7,
            },
        ],
        points: 23,
    },
    27: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 10, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 7, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 43, placement: [[0, -2], [1, -3]] },
            { dominoIndex: 42, placement: [[2, 0], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 14, placement: [[0, 0], [1, -1]] },
        ],
    },
    28: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 35, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 7, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 3, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 44, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 59, placement: [[0, 1], [-1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[1, -3], [0, -2]],
                pitchLists: [
                    [5, 0, 8],
                    [5, 8, 0, 4],
                    [8, 0, 3],
                    [8, 3, 11, 7],
                ],
                points: 14,
            },
        ],
    },
    29: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 50, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 14, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 41, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 38, placement: [[2, 0], [3, -1]] },
            { dominoIndex: 1, placement: [[2, 1], [1, 2]] },
            { dominoIndex: 44, placement: [[3, -2], [4, -2]] },
        ],
        handList: [27, 18, 30],
        moves: [
            {
                dominoIndex: 27,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [5, 10, 2],
                    [11, 4, 2, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [8, 1, 4],
                    [1, 8, 4],
                    [8, 5, 10, 2],
                ],
                points: 10,
            },
            {
                dominoIndex: 30,
                placement: [[1, -3], [0, -2]],
                pitchLists: [
                    [2, 11, 8],
                    [11, 1, 8, 4],
                ],
                points: 7,
            },
        ],
        points: 26,
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 40, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 29, placement: [[3, -1], [2, 0]] },
        ],
        handList: [60, 18, 42],
        moves: [
            {
                dominoIndex: 60,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [3, 7, 11],
                    [2, 10, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 42,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [11, 8, 4],
                    [2, 10, 7, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 18,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [4, 1, 8],
                    [1, 11, 8, 4],
                    [8, 3, 7, 11],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    31: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 21, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 45, placement: [[2, -1], [3, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 59, placement: [[1, 0], [2, 0]] },
        ],
    },
}
