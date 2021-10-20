import { getStyleConfig, hsl } from '.'

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

describe('getStyleConfig', () => {
    it('returns style config for single styles object', () => {
        expect(getStyleConfig(
            'scenery',
            MOCK_STYLES_A,
        )).toStrictEqual({
            className: 'scenery',
            styles: MOCK_STYLES_A,
        })
    })

    it('returns style config for array of styles objects', () => {
        expect(getStyleConfig(
            'scenery',
            [
                MOCK_STYLES_A,
                MOCK_STYLES_B,
            ],
        )).toStrictEqual({
            className: 'scenery',
            styles: MERGED_STYLES,
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

