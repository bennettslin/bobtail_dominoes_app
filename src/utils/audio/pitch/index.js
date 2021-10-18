import { mod12 } from '../../chords/math'
import {
    BASE_PITCH_INDEX,
    OCTAVE_COUNT,
    OCTAVE_RANGE,
} from '../../../constants/audio'

const
    AUDIO_PITCHES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    HIGHEST_PITCH_INDEX = BASE_PITCH_INDEX + OCTAVE_RANGE * OCTAVE_COUNT - 1

export const getPitchConfig = pitchIndex => ({
    register: Math.floor(pitchIndex / OCTAVE_RANGE),
    pitch: pitchIndex === -1 ? pitchIndex : mod12(pitchIndex),
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
