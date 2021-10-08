import { getRootLabel } from '.'
import { FLAT, SHARP } from '../../../../constants/music'

describe('getRootLabel', () => {
    test.each([
        // Undefined.
        [undefined, null],
        [-1, null],
        [0, 'C'],
        [1, `C${SHARP}/D${FLAT}`],
        [2, 'D'],
        [3, `D${SHARP}/E${FLAT}`],
        [4, 'E'],
        [5, 'F'],
        [6, `F${SHARP}/G${FLAT}`],
        [7, 'G'],
        [8, `G${SHARP}/A${FLAT}`],
        [9, 'A'],
        [10, `A${SHARP}/B${FLAT}`],
        [11, 'B'],
        [12, null],
    ])('%p returns root index %p', (primeFormKey, result) => {
        expect(getRootLabel(primeFormKey)).toBe(result)
    })
})
