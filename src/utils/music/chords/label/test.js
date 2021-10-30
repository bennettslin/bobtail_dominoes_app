import {
    getChordAbbreviation, getChordAbbreviationsList, getChordLabel, getDominoLabel, getIsPitchBlack, getIsSymmetricalChord,
} from '.'

describe('getIsPitchBlack', () => {
    test.each([
        [0, false], [1, true], [2, false], [3, true], [4, false], [5, false], [6, true], [7, false], [8, true], [9, false], [10, true], [11, false],
    ])('%p returns %p', (pitch, result) => {
        expect(getIsPitchBlack(pitch)).toBe(result)
    })
})

describe('getIsSymmetricalChord', () => {
    test.each([
        [new Set([5, 8, 2]), false],
        [new Set([4, 0, 8]), true],
        [new Set([10, 7, 4, 1]), true],
    ])('%p returns %p', (pitchSet, result) => {
        expect(getIsSymmetricalChord(pitchSet)).toBe(result)
    })
})

describe('getChordAbbreviation', () => {
    test.each([
        [undefined, {}],
        [new Set(), {}],
        [new Set([3]), {}],
        [new Set([3, 10]), {}],
        [new Set([3, 6, 10]), { root: `D♯`, type: 'm' }],
        [new Set([11, 7, 2]), { root: 'G' }],
        [new Set([5, 8, 2]), { root: 'D', sup: 'o' }],
        [new Set([4, 0, 8]), { root: 'C-E-A♭', type: '+' }],
        [new Set([11, 0, 6]), {}],
        [new Set([2, 4, 7, 11]), { root: 'E', type: 'm', sup: '7' }],
        [new Set([11, 9, 6, 3]), { root: 'B', sup: '7' }],
        [new Set([1, 6, 5, 10]), { root: `G♭`, type: 'maj', sup: '7' }],
        [new Set([9, 4, 8, 0]), { root: 'A', type: 'm', sup: 'M7' }],
        [new Set([11, 2, 6, 8]), { root: `G♯`, sup: 'ø7' }],
        [new Set([10, 7, 4, 1]), { root: `C♯-E-G-A♯`, sup: 'o7' }],
        [new Set([2, 9, 6, 10]), { root: `B♭`, type: '+', sup: 'M7' }],
        [new Set([2, 0, 7, 5]), {}],
        [new Set([9, 3, 7, 1, 5]), {}],
    ])('%p returns %p', (pitchSet, result) => {
        expect(getChordAbbreviation(pitchSet)).toStrictEqual(result)
    })
})

describe('getChordLabel', () => {
    test.each([
        [undefined, null],
        [new Set(), null],
        [new Set([3]), null],
        [new Set([3, 10]), null],
        [new Set([3, 6, 10]), `D♯ minor triad`],
        [new Set([11, 7, 2]), 'G major triad'],
        [new Set([5, 8, 2]), 'D diminished triad'],
        [new Set([4, 0, 8]), `C-E-A♭ augmented triad`],
        [new Set([11, 0, 6]), null],
        [new Set([2, 4, 7, 11]), 'E minor seventh'],
        [new Set([11, 9, 6, 3]), 'B dominant seventh'],
        [new Set([1, 6, 5, 10]), `G♭ major seventh`],
        [new Set([9, 4, 8, 0]), `A minor-major seventh`],
        [new Set([11, 2, 6, 8]), `G♯ half-diminished seventh`],
        [new Set([10, 7, 4, 1]), `C♯-E-G-A♯ diminished seventh`],
        [new Set([2, 9, 6, 10]), `B♭ augmented major seventh`],
        [new Set([2, 0, 7, 5]), null],
        [new Set([9, 3, 7, 1, 5]), null],
    ])('%p returns %p', (pitchSet, result) => {
        expect(getChordLabel(pitchSet)).toBe(result)
    })
})

describe('getDominoLabel', () => {
    test.each([
        [[0, 4], 'C-E'],
        [[2, 9], 'A-D'],
        [[0, 6], 'C-F♯/G♭'],
        [[1, 7], 'C♯/D♭-G'],
        [[3, 5], 'D♯/E♭-F'],
        [[1, 8], 'G♯/A♭-C♯/D♭'],
    ])('%p returns %p', (pitches, result) => {
        expect(getDominoLabel(pitches)).toBe(result)
    })
})

describe('getChordAbbreviationsList', () => {
    test.each([
        [undefined, []],
        [[], []],
        [[new Set([8, 0, 3])], [{ root: 'A♭' }]],
        [
            [new Set([6, 10, 2]), new Set([9, 1, 4])],
            [{ root: 'D-G♭-B♭', type: '+' }, ' and ', { root: 'A' }],
        ],
        [
            [new Set([11, 2, 5]), new Set([7, 10, 2]), new Set([2, 6, 9, 1])],
            [{ root: 'B', sup: 'o' }, ', ', { root: 'G', type: 'm' }, ', and ', { root: 'D', sup: '7', type: 'maj' }],
        ],
        [
            [new Set([5, 9, 0, 3]), new Set([3, 6, 9, 1]), new Set([4, 8, 0, 3]), new Set([7, 11, 3])],
            [{ root: 'F', sup: '7' }, ', ', { root: 'D♯', sup: 'ø7' }, ', ', { root: 'E', sup: 'M7', type: '+' }, ', and ', { root: 'E♭-G-B', type: '+' }],
        ],
    ])('%p returns %p', (pitchSets, result) => {
        expect(getChordAbbreviationsList(pitchSets)).toStrictEqual(result)
    })
})

