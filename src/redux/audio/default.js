import { getBoolFromStorage } from '../../utils/storage'
export const QUEUE_PLAY = 'queuePlay'
export const TOGGLE_PITCH = 'togglePitch'
export const TRANSPOSE_PITCH_SET = 'transpose'

const INITIAL_IS_AUTOPLAY_ON = getBoolFromStorage('isAutoplayOn')

export const AUDIO_DEFAULT = {
    currentPitchSet: new Set(),
    isAudioStarted: false,
    isAutoplayOn: INITIAL_IS_AUTOPLAY_ON,
    playedPitchConfig: null,
}
