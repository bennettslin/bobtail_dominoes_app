import { getArrayOfIndices } from '../utils/general'

export const OCTAVE_RANGE = 12
export const OCTAVE_COUNT = 3
export const BASE_PITCH_INDEX = 36 // C3 for piano layout.
export const HIGHEST_PITCH_INDEX =
    BASE_PITCH_INDEX + OCTAVE_RANGE * OCTAVE_COUNT - 1

export const ALL_PITCH_INDICES = getArrayOfIndices(
    OCTAVE_RANGE * OCTAVE_COUNT,
    BASE_PITCH_INDEX,
)

export const OCTAVE_DURATION = 0.3 // Fraction of second.
export const ANIMATED_NOTE_DURATION = 0.12 // Fraction of second.

// Allow for animation of final notes to complete.
export const ANIMATED_TOTAL_DURATION =
    OCTAVE_DURATION * OCTAVE_COUNT
    + ANIMATED_NOTE_DURATION
