import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 23, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 19, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 63, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 51, placement: [[-1, 2], [-2, 2]] },
            { dominoIndex: 35, placement: [[1, 2], [2, 1]] },
        ],
        moves: [
            {
                dominoIndex: 5,
                placement: [[1, 1], [2, 0]],
                pitchLists: [
                    [4, 0, 8],
                    [9, 0, 3],
                    [5, 0, 8],
                    [2, 9, 5],
                    [1, 5, 8],
                ],
                points: 15,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 42, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 4, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 8, placement: [[1, 2], [1, 3]] },
            { dominoIndex: 7, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 58, placement: [[0, 2], [-1, 3]] },
            { dominoIndex: 41, placement: [[2, -1], [2, -2]] },
            { dominoIndex: 37, placement: [[4, -2], [3, -2]] },
        ],
        handList: [30, 16, 20],
        moves: [
            {
                dominoIndex: 30,
                placement: [[1, -2], [2, -3]],
                pitchLists: [
                    [2, 7, 10, 3],
                    [11, 2, 8],
                    [11, 7, 4, 0],
                ],
                points: 11,
            },
            {
                dominoIndex: 16,
                placement: [[3, -3], [3, -4]],
                pitchLists: [
                    [6, 1, 10],
                    [6, 11, 2, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 20,
                placement: [[5, -4], [4, -4]],
                pitchLists: [
                    [6, 10, 1],
                    [10, 1, 7],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 9, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 50, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 48, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 12, placement: [[1, -1], [2, -1]] },
        ],
        handList: [38, 18, 55],
        moves: [
            {
                dominoIndex: 38,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [3, 9, 0, 5],
                ],
                points: 4,
            },
            {
                dominoIndex: 18,
                placement: [[-3, 2], [-4, 2]],
                pitchLists: [
                    [8, 1, 5],
                    [3, 11, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 55,
                placement: [[-5, 3], [-5, 2]],
                pitchLists: [
                    [3, 11, 8, 6],
                    [10, 8, 1, 5],
                ],
                points: 8,
            },
        ],
        points: 20,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 40, placement: [[-2, 0], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 9, placement: [[0, 0], [-1, 0]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 62, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 5, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 22, placement: [[-1, -2], [-2, -1]] },
            { dominoIndex: 34, placement: [[0, -2], [0, -1]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[1, -4], [0, -3]],
                pitchLists: [
                    [7, 11, 2, 3],
                    [11, 3, 7, 10],
                ],
                points: 8,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 27, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 59, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 16, placement: [[-3, 2], [-3, 3]] },
            { dominoIndex: 44, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 17, placement: [[-2, 3], [-2, 4]] },
            { dominoIndex: 40, placement: [[-4, 3], [-4, 2]] },
        ],
        handList: [28, 42, 14],
        moves: [
            {
                dominoIndex: 14,
                placement: [[-1, 4], [0, 4]],
                pitchLists: [
                    [7, 1, 4],
                    [7, 4, 10, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 28,
                placement: [[-3, 5], [-3, 4]],
                pitchLists: [
                    [1, 6, 9, 2],
                    [10, 7, 2],
                    [9, 7, 1, 4],
                    [4, 1, 9],
                ],
                points: 14,
            },
            {
                dominoIndex: 42,
                placement: [[-4, 6], [-4, 5]],
                pitchLists: [
                    [10, 7, 2, 4],
                    [4, 1, 9, 8],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 42, placement: [[0, -1], [1, -2]] },
            { dominoIndex: 34, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 45, placement: [[-3, 0], [-2, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 8, placement: [[-1, 0], [0, 0]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 14, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 42, placement: [[-1, 1], [-2, 1]] },
            { dominoIndex: 10, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 25, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 51, placement: [[-2, 2], [-2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[2, 0], [1, 1]],
                pitchLists: [
                    [8, 3, 0],
                    [0, 9, 4],
                    [8, 4, 1, 9],
                    [6, 0, 3, 9],
                ],
                points: 14,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 35, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 8, placement: [[1, 0], [1, 1]] },
            { dominoIndex: 44, placement: [[-2, 0], [-2, 1]] },
            { dominoIndex: 52, placement: [[-3, 2], [-2, 2]] },
            { dominoIndex: 45, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 41, placement: [[3, -2], [2, -1]] },
            { dominoIndex: 7, placement: [[-1, -1], [-1, -2]] },
        ],
        handList: [48, 30, 4],
        moves: [
            {
                dominoIndex: 48,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [5, 11, 8],
                    [8, 5, 0, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[0, -3], [-1, -3]],
                pitchLists: [
                    [11, 2, 8],
                    [2, 5, 11, 8],
                    [11, 7, 0, 3],
                ],
                points: 11,
            },
            {
                dominoIndex: 4,
                placement: [[2, -2], [2, -3]],
                pitchLists: [
                    [4, 0, 7],
                    [0, 4, 8],
                    [11, 2, 8, 4],
                ],
                points: 10,
            },
        ],
        points: 30,
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 9, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 57, placement: [[0, 1], [0, 2]] },
        ],
        handList: [41, 14, 21],
        moves: [
            {
                dominoIndex: 41,
                placement: [[2, -1], [1, -1]],
                pitchLists: [
                    [11, 7, 4],
                    [4, 0, 7],
                ],
                points: 6,
            },
            {
                dominoIndex: 21,
                placement: [[3, -1], [3, -2]],
                pitchLists: [
                    [11, 7, 4, 1],
                    [11, 4, 0, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 14,
                placement: [[2, 1], [1, 1]],
                pitchLists: [
                    [7, 4, 1],
                    [4, 9, 1],
                    [7, 0, 4],
                    [1, 9, 4, 8],
                ],
                points: 13,
            },
        ],
        points: 29,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 36, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 49, placement: [[0, 3], [1, 3]] },
            { dominoIndex: 6, placement: [[-1, 3], [-2, 4]] },
        ],
        missingMoves: [
            { dominoIndex: 3, placement: [[0, 1], [0, 2]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 54, placement: [[-1, 2], [-2, 3]] },
            { dominoIndex: 38, placement: [[0, 2], [1, 2]] },
            { dominoIndex: 35, placement: [[1, 0], [1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-1, 1], [-2, 2]],
                pitchLists: [
                    [3, 0, 8],
                    [6, 3, 10],
                    [10, 6, 3, 11],
                ],
                points: 10,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 3, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 52, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 63, placement: [[2, 0], [1, 1]] },
            { dominoIndex: 38, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 54, placement: [[-1, 1], [-2, 2]] },
        ],
        handList: [29, 26, 24],
        moves: [
            {
                dominoIndex: 29,
                placement: [[0, 2], [0, 3]],
                pitchLists: [
                    [3, 7, 2, 10],
                    [8, 11, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 26,
                placement: [[1, 3], [1, 2]],
                pitchLists: [
                    [6, 11, 7, 2],
                    [2, 7, 11],
                    [3, 7, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 24,
                placement: [[-1, 4], [-1, 3]],
                pitchLists: [
                    [3, 7, 10, 2],
                    [5, 10, 2],
                    [8, 11, 2, 5],
                ],
                points: 11,
            },
        ],
        points: 30,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 30, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 14, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 63, placement: [[1, 1], [0, 1]] },
            { dominoIndex: 41, placement: [[-2, 1], [-1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 53, placement: [[1, -1], [0, 0]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 26, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 49, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 38, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 8, placement: [[1, 1], [1, 2]] },
            { dominoIndex: 33, placement: [[-1, 4], [-1, 3]] },
            { dominoIndex: 55, placement: [[-2, 5], [-1, 5]] },
        ],
        moves: [
            {
                dominoIndex: 30,
                placement: [[-2, 3], [-1, 2]],
                pitchLists: [
                    [2, 6, 11],
                    [5, 7, 11, 2],
                    [11, 3, 8],
                    [11, 6, 3, 10],
                ],
                points: 14,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 6, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 4, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 28, placement: [[-2, -1], [-1, -1]] },
            { dominoIndex: 14, placement: [[-3, 1], [-2, 0]] },
            { dominoIndex: 49, placement: [[-3, 0], [-4, 1]] },
            { dominoIndex: 24, placement: [[-4, 3], [-4, 2]] },
        ],
        handList: [9, 54, 15],
        moves: [
            {
                dominoIndex: 9,
                placement: [[-5, 2], [-6, 2]],
                pitchLists: [
                    [9, 0, 5],
                    [2, 5, 9, 0],
                ],
                points: 7,
            },
            {
                dominoIndex: 54,
                placement: [[-5, 1], [-5, 0]],
                pitchLists: [
                    [6, 9, 1],
                    [9, 6, 0],
                ],
                points: 6,
            },
            {
                dominoIndex: 15,
                placement: [[-7, 2], [-6, 1]],
                pitchLists: [
                    [1, 9, 0, 5],
                    [9, 5, 1],
                    [5, 6, 9, 1],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 41, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 49, placement: [[1, -4], [0, -3]] },
            { dominoIndex: 20, placement: [[2, -1], [1, -1]] },
        ],
        handList: [13, 58, 4],
        moves: [
            {
                dominoIndex: 13,
                placement: [[-1, -2], [-1, -1]],
                pitchLists: [
                    [5, 9, 1],
                    [3, 7, 10, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 58,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [1, 4, 9, 7],
                    [7, 10, 1, 5],
                ],
                points: 8,
            },
            {
                dominoIndex: 4,
                placement: [[3, -4], [2, -3]],
                pitchLists: [
                    [0, 4, 9, 7],
                    [4, 7, 1],
                ],
                points: 7,
            },
        ],
        points: 24,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 15, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 5, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 27, placement: [[-1, 0], [-1, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 63, placement: [[0, 0], [-1, 1]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 29, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 14, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 19, placement: [[1, 1], [1, 2]] },
        ],
        moves: [
            {
                dominoIndex: 48,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [5, 8, 1],
                    [5, 2, 10],
                    [8, 4, 1, 9],
                ],
                points: 10,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 49, placement: [[0, 2], [0, 3]] },
            { dominoIndex: 8, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 5, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 12, placement: [[-3, 3], [-3, 2]] },
        ],
        handList: [39, 55, 19],
        moves: [
            {
                dominoIndex: 19,
                placement: [[2, 0], [1, 1]],
                pitchLists: [
                    [1, 9, 5],
                    [5, 1, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 39,
                placement: [[-1, 3], [-2, 3]],
                pitchLists: [
                    [1, 5, 4, 9],
                    [0, 5, 8, 4],
                    [1, 9, 5, 4],
                    [1, 8, 5],
                ],
                points: 15,
            },
            {
                dominoIndex: 55,
                placement: [[-3, 5], [-3, 4]],
                pitchLists: [
                    [2, 1, 10, 6],
                    [1, 8, 5, 10],
                ],
                points: 8,
            },
        ],
        points: 31,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 42, placement: [[2, -3], [1, -2]] },
            { dominoIndex: 24, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 18, placement: [[1, 0], [2, -1]] },
            { dominoIndex: 54, placement: [[-2, 2], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 9, placement: [[0, -1], [0, 0]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 8, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 49, placement: [[-1, -3], [-1, -2]] },
            { dominoIndex: 41, placement: [[-1, 0], [-2, 0]] },
            { dominoIndex: 19, placement: [[1, -2], [1, -3]] },
        ],
        moves: [
            {
                dominoIndex: 14,
                placement: [[0, -3], [0, -2]],
                pitchLists: [
                    [5, 1, 9],
                    [1, 4, 8, 10],
                    [9, 4, 1],
                    [9, 4, 0, 7],
                ],
                points: 14,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 47, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 48, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 18, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 19, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 54, placement: [[-3, 0], [-3, 1]] },
            { dominoIndex: 25, placement: [[-2, 3], [-1, 2]] },
        ],
        handList: [3, 63, 14],
        moves: [
            {
                dominoIndex: 3,
                placement: [[-4, 2], [-3, 2]],
                pitchLists: [
                    [0, 3, 8, 6],
                    [5, 1, 9, 0],
                    [6, 9, 3],
                ],
                points: 11,
            },
            {
                dominoIndex: 63,
                placement: [[-4, 3], [-3, 3]],
                pitchLists: [
                    [8, 11, 2],
                    [6, 9, 3, 11],
                    [4, 1, 8, 11],
                ],
                points: 11,
            },
            {
                dominoIndex: 14,
                placement: [[-5, 1], [-4, 1]],
                pitchLists: [
                    [1, 4, 9],
                    [4, 0, 8],
                ],
                points: 6,
            },
        ],
        points: 30,
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 33, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 37, placement: [[2, -3], [2, -2]] },
            { dominoIndex: 55, placement: [[1, -2], [0, -1]] },
        ],
        handList: [38, 7],
        moves: [
            {
                dominoIndex: 7,
                placement: [[3, -3], [4, -3]],
                pitchLists: [
                    [3, 0, 7],
                    [0, 10, 3, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 38,
                placement: [[0, -2], [1, -3]],
                pitchLists: [
                    [3, 6, 10],
                    [3, 10, 6],
                    [11, 3, 0, 7],
                    [11, 6, 3],
                ],
                points: 13,
            },
        ],
        points: 20,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 46, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 41, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 48, placement: [[-2, 3], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 30, placement: [[0, 1], [0, 2]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 18, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 24, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 31, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 55, placement: [[0, -1], [-1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 9,
                placement: [[1, 0], [0, 1]],
                pitchLists: [
                    [4, 8, 1, 0],
                    [0, 9, 5],
                    [6, 1, 9],
                ],
                points: 10,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 48, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 29, placement: [[-2, 2], [-1, 2]] },
            { dominoIndex: 8, placement: [[-1, -1], [0, -2]] },
            { dominoIndex: 24, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 47, placement: [[0, 2], [-1, 3]] },
        ],
        handList: [36, 51, 19],
        moves: [
            {
                dominoIndex: 51,
                placement: [[-1, -2], [-2, -2]],
                pitchLists: [
                    [11, 5, 8],
                    [11, 2, 5],
                ],
                points: 6,
            },
            {
                dominoIndex: 36,
                placement: [[-3, 1], [-3, 0]],
                pitchLists: [
                    [8, 0, 5, 3],
                    [5, 2, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[0, -3], [-1, -3]],
                pitchLists: [
                    [1, 8, 5, 11],
                    [1, 5, 2, 9],
                    [9, 5, 0],
                ],
                points: 11,
            },
        ],
        points: 26,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 60, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 24, placement: [[2, -2], [1, -2]] },
            { dominoIndex: 55, placement: [[3, -3], [3, -2]] },
            { dominoIndex: 38, placement: [[-1, -1], [-2, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 45, placement: [[0, -1], [0, 0]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 55, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 41, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 28, placement: [[0, 1], [1, 1]] },
            { dominoIndex: 2, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 38, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 16, placement: [[2, 0], [1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 37,
                placement: [[-1, 0], [-1, -1]],
                pitchLists: [
                    [3, 10, 6, 1],
                    [10, 3, 6],
                    [7, 3, 0],
                    [10, 7, 3, 11],
                ],
                points: 14,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 19, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 16, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 45, placement: [[0, -2], [1, -2]] },
            { dominoIndex: 48, placement: [[1, -4], [1, -3]] },
            { dominoIndex: 42, placement: [[-1, -3], [-1, -2]] },
            { dominoIndex: 64, placement: [[-2, -1], [-2, 0]] },
            { dominoIndex: 29, placement: [[0, -4], [-1, -4]] },
        ],
        handList: [3, 24, 20],
        moves: [
            {
                dominoIndex: 3,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [8, 4, 11, 0],
                    [0, 3, 9],
                    [9, 1, 6, 3],
                    [5, 8, 11, 3],
                ],
                points: 15,
            },
            {
                dominoIndex: 24,
                placement: [[2, -3], [3, -3]],
                pitchLists: [
                    [8, 2, 5],
                    [2, 11, 6],
                    [5, 0, 3, 9],
                ],
                points: 10,
            },
            {
                dominoIndex: 20,
                placement: [[3, -5], [3, -4]],
                pitchLists: [
                    [1, 10, 5],
                    [10, 2, 11, 6],
                ],
                points: 7,
            },
        ],
        points: 34,
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 2, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 63, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 54, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 43, placement: [[-1, 0], [-2, 1]] },
        ],
        handList: [51, 34, 9],
        moves: [
            {
                dominoIndex: 34,
                placement: [[-3, 1], [-3, 2]],
                pitchLists: [
                    [0, 4, 9, 7],
                ],
                points: 4,
            },
            {
                dominoIndex: 51,
                placement: [[-2, 2], [-1, 1]],
                pitchLists: [
                    [2, 11, 5],
                    [3, 9, 11, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 9,
                placement: [[-3, 4], [-3, 3]],
                pitchLists: [
                    [3, 7, 9, 0],
                    [2, 11, 5, 9],
                ],
                points: 8,
            },
        ],
        points: 21,
    },
}
