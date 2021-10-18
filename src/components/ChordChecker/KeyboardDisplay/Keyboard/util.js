import { getPitchIndices } from '../../../../utils/audio'
import { getArrayOfPitches } from '../../../../utils/chords/math'

export const GAP_KEYBOARD = 2

export const ALL_PITCH_INDICES = getPitchIndices(
    new Set(getArrayOfPitches()),
)
