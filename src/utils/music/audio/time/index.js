import { OCTAVE_DURATION } from '../../../../constants/audio'
import { round } from '../../../general'
import { getPitchConfig, getPitchIndices } from '../pitch'

const getDurationTime = pitchSet => (
    round(OCTAVE_DURATION / pitchSet.size)
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
        }

        return config
    }, {})
)
