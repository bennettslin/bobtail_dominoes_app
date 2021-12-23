import { getArrayOfIndices } from '../../utils/general'

export const OCTAVE_RANGE = 12
export const OCTAVE_COUNT = 3
export const BASE_PITCH_INDEX = 36 // C3 for piano layout.
export const MINIMUM_SONORITY_COUNT = 3
export const MAXIMUM_SONORITY_COUNT = 4

export const ALL_PITCH_INDICES = getArrayOfIndices(
    OCTAVE_RANGE * OCTAVE_COUNT,
    BASE_PITCH_INDEX,
)

export const HIGHEST_PITCH_INDEX =
    ALL_PITCH_INDICES[ALL_PITCH_INDICES.length - 1]

export const OCTAVE_DURATION = 0.3 // Fraction of second.
export const ANIMATED_NOTE_DURATION = 0.12 // Fraction of second.

export const ANIMATED_TOTAL_DURATION =
    OCTAVE_DURATION * OCTAVE_COUNT
    // Add extra time to allow for animation of final notes to complete.
    + ANIMATED_NOTE_DURATION
