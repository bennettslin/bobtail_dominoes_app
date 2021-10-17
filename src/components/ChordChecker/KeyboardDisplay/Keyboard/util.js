import { getPitchConfig, getPitchIndices } from '../../../../utils/audio'
import { getIsPitchBlack } from '../../../../utils/chords/label'
import { getArrayOfIndices } from '../../../../utils/general'
import { LOWEST_PITCH_INDEX } from '../../../../constants/audio'
import { mod12 } from '../../../../utils/chords/math'

const { pitch: LOWEST_PITCH } = getPitchConfig(LOWEST_PITCH_INDEX)

export const GAP_KEYBOARD = 2

const ALL_PITCH_INDICES = getPitchIndices(
    new Set(getArrayOfIndices(12)),
)

// Render black indices last.
export const ORDERED_PITCH_INDICES = [
    ...ALL_PITCH_INDICES.filter(pitchIndex => (
        !getIsPitchBlack(getPitchConfig(pitchIndex).pitch)
    )),
    ...ALL_PITCH_INDICES.filter(pitchIndex => (
        getIsPitchBlack(getPitchConfig(pitchIndex).pitch)
    )),
]

const WHITE_KEYS_COUNT = ALL_PITCH_INDICES.reduce(
    (count, pitchIndex) => {
        const { pitch } = getPitchConfig(pitchIndex)
        return count + !getIsPitchBlack(pitch)
    }, 0,
)

export const getBlackKeyPosition = pitchIndex => {
    const
        { pitch } = getPitchConfig(pitchIndex),
        leftWhiteKeysCount =
            // Add white keys in previous octaves.
            Math.floor((pitchIndex - LOWEST_PITCH_INDEX) / 12) * 7 +
            // Add white keys in this octave.
            Math.floor((mod12(pitch - LOWEST_PITCH) + 1) / 2) +
            // Add extra white key if needed.
            ((pitch % 2 === LOWEST_PITCH % 2) || pitch < LOWEST_PITCH)

    return {
        left: `${leftWhiteKeysCount / WHITE_KEYS_COUNT * 100}%`,
    }
}
