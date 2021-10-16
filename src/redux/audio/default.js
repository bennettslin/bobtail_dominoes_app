import { getBoolFromStorage } from '../../utils/storage'

const INITIAL_IS_AUTOPLAY_ON = getBoolFromStorage('isAutoplayOn')

export const AUDIO_DEFAULT = {
    isAudioStarted: false,
    isAutoplayOn: INITIAL_IS_AUTOPLAY_ON,
    queuedPlay: false,
}
