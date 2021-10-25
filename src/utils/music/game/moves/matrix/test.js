import { addToMatrix, getFlattenedMatrix } from '.'

const MOCK_MATRIX = { 15: { '-15': 5, '-16': 2 } }

describe('addToMatrix', () => {
    it('returns same matrix if value already present', () => {
        const
            matrix = JSON.parse(JSON.stringify(MOCK_MATRIX)),
            result = addToMatrix({
                coordinates: [15, -15],
                matrix,
                value: 5,
            })
        expect(result).toStrictEqual({ 15: { '-15': 5, '-16': 2 } })
    })

    it('returns mutated matrix if value is new addition', () => {
        const
            matrix = JSON.parse(JSON.stringify(MOCK_MATRIX)),
            result = addToMatrix({
                coordinates: [15, -14],
                matrix,
                value: 9,
            })
        expect(result).toStrictEqual({ 15: { '-14': 9, '-15': 5, '-16': 2 } })
    })

    it('returns mutated matrix', () => {
        const
            matrix = JSON.parse(JSON.stringify(MOCK_MATRIX)),
            result = addToMatrix({
                coordinates: [15, -14],
                matrix,
                value: 9,
            })
        expect(result).toBe(matrix)
    })
})

describe('getFlattenedMatrix', () => {
    it('returns empty array for empty matrix', () => {
        expect(getFlattenedMatrix({})).toStrictEqual([])
    })

    it('returns flattened array for matrix', () => {
        expect(getFlattenedMatrix(MOCK_MATRIX)).toStrictEqual([
            [15, -15], [15, -16],
        ])
    })
})
