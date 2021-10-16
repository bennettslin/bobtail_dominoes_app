import { setBoolInStorage } from '../../utils/storage'
import { AUDIO_STORE } from '../../constants/store'
import { AUDIO_DEFAULT } from './default'

export const updateIsAudioStarted = (
    isAudioStarted = AUDIO_DEFAULT.isAudioStarted,
) => ({
    type: AUDIO_STORE,
    payload: { isAudioStarted },
})

export const updateIsAutoplayOn = (
    isAutoplayOn = AUDIO_DEFAULT.isAutoplayOn,
) => {
    setBoolInStorage('isAutoplayOn', isAutoplayOn)

    return {
        type: AUDIO_STORE,
        payload: { isAutoplayOn },
    }
}

export const updateQueuedPlay = (
    queuedPlay = AUDIO_DEFAULT.queuedPlay,
) => ({
    type: AUDIO_STORE,
    payload: { queuedPlay },
})
