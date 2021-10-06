import { convertMarkdownToText, getMarkdownLinkForText, getMarkdownLinksForRootPage, getSlugForLinkId } from '.'

describe('convertMarkdownToText', () => {
    it('returns text for markdown', () => {
        expect(
            convertMarkdownToText(
                `# Heading text
**bold text**
[link text](www.example.com)`,
            ),
        ).toBe(`Heading text
bold text
link text`)
    })
})

describe('getSlugForLinkId', () => {
    it('returns slug for formatted date', () => {
        expect(
            getSlugForLinkId('May 4, 1983'),
        ).toBe('may-4-1983')
    })

    it('returns slug for essay title', () => {
        expect(
            getSlugForLinkId(`Can't stop, won't stop!`),
        ).toBe('cant-stop-wont-stop')
    })
})

describe('getMarkdownLinkForText', () => {
    it('returns markdown link for text', () => {
        expect(
            getMarkdownLinkForText(`Can't stop, won't stop!`),
        ).toBe(`[Can't stop, won't stop!](#cant-stop-wont-stop)  `)
    })
})

describe('getMarkdownLinksForRootPage', () => {
    it('returns markdown links for root page', () => {
        expect(
            getMarkdownLinksForRootPage({
                topLevelPage: 'essays',
                pagesList: [
                    {
                        heading: '2020',
                        pages: [
                            {
                                id: 'hello',
                                title: 'Hello there!',
                            },
                            {
                                id: 'blah',
                            },
                        ],
                    },
                    {
                        heading: '2021',
                        pages: [
                            {
                                id: 'transom',
                                title: `What's a transom, Bob?`,
                            },
                        ],
                    },
                ],
            }),
        ).toStrictEqual([
            `### 2020
[Hello there!](/essays/hello)${'  '}
[BLAH](/essays/blah)${'  '}`,
            `### 2021
[What's a transom, Bob?](/essays/transom)${'  '}`,
        ])
    })
})
