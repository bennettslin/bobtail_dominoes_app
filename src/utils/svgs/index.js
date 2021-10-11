export const getMergedStyles = styleGroups => {
    const mergedStyles = {}
    styleGroups.forEach(styleGroup => {
        Object.keys(styleGroup).forEach(styleKey => {
            mergedStyles[styleKey] = {
                ...mergedStyles[styleKey],
                ...styleGroup[styleKey],
            }
        })
    })

    return mergedStyles
}

export const getStyleConfig = (className, styleGroups) => ({
    className,
    styles: getMergedStyles(styleGroups),
})

export const hsl = (h, s, l, a) => (
    Number.isFinite(a) ?
        `hsla(${h},${s}%,${l}%,${a})` :
        `hsl(${h},${s}%,${l}%)`
)
