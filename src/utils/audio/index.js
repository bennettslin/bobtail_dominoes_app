import { mod12 } from '../chords/math'

const
    LOWEST_PITCH = 36, // C3.
    HIGHEST_PITCH = 71 // B5.

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

export const getPitchLetter = pitchIndex => {
    const { register, pitch } = getPitchConfig(pitchIndex)
    return `${AUDIO_PITCHES[pitch]}${register}`
}
