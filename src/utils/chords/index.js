const PITCH_COUNT = 12

export const getNormalForm = pitchSet => {
    // The normal form is the most compressed ordering of a pitch set.

    // Create list of ordered arrays that is the same size as the pitch set.
    let orderedPitchSets = [Array.from(pitchSet).sort((a, b) => a - b)]

    while (orderedPitchSets.length < pitchSet.size) {
        // Add new array where first pitch of latest array is now last.
        const orderedPitchSet = [
            ...orderedPitchSets[orderedPitchSets.length - 1],
        ]
        orderedPitchSet.push(orderedPitchSet.shift())
        orderedPitchSets.push(orderedPitchSet)
    }

    // Begin by checking interval between first and last pitches.
    let currentIndex = pitchSet.size - 1

    // Iterate until we find the normal form.
    while (orderedPitchSets.length > 1 && currentIndex > 0) {
        let normalPitchSets,
            lowestInterval = PITCH_COUNT
        // eslint-disable-next-line no-loop-func
        orderedPitchSets.forEach(orderedPitchSet => {
            // We want the lowest interval possible.
            const currentInterval = (
                orderedPitchSet[currentIndex] - orderedPitchSet[0] + PITCH_COUNT
            ) % PITCH_COUNT

            // This is the most normal pitch set thus far.
            if (currentInterval < lowestInterval) {
                lowestInterval = currentInterval
                normalPitchSets = new Set([orderedPitchSet])

            // It's a tie, so add it to the other normal pitch sets.
            } else if (currentInterval === lowestInterval) {
                normalPitchSets.add(orderedPitchSet)
            }
        })
        orderedPitchSets = Array.from(normalPitchSets)
        currentIndex--
    }

    /**
     * Either there's only one normal form, or we want the one with the lowest
     * first pitch. Either way, it will be the first one in this list.
     */
    return orderedPitchSets[0]
}

export const getPrimeForm = orderedPitchSet => (
    // The prime form is the ordered pitch set with 0 as the first pitch.
    orderedPitchSet.map(pitch => (
        pitch - orderedPitchSet[0]
    ))
)
