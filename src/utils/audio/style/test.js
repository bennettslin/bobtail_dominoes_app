import { getAnimatedStyleConfig, getAnimationName, getAttacks } from '.'

const MOCK_STYLE_CONFIG = {
    className: 'mockClassName',
    styles: {
        fill: {
            face: 'pink',
            edge: 'red',
        },
    },
}

const MOCK_PITCH_INDEX_CONFIG = {
    pitchIndex: 36, attack: 0.1,
}

const MOCK_PITCH_CONFIG = {
    36: MOCK_PITCH_INDEX_CONFIG,
    48: { pitchIndex: 48, attack: 0.35 },
    60: { pitchIndex: 60, attack: 0.6 },
}

const MOCK_ATTACKS = [0.1, 0.35, 0.6]

describe('getAttacks', () => {
    it('returns null for no played config', () => {
        expect(getAttacks()).toBeNull()
    })

    it('returns array of attacks for played pitch index config', () => {
        expect(getAttacks(MOCK_PITCH_INDEX_CONFIG)).toStrictEqual(
            [MOCK_ATTACKS[0]],
        )
    })

    it('returns array of attacks for played pitch config', () => {
        expect(getAttacks(
            MOCK_PITCH_CONFIG,
        )).toStrictEqual(MOCK_ATTACKS)
    })
})

describe('getAnimationName', () => {
    test.each([
        [{
            attacks: MOCK_ATTACKS,
            className: 'mockClassName',
        }, 'mockClassName_01_3'],
        [{
            attacks: [MOCK_ATTACKS[0]],
            className: 'mockClassName',
            pathClassName: 'edge',
        }, 'mockClassName_edge_01_1'],
        [{
            attacks: MOCK_ATTACKS,
            className: 'mockClassName',
            pathClassName: 'face',
        }, 'mockClassName_face_01_3'],
    ])('%p returns %p', (args, result) => {
        expect(getAnimationName(args)).toStrictEqual(result)
    })
})

describe('getAnimatedStyleConfig', () => {
    it('returns style config for no played config', () => {
        expect(getAnimatedStyleConfig(
            MOCK_STYLE_CONFIG,
        )).toStrictEqual(MOCK_STYLE_CONFIG)
    })

    it.skip('returns style for played pitch index config', () => {
        expect(getAnimatedStyleConfig(
            MOCK_STYLE_CONFIG,
            MOCK_PITCH_INDEX_CONFIG,
        )).toStrictEqual({
            className: 'mockClassName_0_1',
            keyframes: [
                {
                    animationName: 'mockClassName_edge_0_1',
                    sequence: [
                        { percentage: 0, fillStyle: 'red' },
                    ],
                },
                {
                    animationName: 'mockClassName_face_0_1',
                    sequence: [
                        { percentage: 0, fillStyle: 'red' },
                    ],
                },
            ],
        })
    })

    it.skip('returns style for played pitch config', () => {
        expect(getAnimatedStyleConfig(
            MOCK_STYLE_CONFIG,
            MOCK_PITCH_CONFIG,
        )).toStrictEqual({
            className: 'mockClassName_0_1',
            keyframes: [
                {
                    animationName: 'mockClassName_edge_0_1',
                    sequence: [
                        { percentage: 0, fillStyle: 'red' },
                    ],
                },
                {
                    animationName: 'mockClassName_face_0_1',
                    sequence: [
                        { percentage: 0, fillStyle: 'red' },
                    ],
                },
            ],
        })
    })
})
