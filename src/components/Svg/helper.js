export const getSvgWithDimensions = ({ svgString, scaleFactor }) => {
    const
        startIndex = svgString.indexOf('viewBox="'),
        endIndex = svgString.indexOf('">', startIndex + 1),
        dimensions = svgString.slice(startIndex, endIndex).split(' ')

    return (
        svgString.slice(0, startIndex) +
            `width="${parseFloat(dimensions[2]) * scaleFactor}px" ` +
            `height="${parseFloat(dimensions[3]) * scaleFactor}px" ` +
            svgString.slice(startIndex)
    )
}
