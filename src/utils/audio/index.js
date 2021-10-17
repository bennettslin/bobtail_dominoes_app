import { mod12 } from '../chords/math'
import { HIGHEST_PITCH, LOWEST_PITCH } from '../../constants/audio'

const AUDIO_PITCHES = [
    'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',
]

export const getPitchConfig = pitchIndex => ({
    register: Math.floor(pitchIndex / 12),
    pitch: pitchIndex === -1 ? pitchIndex : mod12(pitchIndex),
})

export const getPitchIndices = pitchSet => {
    const pitchIndices = []
    let pitchIndex = LOWEST_PITCH

    while (pitchIndex <= HIGHEST_PITCH) {
        const { pitch } = getPitchConfig(pitchIndex)

        if (pitchSet.has(pitch)) {
            pitchIndices.push(pitchIndex)
        }

        pitchIndex++
    }

    return pitchIndices
}

export const getAudioPitchSymbol = pitchIndex => {
    const { register, pitch } = getPitchConfig(pitchIndex)
    return `${AUDIO_PITCHES[pitch]}${register}`
}