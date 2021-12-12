import { addMovesToBoard, addMoveToBoard, getInitialBoard } from '.'
import { getInitialExtendedPool } from '../pool'
import { MOCK_BOARD } from '../../../../__mocks__/board'

describe('getInitialBoard', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('generates board with first domino removed from pool and placed', () => {
        const pool = getInitialExtendedPool()
        expect(getInitialBoard(pool)).toStrictEqual([
            { dominoIndex: 9, placement: [[0, 0], [1, 0]] },
        ])
        expect(pool).toStrictEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66]))
    })
})

describe('addMoveToBoard', () => {
    it('returns board with new move added', () => {
        expect(addMoveToBoard(
            {
                dominoIndex: 54,
                playerIndex: 0,
                placement: [[0, 2], [0, 1]],
                pitchSets: [new Set([0, 9, 6])],
                points: 3,
            },
            [MOCK_BOARD[0]],
        )).toStrictEqual([
            { dominoIndex: 4, placement: [[0, 0], [1, 0]] },
            {
                dominoIndex: 54,
                playerIndex: 0,
                placement: [[0, 2], [0, 1]],
                pitchSets: [new Set([0, 9, 6])],
                points: 3,
            },
        ])
    })
})

describe('addMovesToBoard', () => {
    it('returns board with new moves added', () => {
        expect(addMovesToBoard({
            playerIndex: 1,
            moves: [
                {
                    dominoIndex: 34,
                    placement: [[0, -1], [-1, 0]],
                    pitchSets: [
                        new Set([3, 0, 9, 6]),
                        new Set([7, 0, 4]),
                    ],
                },
                {
                    dominoIndex: 5,
                    placement: [[-2, 1], [-1, 1]],
                    pitchSets: [
                        new Set([0, 5, 9]),
                        new Set([3, 7, 0]),
                    ],
                },
            ],
            board: [MOCK_BOARD[0], MOCK_BOARD[1]],
        })).toStrictEqual([
            { dominoIndex: 4, placement: [[0, 0], [1, 0]] },
            {
                dominoIndex: 54,
                playerIndex: 0,
                pitchSets: [new Set([0, 9, 6])],
                placement: [[0, 2], [0, 1]],
            },
            {
                dominoIndex: 34,
                playerIndex: 1,
                pitchSets: [
                    new Set([3, 0, 9, 6]),
                    new Set([7, 0, 4]),
                ],
                placement: [[0, -1], [-1, 0]],
            },
            {
                dominoIndex: 5,
                playerIndex: 1,
                pitchSets: [
                    new Set([0, 5, 9]),
                    new Set([3, 7, 0]),
                ],
                placement: [[-2, 1], [-1, 1]],
            },
        ])
    })
})

