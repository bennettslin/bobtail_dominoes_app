import { getPlayedPitchConfig } from '../../utils/audio/time'
import { transposePitchSet } from '../../utils/chords/math'
import { AUDIO_DEFAULT, QUEUE_PLAY, TOGGLE_PITCH, TRANSPOSE_PITCH_SET } from './default'

export const AUDIO_STORE = 'audio'

export const audioReducer = (
    state = AUDIO_DEFAULT,
    { type, payload },
) => {
    switch (type) {
        case AUDIO_STORE:
            return {
                ...state,
                ...payload,
            }
        case TOGGLE_PITCH: {
            const
                { currentPitchSet: prevPitchSet } = state,
                { pitch } = payload,
                currentPitchSet = new Set(prevPitchSet)

            if (currentPitchSet.has(pitch)) {
                currentPitchSet.delete(pitch)
            } else {
                currentPitchSet.add(pitch)
            }

            return {
                ...state,
                currentPitchSet,
            }
        }
        case TRANSPOSE_PITCH_SET: {
            const
                { currentPitchSet: prevPitchSet } = state,
                { direction } = payload,
                currentPitchSet = transposePitchSet(prevPitchSet, direction)

            return {
                ...state,
                currentPitchSet,
            }
        }
        case QUEUE_PLAY: {
            const
                { currentPitchSet } = state,
                { queuedPlay } = payload,
                playedPitchConfig = queuedPlay ?
                    getPlayedPitchConfig(currentPitchSet) :
                    null

            return {
                ...state,
                playedPitchConfig,
            }
        }
        default:
            return state
    }
}
