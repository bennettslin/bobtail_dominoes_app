const START_TIME = Date.now()

export const getTimeDifference = () => {
    const difference = Date.now() - START_TIME
    return (difference * 0.001).toFixed(3)
}
