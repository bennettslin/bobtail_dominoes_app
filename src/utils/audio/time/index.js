import { getPitchConfig, getPitchIndices } from '../pitch'

// Each octave lasts a quarter of a second.
export const OCTAVE_DURATION_TIME = 0.25

const getAttackTime = ({
    index,
    pitchSet,
}) => (
    index * OCTAVE_DURATION_TIME / pitchSet.size // By ear.
)

export const getPlayedPitchConfigs = (pitchSet = new Set()) => (
    getPitchIndices(pitchSet).reduce((config, pitchIndex, index) => {
        const { pitch } = getPitchConfig(pitchIndex)
        config[pitch] = config[pitch] || {}
        config[pitch][pitchIndex] = {
            pitchIndex,
            attack: getAttackTime({ index, pitchSet }),
        }

        return config
    }, {})
)
