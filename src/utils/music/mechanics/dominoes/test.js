import { getLabelInterval, getDominoPitches, getIsReverseInterval, getOrderedInterval } from '.'

describe('getDominoPitches', () => {
    test.each([
        [0, null],
        [1, [0, 1]], [2, [0, 2]], [3, [0, 3]], [4, [0, 4]], [5, [0, 5]], [6, [0, 6]], [7, [0, 7]], [8, [0, 8]], [9, [0, 9]], [10, [0, 10]], [11, [0, 11]],
        [12, [1, 2]], [13, [1, 3]], [14, [1, 4]], [15, [1, 5]], [16, [1, 6]], [17, [1, 7]], [18, [1, 8]], [19, [1, 9]], [20, [1, 10]], [21, [1, 11]],
        [22, [2, 3]], [23, [2, 4]], [24, [2, 5]], [25, [2, 6]], [26, [2, 7]], [27, [2, 8]], [28, [2, 9]], [29, [2, 10]], [30, [2, 11]],
        [31, [3, 4]], [32, [3, 5]], [33, [3, 6]], [34, [3, 7]], [35, [3, 8]], [36, [3, 9]], [37, [3, 10]], [38, [3, 11]],
        [39, [4, 5]], [40, [4, 6]], [41, [4, 7]], [42, [4, 8]], [43, [4, 9]], [44, [4, 10]], [45, [4, 11]],
        [46, [5, 6]], [47, [5, 7]], [48, [5, 8]], [49, [5, 9]], [50, [5, 10]], [51, [5, 11]],
        [52, [6, 7]], [53, [6, 8]], [54, [6, 9]], [55, [6, 10]], [56, [6, 11]],
        [57, [7, 8]], [58, [7, 9]], [59, [7, 10]], [60, [7, 11]],
        [61, [8, 9]], [62, [8, 10]], [63, [8, 11]],
        [64, [9, 10]], [65, [9, 11]],
        [66, [10, 11]],
    ])('%p returns %p', (dominoIndex, result) => {
        expect(getDominoPitches(dominoIndex)).toStrictEqual(result)
    })
})

describe('getOrderedInterval', () => {
    test.each([
        [3, 3], // Ordered same as label
        [38, 8], // Ordered greater than label.
        [17, 6], // Tritone.
    ])('%p returns %p', (dominoIndex, result) => {
        expect(getOrderedInterval(dominoIndex)).toBe(result)
    })
})

describe('getLabelInterval', () => {
    test.each([
        [3, 3], // Ordered same as label
        [38, 4], // Ordered greater than label.
        [17, 6], // Tritone.
    ])('%p returns %p', (dominoIndex, result) => {
        expect(getLabelInterval(dominoIndex)).toBe(result)
    })
})

describe('getIsReverseInterval', () => {
    test.each([
        [3, false], // Ordered same as label
        [38, true], // Ordered greater than label.
        [17, false], // Tritone.
    ])('%p returns %p', (dominoIndex, result) => {
        expect(getIsReverseInterval(dominoIndex)).toBe(result)
    })
})
