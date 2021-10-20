import { getSvgWithDimensions } from '.'

const MOCK_SVG_STRING = `
<svg viewBox="0 0 100 100">
  <circle class="edge" cx="50" cy="50" r="50"/>
  <circle class="face" cx="50" cy="50" r="40"/>
</svg>`

describe('getSvgWithDimensions', () => {
    it('returns default svg string with no scale factor', () => {
        expect(getSvgWithDimensions({
            svgString: MOCK_SVG_STRING,
        })).toBe(MOCK_SVG_STRING)
    })

    it('returns new svg string with scale factor', () => {
        expect(getSvgWithDimensions({
            svgString: MOCK_SVG_STRING,
            scaleFactor: 0.5,
        })).toBe(`
<svg style="max-width:50px;max-height:50px;"viewBox="0 0 100 100">
  <circle class="edge" cx="50" cy="50" r="50"/>
  <circle class="face" cx="50" cy="50" r="40"/>
</svg>`)
    })
})
