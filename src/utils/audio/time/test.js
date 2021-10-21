import { getPlayedPitchConfigs } from '.'

describe('getPlayedPitchConfigs', () => {
    test.each([
        [undefined, {}],
        [new Set(), {}],
        [new Set([6]), {
            6: {
                42: { attack: 0, duration: 0.33, pitchIndex: 42 },
                54: { attack: 0.33, duration: 0.33, pitchIndex: 54 },
                66: { attack: 0.66, duration: 0.33, pitchIndex: 66 },
            },
        }],
        [new Set([2, 11]), {
            2: {
                38: { attack: 0, duration: 0.165, pitchIndex: 38 },
                50: { attack: 0.33, duration: 0.165, pitchIndex: 50 },
                62: { attack: 0.66, duration: 0.165, pitchIndex: 62 },
            },
            11: {
                47: { attack: 0.165, duration: 0.165, pitchIndex: 47 },
                59: { attack: 0.495, duration: 0.165, pitchIndex: 59 },
                71: { attack: 0.825, duration: 0.165, pitchIndex: 71 },
            },
        }],
    ])('%p returns played pitch config %p', (set, result) => {
        expect(getPlayedPitchConfigs(set)).toStrictEqual(result)
    })
})
