import { getPitchConfigs } from '../../utils/music/audio/time'
import { transposePitchSet } from '../../utils/music/chords/math'
import { CHECKER_DEFAULT, QUEUE_CHECKER_PLAY, TOGGLE_CHECKER_PITCH, TRANSPOSE_CHECKER_PITCH_SET } from './default'

export const CHECKER_STORE = 'checker'

export const checkerReducer = (
    state = CHECKER_DEFAULT,
    { type, payload },
) => {
    switch (type) {
        case CHECKER_STORE:
            return {
                ...state,
                ...payload,
            }
        case TOGGLE_CHECKER_PITCH: {
            const
                { checkerPitchSet: prevPitchSet } = state,
                { pitch } = payload,
                checkerPitchSet = new Set(prevPitchSet)

            if (checkerPitchSet.has(pitch)) {
                checkerPitchSet.delete(pitch)
            } else {
                checkerPitchSet.add(pitch)
            }

            return {
                ...state,
                checkerPitchSet,
            }
        }
        case TRANSPOSE_CHECKER_PITCH_SET: {
            const
                { checkerPitchSet: prevPitchSet } = state,
                { direction } = payload

            return {
                ...state,
                checkerPitchSet: transposePitchSet(prevPitchSet, direction),
            }
        }
        case QUEUE_CHECKER_PLAY: {
            const
                { checkerPitchSet } = state,
                { queuedPlay } = payload

            return {
                ...state,
                checkerPitchConfigs: queuedPlay ?
                    getPitchConfigs(checkerPitchSet) :
                    null,
            }
        }
        default:
            return state
    }
}
