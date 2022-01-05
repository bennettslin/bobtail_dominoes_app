import { modOctave } from '../../chords/math'
import {
    OCTAVE_RANGE,
    BASE_PITCH_INDEX,
    HIGHEST_PITCH_INDEX,
} from '../../../../constants/music/audio'

const AUDIO_PITCHES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

export const getPitchConfig = pitchIndex => ({
    register: Math.floor(pitchIndex / OCTAVE_RANGE),
    pitch: modOctave(pitchIndex),
})

export const getAudioPitchSymbol = pitchIndex => {
    const { register, pitch } = getPitchConfig(pitchIndex)
    return `${AUDIO_PITCHES[pitch]}${register}`
}

export const getPitchIndices = (pitchSet = new Set()) => {
    const pitchIndices = []
    let pitchIndex = BASE_PITCH_INDEX

    while (pitchIndex <= HIGHEST_PITCH_INDEX) {
        const { pitch } = getPitchConfig(pitchIndex)

        if (pitchSet.has(pitch)) {
            pitchIndices.push(pitchIndex)
        }

        pitchIndex++
    }

    return pitchIndices
}
