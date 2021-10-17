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

export const getArrayOfIndices = (
    length,
    indexBase = 0,
) => (
    Array.from(
        { length },
        (nothing, i) => i + indexBase,
    )
)
