import { setBoolInStorage } from '../../utils/storage'
import { AUDIO_DEFAULT, QUEUE_PLAY, TOGGLE_PITCH, TRANSPOSE_PITCH_SET } from './default'
import { AUDIO_STORE } from './reducer'

export const updateIsAutoplayOn = (
    isAutoplayOn = AUDIO_DEFAULT.isAutoplayOn,
) => {
    setBoolInStorage('isAutoplayOn', isAutoplayOn)

    return {
        type: AUDIO_STORE,
        payload: { isAutoplayOn },
    }
}

export const updateIsAudioStarted = (
    isAudioStarted = AUDIO_DEFAULT.isAudioStarted,
) => ({
    type: AUDIO_STORE,
    payload: { isAudioStarted },
})

export const updateCurrentPitchSet = (
    currentPitchSet = AUDIO_DEFAULT.currentPitchSet,
) => ({
    type: AUDIO_STORE,
    payload: { currentPitchSet },
})

export const togglePitch = pitch => ({
    type: TOGGLE_PITCH,
    payload: { pitch },
})

export const updateTransposedPitchSet = direction => ({
    type: TRANSPOSE_PITCH_SET,
    payload: { direction },
})

export const queuePlay = queuedPlay => ({
    type: QUEUE_PLAY,
    payload: { queuedPlay },
})
