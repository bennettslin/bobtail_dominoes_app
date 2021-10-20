import { getPitchConfig, getPitchIndices } from '../pitch'

// Each octave lasts a quarter of a second.
export const OCTAVE_DURATION_TIME = 0.25

export const getSoundDuration = ({
    pitchSet,
    multiplier = 1,
}) => (
    OCTAVE_DURATION_TIME / pitchSet.size * multiplier // By ear.
)

export const getAttackTime = ({
    index,
    pitchSet,
    multiplier = 1,
}) => (
    index * getSoundDuration({ pitchSet, multiplier })
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
