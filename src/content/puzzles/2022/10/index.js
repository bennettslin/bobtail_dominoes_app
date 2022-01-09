import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

export default {
    1: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 6, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 60, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 16, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 3, placement: [[0, 1], [-1, 2]] },
            { dominoIndex: 49, placement: [[-2, 4], [-2, 3]] },
        ],
        moves: [
            {
                dominoIndex: 36,
                placement: [[-2, 1], [-3, 2]],
                pitchLists: [
                    [3, 9, 0],
                    [3, 0, 9, 5],
                    [6, 3, 9],
                    [9, 0, 3],
                ],
                points: 13,
            },
        ],
    },
    2: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 25, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 45, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 35, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 51, placement: [[2, 0], [1, 0]] },
            { dominoIndex: 48, placement: [[1, -2], [1, -1]] },
            { dominoIndex: 27, placement: [[1, -3], [2, -3]] },
            { dominoIndex: 65, placement: [[-2, 3], [-2, 2]] },
        ],
        handList: [24, 63, 30],
        moves: [
            {
                dominoIndex: 63,
                placement: [[3, -2], [2, -2]],
                pitchLists: [
                    [5, 11, 8],
                    [11, 8, 2],
                ],
                points: 6,
            },
            {
                dominoIndex: 24,
                placement: [[3, -4], [3, -3]],
                pitchLists: [
                    [2, 5, 8],
                    [2, 8, 5, 11],
                    [2, 8, 5],
                    [5, 11, 8, 2],
                ],
                points: 14,
            },
            {
                dominoIndex: 30,
                placement: [[4, -2], [3, -1]],
                pitchLists: [
                    [5, 11, 8, 2],
                    [2, 11, 5],
                    [2, 5, 8, 11],
                ],
                points: 11,
            },
        ],
        points: 33,
    },
    3: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 8, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 45, placement: [[-2, 2], [-1, 1]] },
            { dominoIndex: 42, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 18, placement: [[-2, 0], [-2, 1]] },
        ],
        handList: [20, 36, 11],
        moves: [
            {
                dominoIndex: 20,
                placement: [[-1, 2], [-2, 3]],
                pitchLists: [
                    [4, 1, 8],
                    [4, 1, 10],
                    [1, 8, 4, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 36,
                placement: [[1, 1], [1, 2]],
                pitchLists: [
                    [8, 11, 4, 3],
                    [4, 1, 8, 9],
                ],
                points: 8,
            },
            {
                dominoIndex: 11,
                placement: [[1, 3], [0, 3]],
                pitchLists: [
                    [3, 9, 0],
                    [0, 4, 8, 11],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    4: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 26, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 55, placement: [[0, 1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 65, placement: [[1, -1], [0, 0]] },
        ],
    },
    5: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 64, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 3, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 17, placement: [[0, -1], [-1, 0]] },
        ],
        moves: [
            {
                dominoIndex: 33,
                placement: [[-1, 2], [0, 1]],
                pitchLists: [
                    [7, 10, 3],
                    [0, 6, 3],
                    [1, 9, 6],
                ],
                points: 9,
            },
        ],
    },
    6: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 27, placement: [[-2, 2], [-3, 3]] },
            { dominoIndex: 15, placement: [[-3, 4], [-3, 5]] },
            { dominoIndex: 63, placement: [[-4, 2], [-3, 2]] },
            { dominoIndex: 44, placement: [[-1, 2], [-2, 3]] },
        ],
        handList: [8, 16, 50],
        moves: [
            {
                dominoIndex: 8,
                placement: [[-5, 5], [-4, 5]],
                pitchLists: [
                    [0, 8, 5],
                    [4, 10, 1, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 16,
                placement: [[-2, 5], [-2, 4]],
                pitchLists: [
                    [0, 8, 5, 1],
                    [2, 10, 6, 1],
                ],
                points: 8,
            },
            {
                dominoIndex: 50,
                placement: [[0, 3], [-1, 4]],
                pitchLists: [
                    [5, 10, 1],
                    [1, 6, 10],
                ],
                points: 6,
            },
        ],
        points: 23,
    },
    7: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 7, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 8, placement: [[-2, 4], [-1, 4]] },
            { dominoIndex: 49, placement: [[1, 2], [0, 2]] },
            { dominoIndex: 63, placement: [[1, 1], [1, 0]] },
        ],
        missingMoves: [
            { dominoIndex: 4, placement: [[-1, 2], [-1, 3]] },
        ],
    },
    8: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 30, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 55, placement: [[4, -1], [4, 0]] },
            { dominoIndex: 34, placement: [[4, -2], [5, -3]] },
            { dominoIndex: 45, placement: [[3, -3], [4, -3]] },
            { dominoIndex: 18, placement: [[6, -3], [6, -4]] },
        ],
        moves: [
            {
                dominoIndex: 7,
                placement: [[2, -2], [3, -2]],
                pitchLists: [
                    [0, 7, 3],
                    [4, 0, 7, 9],
                    [4, 7, 11],
                    [11, 7, 2],
                ],
                points: 13,
            },
        ],
    },
    9: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[1, 0], [0, 0]] },
            { dominoIndex: 25, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 29, placement: [[1, 2], [0, 3]] },
            { dominoIndex: 54, placement: [[2, 1], [2, 2]] },
            { dominoIndex: 2, placement: [[3, 2], [2, 3]] },
            { dominoIndex: 49, placement: [[3, 1], [3, 0]] },
            { dominoIndex: 13, placement: [[2, 4], [3, 3]] },
        ],
        handList: [6, 19, 37],
        moves: [
            {
                dominoIndex: 6,
                placement: [[4, 0], [5, 0]],
                pitchLists: [
                    [9, 0, 6],
                    [0, 5, 9],
                ],
                points: 6,
            },
            {
                dominoIndex: 37,
                placement: [[5, -1], [5, -2]],
                pitchLists: [
                    [10, 3, 6],
                    [3, 0, 5, 9],
                ],
                points: 7,
            },
            {
                dominoIndex: 19,
                placement: [[5, 1], [4, 1]],
                pitchLists: [
                    [6, 5, 9, 1],
                    [10, 3, 6, 1],
                    [6, 9, 0, 2],
                ],
                points: 12,
            },
        ],
        points: 27,
    },
    10: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 12, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 49, placement: [[3, -3], [2, -2]] },
            { dominoIndex: 27, placement: [[3, -2], [3, -1]] },
        ],
        handList: [14, 50, 66],
        moves: [
            {
                dominoIndex: 14,
                placement: [[2, 0], [2, -1]],
                pitchLists: [
                    [9, 4, 1],
                    [1, 4, 8],
                ],
                points: 6,
            },
            {
                dominoIndex: 50,
                placement: [[4, -2], [4, -1]],
                pitchLists: [
                    [9, 2, 5],
                    [5, 8, 1],
                    [1, 4, 8, 10],
                ],
                points: 10,
            },
            {
                dominoIndex: 66,
                placement: [[5, -3], [5, -2]],
                pitchLists: [
                    [10, 5, 8, 1],
                    [9, 2, 5, 11],
                ],
                points: 8,
            },
        ],
        points: 26,
    },
    11: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 60, placement: [[-1, 1], [-2, 2]] },
            { dominoIndex: 6, placement: [[2, -1], [3, -1]] },
            { dominoIndex: 18, placement: [[0, -2], [0, -1]] },
        ],
        missingMoves: [
            { dominoIndex: 31, placement: [[1, -1], [0, 0]] },
        ],
    },
    12: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 14, placement: [[1, -1], [0, 0]] },
            { dominoIndex: 27, placement: [[-1, 0], [-1, 1]] },
            { dominoIndex: 55, placement: [[1, -2], [2, -2]] },
            { dominoIndex: 36, placement: [[0, -2], [1, -3]] },
        ],
        moves: [
            {
                dominoIndex: 56,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [11, 6, 2, 8],
                    [9, 3, 6],
                    [11, 3, 6, 10],
                ],
                points: 11,
            },
        ],
    },
    13: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 11, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 49, placement: [[1, 1], [2, 1]] },
            { dominoIndex: 15, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 61, placement: [[-1, 3], [-2, 3]] },
            { dominoIndex: 25, placement: [[1, 0], [2, 0]] },
        ],
        handList: [48, 1, 41],
        moves: [
            {
                dominoIndex: 48,
                placement: [[2, -2], [1, -1]],
                pitchLists: [
                    [5, 8, 11, 1],
                    [8, 2, 5],
                ],
                points: 7,
            },
            {
                dominoIndex: 1,
                placement: [[1, 2], [2, 2]],
                pitchLists: [
                    [8, 2, 5, 0],
                    [6, 9, 1],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[4, -1], [3, 0]],
                pitchLists: [
                    [4, 7, 9, 0],
                    [11, 2, 6, 7],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
    14: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 49, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 38, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 48, placement: [[-1, -1], [-2, 0]] },
            { dominoIndex: 9, placement: [[1, -3], [1, -2]] },
        ],
        missingMoves: [
            { dominoIndex: 18, placement: [[0, -2], [0, -1]] },
        ],
    },
    15: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 38, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 27, placement: [[-1, -1], [-1, 0]] },
            { dominoIndex: 26, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 59, placement: [[1, -1], [0, -1]] },
            { dominoIndex: 44, placement: [[2, -1], [2, -2]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[0, 1], [-1, 1]],
                pitchLists: [
                    [11, 7, 2],
                    [10, 3, 7],
                    [4, 11, 7],
                    [2, 8, 11],
                    [10, 7, 3, 11],
                ],
                points: 16,
            },
        ],
    },
    16: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 4, placement: [[0, 0], [0, -1]] },
            { dominoIndex: 35, placement: [[0, -3], [0, -2]] },
            { dominoIndex: 48, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 24, placement: [[1, -2], [1, -3]] },
            { dominoIndex: 45, placement: [[3, -3], [3, -2]] },
            { dominoIndex: 8, placement: [[2, -1], [2, 0]] },
            { dominoIndex: 59, placement: [[2, -5], [1, -4]] },
        ],
        handList: [17, 3, 9],
        moves: [
            {
                dominoIndex: 17,
                placement: [[2, -4], [3, -4]],
                pitchLists: [
                    [10, 1, 7],
                    [1, 5, 8],
                    [7, 4, 11],
                ],
                points: 9,
            },
            {
                dominoIndex: 3,
                placement: [[3, -5], [4, -5]],
                pitchLists: [
                    [7, 0, 3],
                    [0, 7, 4, 11],
                    [0, 1, 5, 8],
                ],
                points: 11,
            },
            {
                dominoIndex: 9,
                placement: [[5, -6], [5, -5]],
                pitchLists: [
                    [0, 3, 7],
                    [7, 0, 3, 9],
                ],
                points: 7,
            },
        ],
        points: 29,
    },
    17: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 34, placement: [[-1, 1], [0, 0]] },
            { dominoIndex: 7, placement: [[1, -1], [2, -1]] },
            { dominoIndex: 27, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 14, placement: [[0, -2], [0, -1]] },
        ],
        handList: [48, 9, 4],
        moves: [
            {
                dominoIndex: 48,
                placement: [[-2, 0], [-1, -1]],
                pitchLists: [
                    [5, 2, 8],
                    [1, 8, 5],
                    [8, 4, 0, 7],
                ],
                points: 10,
            },
            {
                dominoIndex: 9,
                placement: [[1, -3], [0, -3]],
                pitchLists: [
                    [0, 1, 8, 5],
                    [9, 1, 4, 7],
                ],
                points: 8,
            },
            {
                dominoIndex: 4,
                placement: [[-1, -2], [-1, -3]],
                pitchLists: [
                    [4, 0, 8],
                    [4, 9, 0],
                ],
                points: 6,
            },
        ],
        points: 26,
    },
    18: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 5, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 33, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 56, placement: [[1, 1], [0, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 29, placement: [[0, 2], [-1, 3]] },
        ],
    },
    19: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 30, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 26, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 22, placement: [[1, -3], [0, -2]] },
            { dominoIndex: 48, placement: [[2, -1], [1, -1]] },
        ],
        moves: [
            {
                dominoIndex: 56,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [3, 11, 6],
                    [6, 8, 11, 2],
                    [2, 11, 8],
                ],
                points: 10,
            },
        ],
    },
    20: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 63, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 42, placement: [[0, 1], [0, 2]] },
            { dominoIndex: 35, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 38, placement: [[1, -3], [1, -2]] },
            { dominoIndex: 41, placement: [[2, -2], [3, -2]] },
            { dominoIndex: 5, placement: [[-1, -1], [-1, -2]] },
        ],
        handList: [17, 36, 45],
        moves: [
            {
                dominoIndex: 17,
                placement: [[-1, 1], [-2, 1]],
                pitchLists: [
                    [7, 1, 4],
                    [5, 0, 8, 1],
                    [4, 8, 11, 1],
                    [11, 3, 8, 7],
                ],
                points: 15,
            },
            {
                dominoIndex: 36,
                placement: [[-2, 0], [-3, 1]],
                pitchLists: [
                    [3, 8, 11],
                    [0, 3, 9],
                    [9, 7, 1, 4],
                ],
                points: 10,
            },
            {
                dominoIndex: 45,
                placement: [[-2, -1], [-2, -2]],
                pitchLists: [
                    [4, 0, 3, 8],
                    [11, 4, 3, 7],
                ],
                points: 8,
            },
        ],
        points: 35,
    },
    21: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 45, placement: [[-3, 0], [-2, 0]] },
            { dominoIndex: 50, placement: [[0, -2], [0, -1]] },
            { dominoIndex: 27, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 44, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 16, placement: [[-1, 3], [-2, 3]] },
        ],
        missingMoves: [
            { dominoIndex: 17, placement: [[0, 0], [-1, 0]] },
        ],
    },
    22: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 24, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 61, placement: [[-1, 2], [0, 2]] },
            { dominoIndex: 27, placement: [[1, -1], [2, -2]] },
            { dominoIndex: 63, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 51, placement: [[2, -1], [1, 0]] },
            { dominoIndex: 60, placement: [[-2, 1], [-1, 1]] },
        ],
        moves: [
            {
                dominoIndex: 25,
                placement: [[2, 0], [1, 1]],
                pitchLists: [
                    [5, 11, 2],
                    [8, 5, 2],
                    [2, 6, 9],
                    [7, 11, 2, 6],
                    [2, 11, 6],
                ],
                points: 16,
            },
        ],
    },
    23: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 32, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 63, placement: [[-2, 0], [-1, 0]] },
            { dominoIndex: 45, placement: [[-2, 1], [-2, 2]] },
            { dominoIndex: 60, placement: [[0, -1], [0, -2]] },
            { dominoIndex: 59, placement: [[-1, 1], [0, 1]] },
            { dominoIndex: 33, placement: [[-2, 3], [-3, 3]] },
            { dominoIndex: 8, placement: [[1, 1], [1, 2]] },
        ],
        handList: [37, 34, 55],
        moves: [
            {
                dominoIndex: 34,
                placement: [[1, -2], [2, -2]],
                pitchLists: [
                    [11, 3, 7],
                    [3, 7, 11, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 37,
                placement: [[-1, -1], [-1, -2]],
                pitchLists: [
                    [10, 3, 11, 7],
                    [11, 3, 8],
                    [10, 11, 3, 7],
                ],
                points: 11,
            },
            {
                dominoIndex: 55,
                placement: [[1, -3], [1, -4]],
                pitchLists: [
                    [10, 6, 3],
                    [6, 11, 3, 8],
                ],
                points: 7,
            },
        ],
        points: 27,
    },
    24: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 6, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 38, placement: [[1, 0], [0, 1]] },
            { dominoIndex: 52, placement: [[3, -2], [2, -1]] },
        ],
        handList: [44, 30, 34],
        moves: [
            {
                dominoIndex: 44,
                placement: [[2, 1], [2, 0]],
                pitchLists: [
                    [7, 10, 4],
                    [6, 0, 3, 10],
                ],
                points: 7,
            },
            {
                dominoIndex: 30,
                placement: [[2, -2], [1, -2]],
                pitchLists: [
                    [11, 2, 6],
                    [2, 7, 10, 4],
                ],
                points: 7,
            },
            {
                dominoIndex: 34,
                placement: [[0, -1], [0, -2]],
                pitchLists: [
                    [7, 3, 0, 11],
                    [11, 3, 6],
                    [7, 11, 2, 6],
                ],
                points: 11,
            },
        ],
        points: 27,
    },
    25: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 58, placement: [[0, -1], [1, -1]] },
            { dominoIndex: 9, placement: [[-3, 1], [-2, 1]] },
            { dominoIndex: 32, placement: [[0, 1], [-1, 2]] },
        ],
        missingMoves: [
            { dominoIndex: 6, placement: [[0, 0], [-1, 1]] },
        ],
    },
    26: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 31, placement: [[0, 0], [1, -1]] },
            { dominoIndex: 17, placement: [[-1, -1], [0, -1]] },
            { dominoIndex: 4, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 66, placement: [[0, -2], [1, -2]] },
        ],
        moves: [
            {
                dominoIndex: 60,
                placement: [[-2, 0], [-2, -1]],
                pitchLists: [
                    [7, 0, 3],
                    [11, 7, 4],
                    [10, 1, 7],
                    [11, 1, 7, 4],
                ],
                points: 13,
            },
        ],
    },
    27: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 50, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 25, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 15, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 27, placement: [[-1, 2], [-1, 1]] },
            { dominoIndex: 49, placement: [[0, -2], [1, -2]] },
        ],
        handList: [30, 54, 14],
        moves: [
            {
                dominoIndex: 30,
                placement: [[0, -1], [-1, -1]],
                pitchLists: [
                    [11, 2, 5],
                    [5, 2, 10],
                    [9, 2, 5],
                    [11, 5, 8, 2],
                ],
                points: 13,
            },
            {
                dominoIndex: 54,
                placement: [[3, -2], [2, -1]],
                pitchLists: [
                    [5, 9, 1, 6],
                    [6, 9, 2],
                    [11, 2, 5, 9],
                    [1, 9, 6],
                ],
                points: 14,
            },
            {
                dominoIndex: 14,
                placement: [[1, 1], [2, 1]],
                pitchLists: [
                    [9, 5, 2, 1],
                    [1, 9, 6, 4],
                ],
                points: 8,
            },
        ],
        points: 37,
    },
    28: {
        puzzleType: MISSING_PUZZLE_TYPE,
        board: [
            { dominoIndex: 17, placement: [[0, 1], [0, 0]] },
            { dominoIndex: 19, placement: [[1, 2], [1, 1]] },
            { dominoIndex: 48, placement: [[0, 3], [-1, 4]] },
            { dominoIndex: 4, placement: [[-1, 0], [-1, 1]] },
        ],
        missingMoves: [
            { dominoIndex: 59, placement: [[-1, 2], [0, 2]] },
        ],
    },
    29: {
        puzzleType: MAXIMUM_PUZZLE_TYPE,
        board: [
            { dominoIndex: 28, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 50, placement: [[1, 0], [2, 0]] },
            { dominoIndex: 25, placement: [[1, -2], [0, -1]] },
            { dominoIndex: 49, placement: [[2, -2], [1, -1]] },
            { dominoIndex: 10, placement: [[1, -3], [2, -3]] },
        ],
        moves: [
            {
                dominoIndex: 36,
                placement: [[-1, -1], [0, -2]],
                pitchLists: [
                    [3, 6, 9],
                    [0, 9, 3],
                    [9, 2, 5],
                    [9, 6, 2],
                ],
                points: 12,
            },
        ],
    },
    30: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 65, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 34, placement: [[-1, 2], [-1, 3]] },
            { dominoIndex: 53, placement: [[-1, 0], [-2, 1]] },
            { dominoIndex: 3, placement: [[-2, 0], [-3, 1]] },
            { dominoIndex: 25, placement: [[-3, 0], [-4, 1]] },
            { dominoIndex: 50, placement: [[-2, -1], [-1, -2]] },
            { dominoIndex: 36, placement: [[-4, 3], [-4, 2]] },
            { dominoIndex: 15, placement: [[-2, -2], [-3, -2]] },
        ],
        handList: [60, 56, 30],
        moves: [
            {
                dominoIndex: 56,
                placement: [[-5, 3], [-6, 3]],
                pitchLists: [
                    [11, 6, 3],
                    [0, 3, 9, 6],
                ],
                points: 7,
            },
            {
                dominoIndex: 60,
                placement: [[-3, 3], [-3, 2]],
                pitchLists: [
                    [11, 6, 3, 7],
                    [2, 3, 11, 7],
                    [6, 8, 11, 3],
                ],
                points: 12,
            },
            {
                dominoIndex: 30,
                placement: [[-5, 5], [-4, 4]],
                pitchLists: [
                    [7, 11, 2],
                    [6, 9, 3, 11],
                ],
                points: 7,
            },
        ],
        points: 28,
    },
    31: {
        puzzleType: REGULAR_PUZZLE_TYPE,
        board: [
            { dominoIndex: 66, placement: [[0, 0], [-1, 0]] },
            { dominoIndex: 24, placement: [[-1, 1], [-1, 2]] },
            { dominoIndex: 28, placement: [[-2, -1], [-1, -1]] },
        ],
        handList: [15, 8, 41],
        moves: [
            {
                dominoIndex: 15,
                placement: [[0, -1], [1, -1]],
                pitchLists: [
                    [2, 9, 1, 5],
                    [5, 10, 2],
                ],
                points: 7,
            },
            {
                dominoIndex: 8,
                placement: [[-3, 2], [-2, 2]],
                pitchLists: [
                    [0, 8, 5],
                    [5, 10, 2, 8],
                ],
                points: 7,
            },
            {
                dominoIndex: 41,
                placement: [[0, 2], [0, 1]],
                pitchLists: [
                    [0, 8, 5, 4],
                    [1, 10, 7, 4],
                ],
                points: 8,
            },
        ],
        points: 24,
    },
}
