import { getAnimatedStyleConfig, getNestedAttacks } from '.'

const MOCK_STYLE_CONFIG = {
    className: 'mockClassName',
    styles: {
        fill: {
            classA: 'styleA',
            classB: 'styleB',
        },
    },
}

const MOCK_PITCH_INDEX_CONFIG = {
    36: { pitchIndex: 36, attack: 0 },
}

const MOCK_PITCH_CONFIG = {
    0: {
        ...MOCK_PITCH_INDEX_CONFIG,
        48: { pitchIndex: 48, attack: 0.25 },
        60: { pitchIndex: 60, attack: 0.5 },
    },
}

describe('getNestedAttacks', () => {
    it('returns array of attacks for played pitch index config', () => {
        expect(getNestedAttacks(MOCK_PITCH_INDEX_CONFIG)).toStrictEqual([0])
    })

    it('returns array of attacks for played pitch config', () => {
        expect(
            getNestedAttacks(MOCK_PITCH_CONFIG),
        ).toStrictEqual([0, 0.25, 0.5])
    })
})

describe('getAnimatedStyleConfig', () => {
    it('returns style for played pitch index config', () => {
        expect(getAnimatedStyleConfig({
            styleConfig: MOCK_STYLE_CONFIG,
            playedConfigEntity: MOCK_PITCH_INDEX_CONFIG,
        })).toBe('Blah')
    })

    it('returns style for played pitch config', () => {
        expect(getAnimatedStyleConfig({
            styleConfig: MOCK_STYLE_CONFIG,
            playedConfigEntity: MOCK_PITCH_CONFIG,
        })).toBe('Blah')
    })
})
