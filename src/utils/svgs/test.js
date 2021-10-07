import { getMergedStyles, hsl } from '.'

describe('getMergedStyles', () => {
    it('returns merged styles', () => {
        expect(getMergedStyles([
            {
                fill: {
                    classA: 'styleA',
                    classB: 'styleB',
                },
                stroke: {
                    classC: 'styleC',
                    classD: 'styleD',
                },
            },
            {
                fill: {
                    classE: 'styleE',
                    classF: 'styleF',
                },
                stroke: {
                    classG: 'styleG',
                    classH: 'styleH',
                },
            },
        ])).toStrictEqual({
            fill: {
                classA: 'styleA',
                classB: 'styleB',
                classE: 'styleE',
                classF: 'styleF',
            },
            stroke: {
                classC: 'styleC',
                classD: 'styleD',
                classG: 'styleG',
                classH: 'styleH',
            },
        })
    })
})

describe('hsl', () => {
    it('returns hsl style', () => {
        expect(hsl(0, 10, 20)).toBe('hsl(0,10%,20%)')
    })

    it('returns hsla style', () => {
        expect(hsl(5, 15, 25, 0.5)).toBe('hsla(5,15%,25%,0.5)')
    })
})

