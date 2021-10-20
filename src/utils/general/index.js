export const getArrayOfIndices = (
    length,
    indexBase = 0,
    mapFunction = (nothing, i) => i + indexBase,
) => (
    Array.from(
        { length },
        mapFunction,
    )
)

export const getAreSetsEqual = (set1, set2) => {
    if (set1.size !== set2.size) {
        return false
    }

    for (const value of set1) {
        if (!set2.has(value)) {
            return false
        }
    }

    return true
}

export const getFixed = (number, digits = 2) => {
    let fixed = number.toFixed(digits)
    while (
        fixed.length > 1 &&
        fixed.includes('.') && (
            fixed[fixed.length - 1] === '0' ||
            fixed[fixed.length - 1] === '.'
        )
    ) {
        // Remove last character.
        fixed = fixed.slice(0, -1)
    }
    return fixed
}
