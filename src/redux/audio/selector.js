import { createSelector } from 'reselect'
import { getPitchConfig } from '../../utils/audio/pitch'
import { getRoots } from '../../utils/chords/primeForm'
import { AUDIO_STORE } from './reducer'

export const mapIsAutoplayOn = (
    { [AUDIO_STORE]: { isAutoplayOn } },
) => isAutoplayOn

export const mapIsAudioStarted = (
    { [AUDIO_STORE]: { isAudioStarted } },
) => isAudioStarted

export const mapCurrentPitchSet = (
    { [AUDIO_STORE]: { currentPitchSet } },
) => currentPitchSet

export const mapPlayedPitchConfigs = (
    { [AUDIO_STORE]: { playedPitchConfigs } },
) => playedPitchConfigs

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

export const mapIsPlaying = createSelector(
    mapPlayedPitchConfigs,
    playedPitchConfigs => Boolean(playedPitchConfigs),
)

export const getMapPlayedPitchConfig = pitch => createSelector(
    mapPlayedPitchConfigs,
    playedPitchConfigs => playedPitchConfigs?.[pitch] || null,
)

export const getMapPlayedPitchIndexConfig = pitchIndex => createSelector(
    mapPlayedPitchConfigs,
    playedPitchConfigs => (
        playedPitchConfigs?.[getPitchConfig(pitchIndex).pitch]?.[pitchIndex]
        || null
    ),
)
