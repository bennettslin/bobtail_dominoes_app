import { createSelector } from 'reselect'
import { getPitchConfig } from '../../utils/audio'
import { AUDIO_STORE } from '../../constants/store'

export const mapCurrentPitchIndex = (
    { [AUDIO_STORE]: { currentPitchIndex } },
) => currentPitchIndex

export const mapIsAudioStarted = (
    { [AUDIO_STORE]: { isAudioStarted } },
) => isAudioStarted

export const mapIsAutoplayOn = (
    { [AUDIO_STORE]: { isAutoplayOn } },
) => isAutoplayOn

export const mapQueuedPlay = (
    { [AUDIO_STORE]: { queuedPlay } },
) => queuedPlay

export const getMapIsCurrentPitch = pitch => createSelector(
    mapCurrentPitchIndex,
    currentPitchIndex => {
        const { pitch: currentPitch } = getPitchConfig(currentPitchIndex)
        return pitch === currentPitch
    },
)
