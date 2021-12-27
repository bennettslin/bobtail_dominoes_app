export const logTrial = ({
    trialIndex,
    yieldPoints,
    meetsMinimumPoints,
    meetsUniqueHighest,
}) => {
    if (!meetsUniqueHighest) {
        logServe(`Trial ${trialIndex} found multiple outcomes with ${yieldPoints} points.`)
    } else if (!meetsMinimumPoints) {
        logServe(`Trial ${trialIndex} only found an outcome with ${yieldPoints} points.`)
    } else {
        logSuccess(`Trial ${trialIndex} found a unique outcome with ${yieldPoints} points.`)
    }
}
