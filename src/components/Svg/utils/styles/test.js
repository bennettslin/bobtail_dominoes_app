import { getSvgWithClassStyles } from '.'

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
<svg viewBox="0 0 100 100"><style>.mockClassName .edge{fill:red; stroke:purple} .mockClassName .face{fill:blue; stroke:green}</style>
  <circle class="edge" cx="50" cy="50" r="50"/>
  <circle class="face" cx="50" cy="50" r="40"/>
</svg>`)
    })
})
