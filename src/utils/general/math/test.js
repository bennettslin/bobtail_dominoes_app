import { mod, round } from '.'

describe('mod', () => {
    test.each([
        [-5, 7, 2],
        [4, 7, 4],
        [7, 7, 0],
        [10, 7, 3],
    ])('%p and %p returns %p', (number, modulus, result) => {
        expect(mod(number, modulus)).toBe(result)
    })
})

describe('round', () => {
    test.each([
        [0, undefined, 0],
        [5, undefined, 5],
        [10, undefined, 10],
        [3.7, undefined, 3.7],
        [7.23, undefined, 7.23],
        [4.3142, undefined, 4.314],
        [10.8195, undefined, 10.82],
        [7.2, 4, 7.2],
        [8.2649135, 5, 8.26491],
    ])('%p to %p decimals returns %p', (number, decimalPlaces, result) => {
        expect(round(number, decimalPlaces)).toBe(result)
    })
})
