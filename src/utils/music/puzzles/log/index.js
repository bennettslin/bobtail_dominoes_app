export const logPuzzleSearch = ([minPointsMin, minPointsMax]) => {
    logServe(`Finding a unique outcome between at least ${minPointsMin} and ${minPointsMax} points…`)
}

export const logBoardError = trialIndex => {
    logServe(`Trial ${trialIndex} could not create a board.`)
}

export const logTrialForPuzzleWithPoints = ({
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

export const logTrialForPuzzleWithMissingMoves = ({
    trialIndex,
    missingMoves,
}) => {
    if (missingMoves) {
        logSuccess(`Trial ${trialIndex} found a unique outcome.`)
    } else {
        logServe(`Trial ${trialIndex} did not find a unique outcome.`)
    }
}
