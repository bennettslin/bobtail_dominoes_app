import { getAnimatedStyleConfig, getAnimationName, getNestedAttacks } from '.'

const MOCK_STYLE_CONFIG = {
    className: 'mockClassName',
    styles: {
        fill: {
            face: 'pink',
            edge: 'red',
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
        [{
            attacks: [0, 0.25, 0.5],
            className: 'mockClassName',
        }, 'mockClassName_0_3'],
        [{
            attacks: [0],
            className: 'mockClassName',
            pathClassName: 'edge',
        }, 'mockClassName_edge_0_1'],
        [{
            attacks: [0.1, 0.3, 0.5],
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

    it('returns style for played pitch index config', () => {
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

    it('returns style for played pitch config', () => {
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
