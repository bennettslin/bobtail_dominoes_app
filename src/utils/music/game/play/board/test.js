import { MOCK_BOARD } from '../../../../../__mocks__/board'
import { addMoveToBoard, generateBoard } from '.'
import { generatePool } from '../pool'

describe('generateBoard', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    })
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('generates board with first domino placed', () => {
        const pool = generatePool()
        expect(generateBoard(pool)).toStrictEqual({
            board: [{ dominoIndex: 9, placement: [[-1, 0], [0, 0]] }],
            pool: new Set([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66]),
        })
    })

    it('returns mutated pool', () => {
        const
            pool = generatePool(),
            { pool: returnedPool } = generateBoard(pool)
        expect(returnedPool).toBe(pool)
    })
})

describe('addMoveToBoard', () => {
    it('returns null if domino is already on board', () => {
        expect(addMoveToBoard(
            { dominoIndex: 49, placement: [[-2, 3], [-2, 2]] },
            [...MOCK_BOARD],
        )).toBeNull()
    })

    it('returns board with new move added', () => {
        expect(addMoveToBoard(
            { dominoIndex: 20, placement: [[-1, 2], [-1, 3]] },
            [...MOCK_BOARD],
        )).toStrictEqual([
            { dominoIndex: 4, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 54, placement: [[0, 2], [0, 1]] },
            { dominoIndex: 34, placement: [[0, -1], [-1, 0]] },
            { dominoIndex: 5, placement: [[-2, 1], [-1, 1]] },
            { dominoIndex: 30, placement: [[1, 1], [2, 0]] },
            { dominoIndex: 49, placement: [[-2, 3], [-2, 2]] },
            { dominoIndex: 20, placement: [[-1, 2], [-1, 3]] },
        ])
    })
})
