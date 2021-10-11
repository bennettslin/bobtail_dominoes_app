import { getStyleConfig, hsl } from '.'

const
    MOCK_STYLES_0 = {
        fill: {
            classA: 'styleA',
            classB: 'styleB',
        },
        stroke: {
            classC: 'styleC',
            classD: 'styleD',
        },
    },
    MOCK_STYLES_1 = {
        fill: {
            classE: 'styleE',
            classF: 'styleF',
        },
        stroke: {
            classG: 'styleG',
            classH: 'styleH',
        },
    },
    MERGED_STYLES = {
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
    }

describe('getStyleConfig', () => {
    it('returns style config for single styles object', () => {
        expect(getStyleConfig(
            'mockClassName',
            MOCK_STYLES_0,
        )).toStrictEqual({
            className: 'mockClassName',
            styles: MOCK_STYLES_0,
        })
    })

    it('returns style config for array of styles objects', () => {
        expect(getStyleConfig(
            'mockClassName',
            [
                MOCK_STYLES_0,
                MOCK_STYLES_1,
            ],
        )).toStrictEqual({
            className: 'mockClassName',
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

