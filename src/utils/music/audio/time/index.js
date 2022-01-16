import { round } from '../../../general/math'
import { getPitchConfig, getPitchIndices } from '../pitch'
import { OCTAVE_DURATION } from '../../../../constants/music/audio'

const getDurationTime = pitchSet => (
    round(OCTAVE_DURATION / pitchSet.size)
)

const getAttackTime = ({
    index,
    pitchSet,
}) => round(index * getDurationTime(pitchSet))

export const getPitchConfigs = (pitchSet = new Set()) => (
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
