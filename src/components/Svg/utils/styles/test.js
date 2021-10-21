import { getKeyframesString, getSvgWithClassStyles } from '.'

const MOCK_SVG_STRING = `
<svg viewBox="0 0 100 100">
  <circle class="edge" cx="50" cy="50" r="50"/>
  <circle class="face" cx="50" cy="50" r="40"/>
</svg>`

const MOCK_STYLES = {
    fill: {
        edge: 'red',
        face: 'blue',
    },
    stroke: {
        edge: 'purple',
        face: 'green',
    },
}

const MOCK_KEYFRAMES = [
    {
        animationName: 'edgeAnimation',
        sequence: [
            { percentage: 0, fillStyle: 'red' },
            { percentage: 50, fillStyle: 'green' },
            { percentage: 100, fillStyle: 'blue' },
        ],
    },
    {
        animationName: 'faceAnimation',
        sequence: [
            { percentage: 0, fillStyle: 'orange' },
            { percentage: 100, fillStyle: 'purple' },
        ],
    },
]

describe('getKeyframesString', () => {
    it('returns empty string for no keyframes', () => {
        expect(getKeyframesString()).toBe('')
    })

    it('returns string for keyframes', () => {
        expect(getKeyframesString(MOCK_KEYFRAMES)).toBe('@keyframes edgeAnimation{0%{fill:red}50%{fill:green}100%{fill:blue}}@keyframes faceAnimation{0%{fill:orange}100%{fill:purple}}')
    })
})

describe('getSvgWithClassStyles', () => {
    it('returns default svg string with no class name', () => {
        expect(getSvgWithClassStyles({
            svgString: MOCK_SVG_STRING,
            styles: MOCK_STYLES,
        })).toBe(MOCK_SVG_STRING)
    })

    it('returns default svg string with no styles', () => {
        expect(getSvgWithClassStyles({
            styleClassName: 'mockClassName',
            svgString: MOCK_SVG_STRING,
        })).toBe(MOCK_SVG_STRING)
    })

    it('returns new svg string with styles', () => {
        expect(getSvgWithClassStyles({
            styleClassName: 'mockClassName',
            svgString: MOCK_SVG_STRING,
            styles: MOCK_STYLES,
        })).toBe(`
<svg viewBox="0 0 100 100"><style>.mockClassName .edge{fill:red;stroke:purple}.mockClassName .face{fill:blue;stroke:green}</style>
  <circle class="edge" cx="50" cy="50" r="50"/>
  <circle class="face" cx="50" cy="50" r="40"/>
</svg>`)
    })

    it('returns new svg string with styles and keyframes', () => {
        expect(getSvgWithClassStyles({
            styleClassName: 'mockClassName',
            svgString: MOCK_SVG_STRING,
            keyframes: MOCK_KEYFRAMES,
            styles: MOCK_STYLES,
        })).toBe(`
<svg viewBox="0 0 100 100"><style>@keyframes edgeAnimation{0%{fill:red}50%{fill:green}100%{fill:blue}}@keyframes faceAnimation{0%{fill:orange}100%{fill:purple}} .mockClassName .edge{fill:red;stroke:purple}.mockClassName .face{fill:blue;stroke:green}</style>
  <circle class="edge" cx="50" cy="50" r="50"/>
  <circle class="face" cx="50" cy="50" r="40"/>
</svg>`)
    })
})
