import { mod12 } from '.'

describe('mod12', () => {
    it('returns correct number for less than zero', () => {
        expect(mod12(-5)).toBe(7)
    })

    it('returns same number for less than 12', () => {
        expect(mod12(5)).toBe(5)
    })

    it('returns correct number for 12', () => {
        expect(mod12(12)).toBe(0)
    })

    it('returns correct number for greater than 12', () => {
        expect(mod12(15)).toBe(3)
    })
})
