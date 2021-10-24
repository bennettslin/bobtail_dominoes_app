import { join } from '../../../general'
import { getIsSymmetricalChord } from '../label'
import { mod12 } from '../math'
import { getIsValidChord } from '../valid'

export const getNormalForm = pitchSet => {
    /**
     * The normal form is the most compressed ordering of a pitch set.
     * Example: Set {4, 1, 8, 11} => [8, 11, 1, 4]
     */

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
            lowestInterval = Number.MAX_SAFE_INTEGER

        // eslint-disable-next-line no-loop-func
        orderedPitchSets.forEach(orderedPitchSet => {
            // We want the lowest interval possible.
            const currentInterval = mod12(
                orderedPitchSet[currentIndex] - orderedPitchSet[0],
            )

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
     * first pitch. Either way, it will be first in the list.
     */
    return orderedPitchSets[0]
}

export const getPrimeForm = (pitchSet = new Set()) => {
    /**
     * The prime form is an ordered pitch set transposed to begin with 0.
     * Example: Set {4, 1, 8, 11} => [0, 3, 5, 8]
     */
    const normalForm = getNormalForm(pitchSet)
    return (
        normalForm.map(pitch => mod12(pitch - normalForm[0]))
    )
}

export const getPrimeFormKey = (pitchSet = new Set()) => (
    join(getPrimeForm(pitchSet).map(pitch => {
        switch (pitch) {
            case 10:
                return 't'
            case 11:
                return 'e'
            default:
                return pitch
        }
    }))
)

export const getRoots = pitchSet => {
    // Only valid chords have a root.
    if (!getIsValidChord(pitchSet)) {
        return new Set([-1])
    }

    const normalForm = getNormalForm(pitchSet)

    // If it's a symmetrical chord, all its pitches are roots.
    if (getIsSymmetricalChord(getPrimeFormKey(pitchSet))) {
        // Return in order.
        return new Set(normalForm)
    }

    // Only seventh chord can have root that's not first pitch of normal form.
    if (pitchSet.size >= 4) {
        let index = 0
        while (index < pitchSet.size) {
            index++

            // Distance between root and seventh is whole tone or less.
            if (mod12(normalForm[index] - normalForm[index - 1]) <= 2) {
                return new Set([normalForm[index]])
            }
        }
    }

    return new Set([normalForm[0]])
}
