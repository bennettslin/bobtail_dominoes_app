import { AUDIO_STORE } from '../../constants/store'

export const mapIsAudioStarted = (
    { [AUDIO_STORE]: { isAudioStarted } },
) => isAudioStarted

export const mapIsAutoplayOn = (
    { [AUDIO_STORE]: { isAutoplayOn } },
) => isAutoplayOn

export const mapQueuedPlay = (
    { [AUDIO_STORE]: { queuedPlay } },
) => queuedPlay
