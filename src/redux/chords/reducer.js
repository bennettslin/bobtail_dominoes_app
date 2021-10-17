import { transposePitchSet } from '../../utils/chords/math'
import { CHORDS_DEFAULT, TOGGLE_PITCH, TRANSPOSE_PITCH_SET } from './default'

export const CHORDS_STORE = 'chords'

export const chordsReducer = (
    state = CHORDS_DEFAULT,
    { type, payload },
) => {
    switch (type) {
        case CHORDS_STORE:
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
                ...{ currentPitchSet },
            }
        }
        case TRANSPOSE_PITCH_SET: {
            const
                { currentPitchSet: prevPitchSet } = state,
                { direction } = payload,
                currentPitchSet = transposePitchSet(prevPitchSet, direction)

            return {
                ...state,
                ...{ currentPitchSet },
            }
        }
        default:
            return state
    }
}
