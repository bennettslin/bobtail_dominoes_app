import { createSelector } from 'reselect'
import { getPitchConfig } from '../../utils/audio/pitch'
import { AUDIO_STORE } from './reducer'

export const mapCurrentPitchIndex = (
    { [AUDIO_STORE]: { playedPitchIndex } },
) => playedPitchIndex

export const mapIsAudioStarted = (
    { [AUDIO_STORE]: { isAudioStarted } },
) => isAudioStarted

export const mapIsAutoplayOn = (
    { [AUDIO_STORE]: { isAutoplayOn } },
) => isAutoplayOn

export const mapQueuedPlay = (
    { [AUDIO_STORE]: { queuedPlay } },
) => queuedPlay

export const getMapIsPlayedPitchIndex = pitchIndex => createSelector(
    mapCurrentPitchIndex,
    playedPitchIndex => pitchIndex === playedPitchIndex,
)

export const getMapIsPlayedPitch = pitch => createSelector(
    mapCurrentPitchIndex,
    playedPitchIndex => {
        const { pitch: currentPitch } = getPitchConfig(playedPitchIndex)
        return pitch === currentPitch
    },
)
