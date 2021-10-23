import { getAnimatedStyleConfig, getAnimationName, getAttacks, getKeyframesSequence } from '.'

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

describe('getKeyframesSequence', () => {
    it('returns keyframes for single attack', () => {
        expect(getKeyframesSequence({
            attacks: [MOCK_ATTACKS[0]],
            styleConfig: MOCK_STYLE_CONFIG,
            pathClassName: 'face',
        })).toStrictEqual([
            { fillStyle: 'pink', percentage: 9.804 },
            { fillStyle: 'hsl(30,73%,82%)', percentage: 9.805 },
            { fillStyle: 'hsl(30,73%,82%)', percentage: 21.568 },
            { fillStyle: 'pink', percentage: 21.569 },
        ])
    })

    it('returns keyframes for multiple attacks', () => {
        expect(getKeyframesSequence({
            attacks: MOCK_ATTACKS,
            styleConfig: MOCK_STYLE_CONFIG,
            pathClassName: 'face',
        })).toStrictEqual([
            { fillStyle: 'pink', percentage: 9.804 },
            { fillStyle: 'hsl(30,73%,82%)', percentage: 9.805 },
            { fillStyle: 'hsl(30,73%,82%)', percentage: 21.568 },
            { fillStyle: 'pink', percentage: 21.569 },
            { fillStyle: 'pink', percentage: 34.314 },
            { fillStyle: 'hsl(30,73%,82%)', percentage: 34.315 },
            { fillStyle: 'hsl(30,73%,82%)', percentage: 46.077 },
            { fillStyle: 'pink', percentage: 46.078 },
            { fillStyle: 'pink', percentage: 58.824 },
            { fillStyle: 'hsl(30,73%,82%)', percentage: 58.825 },
            { fillStyle: 'hsl(30,73%,82%)', percentage: 70.587 },
            { fillStyle: 'pink', percentage: 70.588 },
        ])
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
            className: 'mockClassName_01_1',
            keyframes: [
                {
                    animationName: 'mockClassName_edge_01_1',
                    sequence: [
                        { fillStyle: 'red', percentage: 9.804 },
                        { fillStyle: 'hsl(30,73%,72%)', percentage: 9.805 },
                        { fillStyle: 'hsl(30,73%,72%)', percentage: 21.568 },
                        { fillStyle: 'red', percentage: 21.569 },
                    ],
                },
                {
                    animationName: 'mockClassName_face_01_1',
                    sequence: [
                        { fillStyle: 'pink', percentage: 9.804 },
                        { fillStyle: 'hsl(30,73%,82%)', percentage: 9.805 },
                        { fillStyle: 'hsl(30,73%,82%)', percentage: 21.568 },
                        { fillStyle: 'pink', percentage: 21.569 },
                    ],
                },
            ],
            styles: {
                animation: {
                    edge: 'mockClassName_edge_01_1 1.02s',
                    face: 'mockClassName_face_01_1 1.02s',
                },
                fill: { edge: 'red', face: 'pink' },
            },
        })
    })

    it('returns style for played pitch config', () => {
        expect(getAnimatedStyleConfig(
            MOCK_STYLE_CONFIG,
            MOCK_PITCH_CONFIG,
        )).toStrictEqual({
            className: 'mockClassName_01_3',
            keyframes: [
                {
                    animationName: 'mockClassName_edge_01_3',
                    sequence: [
                        { fillStyle: 'red', percentage: 9.804 },
                        { fillStyle: 'hsl(30,73%,72%)', percentage: 9.805 },
                        { fillStyle: 'hsl(30,73%,72%)', percentage: 21.568 },
                        { fillStyle: 'red', percentage: 21.569 },
                        { fillStyle: 'red', percentage: 34.314 },
                        { fillStyle: 'hsl(30,73%,72%)', percentage: 34.315 },
                        { fillStyle: 'hsl(30,73%,72%)', percentage: 46.077 },
                        { fillStyle: 'red', percentage: 46.078 },
                        { fillStyle: 'red', percentage: 58.824 },
                        { fillStyle: 'hsl(30,73%,72%)', percentage: 58.825 },
                        { fillStyle: 'hsl(30,73%,72%)', percentage: 70.587 },
                        { fillStyle: 'red', percentage: 70.588 },
                    ],
                },
                {
                    animationName: 'mockClassName_face_01_3',
                    sequence: [
                        { fillStyle: 'pink', percentage: 9.804 },
                        { fillStyle: 'hsl(30,73%,82%)', percentage: 9.805 },
                        { fillStyle: 'hsl(30,73%,82%)', percentage: 21.568 },
                        { fillStyle: 'pink', percentage: 21.569 },
                        { fillStyle: 'pink', percentage: 34.314 },
                        { fillStyle: 'hsl(30,73%,82%)', percentage: 34.315 },
                        { fillStyle: 'hsl(30,73%,82%)', percentage: 46.077 },
                        { fillStyle: 'pink', percentage: 46.078 },
                        { fillStyle: 'pink', percentage: 58.824 },
                        { fillStyle: 'hsl(30,73%,82%)', percentage: 58.825 },
                        { fillStyle: 'hsl(30,73%,82%)', percentage: 70.587 },
                        { fillStyle: 'pink', percentage: 70.588 },
                    ],
                },
            ],
            styles: {
                animation: {
                    edge: 'mockClassName_edge_01_3 1.02s',
                    face: 'mockClassName_face_01_3 1.02s',
                },
                fill: { edge: 'red', face: 'pink' },
            },
        })
    })
})
