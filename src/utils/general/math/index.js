export const mod = (number, modulus) => (
    (number + modulus) % modulus
)

export const round = (number, decimalPlaces = 3) => {
    const multiplier = Math.pow(10, decimalPlaces)
    return Math.round(number * multiplier) / multiplier
}
