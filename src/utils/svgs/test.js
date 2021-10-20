import { getMergedStyles, hsl } from '.'

const
    MOCK_STYLES_A = {
        fill: {
            car: 'red',
            plane: 'blue',
        },
        stroke: {
            tree: 'purple',
            rock: 'green',
        },
    },
    MOCK_STYLES_B = {
        fill: {
            tree: 'orange',
            rock: 'yellow',
        },
        stroke: {
            house: 'turquoise',
            garage: 'magenta',
        },
    },
    MERGED_STYLES = {
        fill: {
            car: 'red',
            plane: 'blue',
            tree: 'orange',
            rock: 'yellow',
        },
        stroke: {
            tree: 'purple',
            rock: 'green',
            house: 'turquoise',
            garage: 'magenta',
        },
    }

describe('getMergedStyles', () => {
    it('returns single styles for single styles object', () => {
        expect(getMergedStyles(
            MOCK_STYLES_A,
        )).toStrictEqual(MOCK_STYLES_A)
    })

    it('returns merged styles for array of styles objects', () => {
        expect(getMergedStyles([
            MOCK_STYLES_A,
            MOCK_STYLES_B,
        ])).toStrictEqual(MERGED_STYLES)
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

