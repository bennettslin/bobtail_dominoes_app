import { createSelector } from 'reselect'
import { getRoots } from '../../utils/chords/primeForm'
import { AUDIO_STORE } from './reducer'

export const mapCurrentPitchSet = (
    { [AUDIO_STORE]: { currentPitchSet } },
) => currentPitchSet

export const mapHasSonority = createSelector(
    mapCurrentPitchSet,
    currentPitchSet => Boolean(currentPitchSet.size),
)

export const getMapHasCurrentPitch = pitch => createSelector(
    mapCurrentPitchSet,
    currentPitchSet => currentPitchSet.has(pitch),
)

export const getMapIsRoot = pitch => createSelector(
    mapCurrentPitchSet,
    currentPitchSet => getRoots(currentPitchSet).has(pitch),
)

export const mapIsAudioStarted = (
    { [AUDIO_STORE]: { isAudioStarted } },
) => isAudioStarted

export const mapIsAutoplayOn = (
    { [AUDIO_STORE]: { isAutoplayOn } },
) => isAutoplayOn

export const mapPlayedPitchConfig = (
    { [AUDIO_STORE]: { playedPitchConfig } },
) => playedPitchConfig

export const mapIsPlaying = createSelector(
    mapPlayedPitchConfig,
    playedPitchConfig => Boolean(playedPitchConfig),
)
