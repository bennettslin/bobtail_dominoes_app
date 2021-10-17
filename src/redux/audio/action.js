import { setBoolInStorage } from '../../utils/storage'
import { AUDIO_DEFAULT } from './default'
import { AUDIO_STORE } from './reducer'

export const updatePlayedPitchIndex = (
    playedPitchIndex = AUDIO_DEFAULT.playedPitchIndex,
) => ({
    type: AUDIO_STORE,
    payload: {
        playedPitchIndex,
        ...playedPitchIndex === -1 && {
            queuedPlay: AUDIO_DEFAULT.queuedPlay,
        },
    },
})

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

export const queuePlay = () => ({
    type: AUDIO_STORE,
    payload: { queuedPlay: true },
})
