import { getPitchConfig, getPitchIndices } from '../pitch'

// Each octave lasts a quarter of a second.
export const OCTAVE_DURATION_TIME = 0.33

const getDurationTime = pitchSet => (
    OCTAVE_DURATION_TIME / pitchSet.size // By ear.
)

const getAttackTime = ({
    index,
    pitchSet,
}) => (
    index * getDurationTime(pitchSet)
)

export const getPlayedPitchConfigs = (pitchSet = new Set()) => (
    getPitchIndices(pitchSet).reduce((config, pitchIndex, index) => {
        const { pitch } = getPitchConfig(pitchIndex)
        config[pitch] = config[pitch] || {}
        config[pitch][pitchIndex] = {
            pitchIndex,
            attack: getAttackTime({ index, pitchSet }),
            duration: getDurationTime(pitchSet),
        }

        return config
    }, {})
)
