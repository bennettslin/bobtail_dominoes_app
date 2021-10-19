import { getPitchConfig } from '../../../../utils/audio/pitch'
import { getIsPitchBlack } from '../../../../utils/chords/label'
import { ALL_PITCH_INDICES } from '../../../../constants/audio'

export const ORDERED_PITCH_INDICES = [
    ...ALL_PITCH_INDICES.filter(pitchIndex => (
        getIsPitchBlack(getPitchConfig(pitchIndex).pitch)
    )),
    ...ALL_PITCH_INDICES.filter(pitchIndex => (
        !getIsPitchBlack(getPitchConfig(pitchIndex).pitch)
    )),
]
