export const getDimensions = svgString => {
    const
        startIndex = svgString.indexOf('viewBox="'),
        endIndex = svgString.indexOf('">', startIndex + 1),
        dimensions = svgString.slice(startIndex, endIndex).split(' ')

    return {
        width: parseFloat(dimensions[2]) || 0,
        height: parseFloat(dimensions[3]) || 0,
    }
}
