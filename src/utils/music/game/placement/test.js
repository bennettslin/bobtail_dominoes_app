import { getValidPlacements } from '.'
import { MOCK_BOARD } from '../../../../__mocks__/board'

describe('getValidPlacements', () => {
    it('returns array for first domino', () => {
        expect(getValidPlacements({
            dominoIndex: 20, board: [],
        })).toStrictEqual([
            { dominoIndex: 20, placement: [[-1, 0], [0, 0]] },
            { dominoIndex: 20, placement: [[0, 0], [1, 0]] },
            { dominoIndex: 20, placement: [[0, 0], [0, 1]] },
            { dominoIndex: 20, placement: [[0, 0], [-1, 1]] },
            { dominoIndex: 20, placement: [[0, -1], [0, 0]] },
            { dominoIndex: 20, placement: [[1, -1], [0, 0]] },
        ])
    })

    it('returns empty array if no valid placements', () => {
        expect(getValidPlacements({
            dominoIndex: 13, board: [MOCK_BOARD[0]],
        })).toStrictEqual([])
    })

    it('returns array of single valid placement', () => {
        expect(getValidPlacements({
            dominoIndex: 20, board: [MOCK_BOARD[0]],
        })).toStrictEqual([
            {
                dominoIndex: 20,
                pitchSets: [new Set([4, 1, 10])],
                placement: [[0, 1], [-1, 2]],
                points: 3,
            },
            {
                dominoIndex: 20,
                pitchSets: [new Set([1, 10, 4])],
                placement: [[1, -2], [1, -1]],
                points: 3,
            },
            {
                dominoIndex: 20,
                pitchSets: [new Set([4, 1, 10])],
                placement: [[1, 1], [1, 2]],
                points: 3,
            },
            {
                dominoIndex: 20,
                pitchSets: [new Set([1, 4, 10])],
                placement: [[3, -2], [2, -1]],
                points: 3,
            },
        ])
    })

    it('returns array of multiple valid placements', () => {
        expect(getValidPlacements({
            dominoIndex: 20, board: MOCK_BOARD,
        })).toStrictEqual([
            {
                dominoIndex: 20,
                pitchSets: [
                    new Set([9, 1, 6]),
                    new Set([7, 5, 1, 10]),
                    new Set([4, 9, 1, 5]),
                    new Set([11, 2, 6, 10]),
                ],
                placement: [[-1, 2], [-1, 3]],
                points: 15,
            },
            {
                dominoIndex: 20,
                pitchSets: [
                    new Set([1, 4, 9]),
                    new Set([10, 11, 2, 6]),
                ],
                placement: [[2, -1], [3, -1]],
                points: 7,
            },
            {
                dominoIndex: 20,
                pitchSets: [new Set([1, 10, 7, 5])],
                placement: [[-1, -2], [-1, -1]],
                points: 4,
            },
            {
                dominoIndex: 20,
                pitchSets: [new Set([10, 3, 7, 0])],
                placement: [[1, -3], [1, -2]],
                points: 4,
            },
            {
                dominoIndex: 20,
                pitchSets: [new Set([10, 11, 2, 6])],
                placement: [[3, -2], [3, -1]],
                points: 4,
            },
            {
                dominoIndex: 20,
                pitchSets: [new Set([0, 9, 5, 1])],
                placement: [[-2, 4], [-1, 4]],
                points: 4,
            },
            {
                dominoIndex: 20,
                pitchSets: [new Set([0, 9, 5, 1])],
                placement: [[-2, 4], [-3, 5]],
                points: 4,
            },
            {
                dominoIndex: 20,
                pitchSets: [new Set([0, 5, 9, 1])],
                placement: [[-3, 3], [-3, 4]],
                points: 4,
            },
            {
                dominoIndex: 20,
                pitchSets: [new Set([5, 1, 10])],
                placement: [[-3, 4], [-4, 5]],
                points: 3,
            },
        ])
    })
})
