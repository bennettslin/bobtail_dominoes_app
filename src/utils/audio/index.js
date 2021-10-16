const
    LOWEST_PITCH = {
        root: 0,
        register: 3,
    },
    HIGHEST_PITCH = {
        root: 11,
        register: 5,
    }

const AUDIO_PITCHES = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
]

const getPitchIndex = ({ root, register }) => (
    register * AUDIO_PITCHES.length + root
)

export const getAudioPitches = pitchSet => {
    const audioPitches = []
    let {
        root,
        register,
    } = LOWEST_PITCH

    while (
        getPitchIndex({ root, register }) <= getPitchIndex(HIGHEST_PITCH)
    ) {
        // Add to pitches if it's in set.
        if (pitchSet.has(root)) {
            audioPitches.push(`${AUDIO_PITCHES[root]}${register}`)
        }

        // Increment.
        root++
        if (root === AUDIO_PITCHES.length) {
            root = 0
            register++
        }
    }

    return audioPitches
}

// export const getDuration = pitchSet => (

// )
