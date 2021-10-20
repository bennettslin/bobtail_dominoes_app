import { getFixed } from '../../../../utils/general'

const getStyleString = ({ style, length, scaleFactor }) => (
    `${style}:${getFixed(parseFloat(length) * scaleFactor, 2)}px;`
)

export const getSvgWithDimensions = ({ svgString, scaleFactor }) => {
    if (!Number.isFinite(scaleFactor)) {
        return svgString
    }

    const
        startIndex = svgString.indexOf('viewBox="'),
        endIndex = svgString.indexOf('">', startIndex + 1),
        dimensions = svgString.slice(startIndex, endIndex).split(' ')

    return (
        svgString.slice(0, startIndex) +
            `style="` +
            getStyleString({
                style: 'max-width',
                length: dimensions[2],
                scaleFactor,
            }) +
            getStyleString({
                style: 'max-height',
                length: dimensions[3],
                scaleFactor,
            }) +
            `"` +
            svgString.slice(startIndex)
    )
}
