import { setBoolInStorage } from '../../utils/storage'
import { CHECKER_DEFAULT, QUEUE_CHECKER_PLAY, TOGGLE_CHECKER_PITCH, TRANSPOSE_CHECKER_PITCH_SET } from './default'
import { CHECKER_STORE } from './reducer'

export const updateIsCheckerAutoplayOn = (
    isCheckerAutoplayOn = CHECKER_DEFAULT.isCheckerAutoplayOn,
) => {
    setBoolInStorage('isCheckerAutoplayOn', isCheckerAutoplayOn)

    return {
        type: CHECKER_STORE,
        payload: { isCheckerAutoplayOn },
    }
}

export const updateCheckerPitchSet = (
    checkerPitchSet = CHECKER_DEFAULT.checkerPitchSet,
) => ({
    type: CHECKER_STORE,
    payload: { checkerPitchSet },
})

export const toggleCheckerPitch = pitch => ({
    type: TOGGLE_CHECKER_PITCH,
    payload: { pitch },
})

export const transposeCheckerPitchSet = direction => ({
    type: TRANSPOSE_CHECKER_PITCH_SET,
    payload: { direction },
})

export const queueCheckerPlay = queuedPlay => ({
    type: QUEUE_CHECKER_PLAY,
    payload: { queuedPlay },
})
