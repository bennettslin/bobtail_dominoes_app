import { AUDIO_STORE } from './reducer'

export const mapIsAudioStarted = (
    { [AUDIO_STORE]: { isAudioStarted } },
) => isAudioStarted
