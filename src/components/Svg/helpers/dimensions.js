const getStyleString = ({ style, length, scaleFactor }) => (
    `${style}:${(parseFloat(length) * scaleFactor).toFixed(2)}px;`
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
            `style="height:100%;width:100%;` +
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
