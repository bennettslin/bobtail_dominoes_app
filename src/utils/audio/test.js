import { getPitchConfig, getAudioPitchSymbol, getPitchIndices } from '.'

describe('getPitchConfig', () => {
    test.each([
        [0, { pitch: 0, register: 0 }],
        [5, { pitch: 5, register: 0 }],
        [10, { pitch: 10, register: 0 }],
        [15, { pitch: 3, register: 1 }],
        [20, { pitch: 8, register: 1 }],
        [25, { pitch: 1, register: 2 }],
        [30, { pitch: 6, register: 2 }],
        [35, { pitch: 11, register: 2 }],
        [40, { pitch: 4, register: 3 }],
        [45, { pitch: 9, register: 3 }],
        [50, { pitch: 2, register: 4 }],
        [55, { pitch: 7, register: 4 }],
    ])('%p returns %p', (pitchIndex, result) => {
        expect(getPitchConfig(pitchIndex)).toStrictEqual(result)
    })
})

describe('getAudioPitchSymbol', () => {
    test.each([
        [0, 'C0'],
        [5, 'F0'],
        [10, 'A#0'],
        [15, 'D#1'],
        [20, 'G#1'],
        [25, 'C#2'],
        [30, 'F#2'],
        [35, 'B2'],
        [40, 'E3'],
        [45, 'A3'],
        [50, 'D4'],
        [55, 'G4'],
    ])('%p returns %p', (pitchIndex, result) => {
        expect(getAudioPitchSymbol(pitchIndex)).toBe(result)
    })
})

describe('getPitchIndices', () => {
    test.each([
        [undefined, []],
        [new Set(), []],
        [new Set([3]), [39, 51, 63]],
        [new Set([3, 10]), [39, 46, 51, 58, 63, 70]],
        [new Set([3, 6, 10]), [39, 42, 46, 51, 54, 58, 63, 66, 70]],
    ])('%p returns %p', (pitchSet, result) => {
        expect(getPitchIndices(pitchSet)).toStrictEqual(result)
    })
})
