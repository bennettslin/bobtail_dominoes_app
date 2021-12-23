import { createSelector } from 'reselect'
import { getPitchConfig } from '../../utils/music/audio/pitch'
import { getRoots } from '../../utils/music/chords/primeForm'
import { AUDIO_STORE } from './reducer'
import { MAXIMUM_SONORITY_COUNT } from '../../constants/music/audio'

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

export const mapHasMaximumSonority = createSelector(
    mapCurrentPitchSet,
    currentPitchSet => currentPitchSet.size >= MAXIMUM_SONORITY_COUNT,
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
