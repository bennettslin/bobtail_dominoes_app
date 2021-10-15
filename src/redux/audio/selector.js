import { AUDIO_STORE } from '../../constants/store'

export const mapIsAutoplayOn = (
    { [AUDIO_STORE]: { isAutoplayOn } },
) => isAutoplayOn

export const mapQueuedPlay = (
    { [AUDIO_STORE]: { queuedPlay } },
) => queuedPlay
