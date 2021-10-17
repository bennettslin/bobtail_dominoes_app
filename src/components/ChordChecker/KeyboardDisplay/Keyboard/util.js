import { getPitchIndices } from '../../../../utils/audio'
import { getArrayOfIndices } from '../../../../utils/general'

export const GAP_KEYBOARD = 2

export const ALL_PITCH_INDICES = getPitchIndices(
    new Set(getArrayOfIndices(12)),
)
