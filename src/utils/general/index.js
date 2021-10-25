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

export const join = (array = [], separator = '') => (
    array.filter(entry => (
        Boolean(entry) || Number.isFinite(entry)
    )).join(separator)
)

export const round = (number, decimalPlaces = 3) => {
    const multiplier = Math.pow(10, decimalPlaces)
    return (
        Math.round(number * multiplier) / multiplier
    )
}

export const getRandomInteger = (min, max) => (
    // Minimum is inclusive, maximum is exclusive.
    Math.floor(Math.random() * (max - min) + min)
)

export const getRandomEntry = (array = []) => (
    array[getRandomInteger(0, array.length)]
)
