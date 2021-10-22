import { getAnimatedStyleConfig, getAnimationName, getSounds } from '.'

const MOCK_STYLE_CONFIG = {
    className: 'mockClassName',
    styles: {
        fill: {
            face: 'pink',
            edge: 'red',
        },
    },
}

const MOCK_PITCH_INDEX_CONFIG = { pitchIndex: 36, attack: 0.1, duration: 0.25 }

const MOCK_PITCH_CONFIG = {
    36: MOCK_PITCH_INDEX_CONFIG,
    48: { pitchIndex: 48, attack: 0.35, duration: 0.25 },
    60: { pitchIndex: 60, attack: 0.6, duration: 0.25 },
}

const MOCK_SOUNDS = [
    { attack: 0.1, duration: 0.25 },
    { attack: 0.35, duration: 0.25 },
    { attack: 0.6, duration: 0.25 },
]

describe('getSounds', () => {
    it('returns null for no played config', () => {
        expect(getSounds()).toBeNull()
    })

    it('returns array of attacks for played pitch index config', () => {
        expect(getSounds(MOCK_PITCH_INDEX_CONFIG)).toStrictEqual(
            [MOCK_SOUNDS[0]],
        )
    })

    it('returns array of attacks for played pitch config', () => {
        expect(getSounds(
            MOCK_PITCH_CONFIG,
        )).toStrictEqual(MOCK_SOUNDS)
    })
})

describe('getAnimationName', () => {
    test.each([
        [{
            sounds: MOCK_SOUNDS,
            className: 'mockClassName',
        }, 'mockClassName_01_3'],
        [{
            sounds: [MOCK_SOUNDS[0]],
            className: 'mockClassName',
            pathClassName: 'edge',
        }, 'mockClassName_edge_01_1'],
        [{
            sounds: MOCK_SOUNDS,
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
