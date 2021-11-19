export const getRandomInteger = (min, max) => (
    // Minimum is inclusive, maximum is exclusive.
    Math.floor(Math.random() * (max - min) + min)
)

export const getRandomEntry = (array = []) => (
    array[getRandomInteger(0, array.length)]
)

// https://stackoverflow.com/a/12646864
export const getShuffledArray = array => {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] =
        [shuffledArray[j], shuffledArray[i]]
    }
    return shuffledArray
}
