import { getChordsForPlacement } from '.'
import { MOCK_BOARD } from '../../../../../__mocks__/board'

const getProps = (dominoIndex, placement, board = MOCK_BOARD) => ({
    dominoIndex, placement, board,
})

describe('getChordsForPlacement', () => {
    test.each([
        // Conflicting placement.
        [getProps(20, [[0, 0], [-1, 1]]), null],
        // Isolated placement.
        [getProps(20, [[50, 0], [51, 0]]), null],
        // Duplicates.
        [getProps(45, [[2, -1], [3, -1]]), null],
        // Invalid sonorities.
        [getProps(20, [[-1, 3], [-1, 2]]), null],
        // Long (and also invalid) sonorities.
        [getProps(20, [[2, 1], [3, 0]]), null],
        // Only dyads.
        [getProps(20, [[-1, 1], [0, 1]], [MOCK_BOARD[0]]), null],
        // First domino.
        [
            getProps(20, [[0, 0], [1, 0]], []),
            { pitchSets: [], points: 0 },
        ],
        // Single chord.
        [
            getProps(20, [[-3, 4], [-4, 5]]),
            { pitchSets: [new Set([5, 1, 10])], points: 3 },
        ],
        // Two chords.
        [
            getProps(20, [[2, -1], [3, -1]]),
            {
                pitchSets: [
                    new Set([1, 4, 9]),
                    new Set([10, 11, 2, 6]),
                ],
                points: 7,
            },
        ],
        // Many chords.
        [
            getProps(20, [[-1, 2], [-1, 3]]),
            {
                pitchSets: [
                    new Set([9, 1, 6]),
                    new Set([7, 5, 1, 10]),
                    new Set([4, 9, 1, 5]),
                    new Set([10, 11, 2, 6]),
                ],
                points: 15,
            },
        ],
    ])('%p returns %p', (props, result) => {
        expect(getChordsForPlacement(props)).toStrictEqual(result)
    })
})
