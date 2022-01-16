import { createSelector } from 'reselect'
import { getPitchConfig } from '../../utils/music/audio/pitch'
import { getRoots } from '../../utils/music/chords/primeForm'
import { CHECKER_STORE } from './reducer'
import { MAXIMUM_SONORITY_COUNT, MINIMUM_SONORITY_COUNT } from '../../constants/music/audio'

export const mapIsCheckerAutoplayOn = (
    { [CHECKER_STORE]: { isCheckerAutoplayOn } },
) => isCheckerAutoplayOn

export const mapCheckerPitchSet = (
    { [CHECKER_STORE]: { checkerPitchSet } },
) => checkerPitchSet

export const mapCheckerPitchConfigs = (
    { [CHECKER_STORE]: { checkerPitchConfigs } },
) => checkerPitchConfigs

export const mapHasCheckerSonority = createSelector(
    mapCheckerPitchSet,
    checkerPitchSet => Boolean(checkerPitchSet.size),
)

export const mapHasPlayableCheckerSonority = createSelector(
    mapCheckerPitchSet,
    checkerPitchSet => (
        checkerPitchSet.size >= MINIMUM_SONORITY_COUNT &&
        checkerPitchSet.size <= MAXIMUM_SONORITY_COUNT
    ),
)

export const mapHasMaximumCheckerSonority = createSelector(
    mapCheckerPitchSet,
    checkerPitchSet => checkerPitchSet.size >= MAXIMUM_SONORITY_COUNT,
)

export const getMapHasCheckerPitch = pitch => createSelector(
    mapCheckerPitchSet,
    checkerPitchSet => checkerPitchSet.has(pitch),
)

export const getMapIsCheckerRoot = pitch => createSelector(
    mapCheckerPitchSet,
    checkerPitchSet => getRoots(checkerPitchSet).has(pitch),
)

export const mapIsCheckerPlaying = createSelector(
    mapCheckerPitchConfigs,
    checkerPitchConfigs => Boolean(checkerPitchConfigs),
)

export const getMapCheckerPitchConfig = pitch => createSelector(
    mapCheckerPitchConfigs,
    checkerPitchConfigs => checkerPitchConfigs?.[pitch] || null,
)

export const getMapCheckerPitchIndexConfig = pitchIndex => createSelector(
    mapCheckerPitchConfigs,
    checkerPitchConfigs => (
        checkerPitchConfigs?.[getPitchConfig(pitchIndex).pitch]?.[pitchIndex]
        || null
    ),
)
