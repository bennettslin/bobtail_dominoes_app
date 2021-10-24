import { getPointsForPlacement } from '.'
import { MOCK_BOARD } from '../../../../../__mocks__/board'

const getProps = (dominoIndex, placement, board = MOCK_BOARD) => ({
    dominoIndex, placement, board,
})

describe('getPointsForPlacement', () => {
    test.each([
        // Conflicting placement.
        [getProps(20, [[0, 0], [-1, 1]]), -1],
        // Isolated placement.
        [getProps(20, [[50, 0], [51, 0]]), -1],
        // Duplicates.
        [getProps(45, [[2, -1], [3, -1]]), -1],
        // Invalid sonorities.
        [getProps(20, [[-1, 3], [-1, 2]]), -1],
        // Long (and also invalid) sonorities.
        [getProps(20, [[2, 1], [3, 0]]), -1],
        // Only dyads.
        [getProps(20, [[-1, 1], [0, 1]], [MOCK_BOARD[0]]), -1],
        // First domino.
        [getProps(20, [[0, 0], [1, 0]], []), 0],
        // Single chord.
        [getProps(20, [[-3, 4], [-4, 5]]), 3],
        // Two chords.
        [getProps(20, [[2, -1], [3, -1]]), 7],
        // Many chords.
        [getProps(20, [[-1, 2], [-1, 3]]), 15],
    ])('%p returns %p', (props, result) => {
        expect(getPointsForPlacement(props)).toBe(result)
    })
})
