import { addToMatrix, getFlattenedMatrix } from '.'
// import { MOCK_BOARD } from '../../../../__mocks__/board'

describe('addToMatrix', () => {
    it('returns original matrix if value already present', () => {
        expect(addToMatrix({
            coordinates: [[0, 0], [0, 1]],
            matrix: {},
        })).toBe({})
    })

    it('returns mutated matrix if value is new addition', () => {
        expect(addToMatrix({
            coordinates: [[0, 0], [0, 1]],
            matrix: {},
        })).toBe({})
    })
})

describe('getFlattenedMatrix', () => {
    it('returns empty array for empty matrix', () => {
        expect(getFlattenedMatrix({})).toStrictEqual([])
    })

    it('returns flattened array for matrix', () => {
        expect(getFlattenedMatrix({})).toStrictEqual([])
    })
})
