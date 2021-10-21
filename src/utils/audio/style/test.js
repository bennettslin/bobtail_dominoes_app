import { getAnimatedStyleConfig, getAnimationName, getNestedAttacks } from '.'

const MOCK_STYLE_CONFIG = {
    className: 'mockClassName',
    styles: {
        fill: {
            classA: 'styleA',
            classB: 'styleB',
        },
    },
}

const MOCK_PITCH_INDEX_CONFIG = { pitchIndex: 36, attack: 0 }

const MOCK_PITCH_CONFIG = {
    36: MOCK_PITCH_INDEX_CONFIG,
    48: { pitchIndex: 48, attack: 0.25 },
    60: { pitchIndex: 60, attack: 0.5 },
}

describe('getNestedAttacks', () => {
    it('returns null for no played config', () => {
        expect(getNestedAttacks()).toBeNull()
    })

    it('returns array of attacks for played pitch index config', () => {
        expect(getNestedAttacks(MOCK_PITCH_INDEX_CONFIG)).toStrictEqual([0])
    })

    it('returns array of attacks for played pitch config', () => {
        expect(getNestedAttacks(
            MOCK_PITCH_CONFIG,
        )).toStrictEqual([0, 0.25, 0.5])
    })
})

describe('getAnimationName', () => {
    test.each([
        [[0], 'mockClassName', 'mockClassName_0_1'],
        [[0.1, 0.3, 0.5], 'mockClassName', 'mockClassName_01_3'],
    ])('%p && %p return %p', (attacks, className, result) => {
        expect(getAnimationName(attacks, className)).toStrictEqual(result)
    })
})

describe('getAnimatedStyleConfig', () => {
    it('returns style config for no played config', () => {
        expect(getAnimatedStyleConfig(
            MOCK_STYLE_CONFIG,
        )).toStrictEqual(MOCK_STYLE_CONFIG)
    })

    it('returns style for played pitch index config', () => {
        expect(getAnimatedStyleConfig(
            MOCK_STYLE_CONFIG,
            MOCK_PITCH_INDEX_CONFIG,
        )).toStrictEqual(MOCK_STYLE_CONFIG)
    })

    it('returns style for played pitch config', () => {
        expect(getAnimatedStyleConfig(
            MOCK_STYLE_CONFIG,
            MOCK_PITCH_CONFIG,
        )).toStrictEqual(MOCK_STYLE_CONFIG)
    })
})
