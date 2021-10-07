import { getTruncatedText, getCapitalizedText, getFilteredAndJoinedList } from '.'

describe('getTruncatedText', () => {
    it('returns empty text', () => {
        expect(getTruncatedText('')).toBe('')
    })

    it('returns same text if not too long', () => {
        expect(getTruncatedText(
            `a123456789`,
        )).toBe(`a123456789`)
    })

    it('returns truncated text if too long', () => {
        expect(getTruncatedText(
            // 161 characters.
            `a123456789b123456789c123456789d123456789e123456789f123456789g123456789h123456789i123456789j123456789k123456789l123456789m123456789n123456789o123456789p123456789q`,
        )).toBe(
            `a123456789b123456789c123456789d123456789e123456789f123456789g123456789h123456789i123456789j123456789k123456789l123456789m123456789n123456789o123456789p123456789…`,
        )
    })
})

describe('getCapitalizedText', () => {
    it('returns empty text', () => {
        expect(getCapitalizedText('')).toBe('')
    })

    it('returns capitalized text', () => {
        expect(getCapitalizedText(
            `hI, hOw ArE yOu?`,
        )).toBe(`Hi, how are you?`)
    })
})

describe('getFilteredAndJoinedList', () => {
    it('returns empty text for no input', () => {
        expect(getFilteredAndJoinedList()).toBe('')
    })

    it('returns filtered and joined list for default separator', () => {
        expect(getFilteredAndJoinedList(
            ['a', 'b', 'c'],
        )).toBe('abc')
    })

    it('returns filtered and joined list for custom separator', () => {
        expect(getFilteredAndJoinedList(
            ['Hi,', 'how', 'are', 'you?'], ' ',
        )).toBe(`Hi, how are you?`)
    })
})
