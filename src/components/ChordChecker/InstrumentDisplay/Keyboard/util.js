import { getPitchConfig } from '../../../../utils/music/audio/pitch'
import { getIsPitchBlack } from '../../../../utils/music/chords/label'
import { ALL_PITCH_INDICES } from '../../../../constants/music/audio'

export const ORDERED_PITCH_INDICES = [
    ...ALL_PITCH_INDICES.filter(pitchIndex => (
        getIsPitchBlack(getPitchConfig(pitchIndex).pitch)
    )),
    ...ALL_PITCH_INDICES.filter(pitchIndex => (
        !getIsPitchBlack(getPitchConfig(pitchIndex).pitch)
    )),
]
