export const getCartesianX = (x, y) => (
    // Convert from hexagonal grid.
    x + y * 0.5
)

export const getCartesianRange = board => (
    board.reduce((ends, { placement }) => (
        placement.reduce((ends, [x, y]) => ({
            minX: Math.min(ends.minX, getCartesianX(x, y)),
            maxX: Math.max(ends.maxX, getCartesianX(x, y)),
            minY: Math.min(ends.minY, y),
            maxY: Math.max(ends.maxY, y),
        }), ends)
    ), { minX: null, maxX: null, minY: null, maxY: null })
)

export const getCartesianCentre = board => {
    const { minX, maxX, minY, maxY } = getCartesianRange(board)
    return [(maxX + minX) / 2, (maxY + minY) / 2]
}
