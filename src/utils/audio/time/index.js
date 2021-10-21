import { round } from '../../general'
import { getPitchConfig, getPitchIndices } from '../pitch'

// Each octave lasts a third of a second.
export const OCTAVE_DURATION_TIME = 0.33

const getDurationTime = pitchSet => (
    round(OCTAVE_DURATION_TIME / pitchSet.size)
)

const getAttackTime = ({
    index,
    pitchSet,
}) => round(index * getDurationTime(pitchSet))

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
