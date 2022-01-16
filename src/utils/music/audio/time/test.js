import { getPitchConfigs } from '.'

describe('getPitchConfigs', () => {
    test.each([
        [undefined, {}],
        [new Set(), {}],
        [new Set([6]), {
            6: {
                42: { attack: 0, pitchIndex: 42 },
                54: { attack: 0.3, pitchIndex: 54 },
                66: { attack: 0.6, pitchIndex: 66 },
            },
        }],
        [new Set([2, 11]), {
            2: {
                38: { attack: 0, pitchIndex: 38 },
                50: { attack: 0.3, pitchIndex: 50 },
                62: { attack: 0.6, pitchIndex: 62 },
            },
            11: {
                47: { attack: 0.15, pitchIndex: 47 },
                59: { attack: 0.45, pitchIndex: 59 },
                71: { attack: 0.75, pitchIndex: 71 },
            },
        }],
    ])('%p returns played pitch config %p', (set, result) => {
        expect(getPitchConfigs(set)).toStrictEqual(result)
    })
})
