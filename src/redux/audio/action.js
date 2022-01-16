import { AUDIO_DEFAULT } from './default'
import { AUDIO_STORE } from './reducer'

export const updateIsAudioStarted = (
    isAudioStarted = AUDIO_DEFAULT.isAudioStarted,
) => ({
    type: AUDIO_STORE,
    payload: { isAudioStarted },
})
