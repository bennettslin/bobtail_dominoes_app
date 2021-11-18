export const getRandomInteger = (min, max) => (
    // Minimum is inclusive, maximum is exclusive.
    Math.floor(Math.random() * (max - min) + min)
)

export const getRandomEntry = (array = []) => (
    array[getRandomInteger(0, array.length)]
)

// https://stackoverflow.com/a/12646864
export const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}
