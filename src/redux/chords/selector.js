import { createSelector } from 'reselect'
import { CHORDS_STORE } from './reducer'

export const mapCurrentPitchSet = (
    { [CHORDS_STORE]: { currentPitchSet } },
) => currentPitchSet

export const mapHasSonority = createSelector(
    mapCurrentPitchSet,
    currentPitchSet => Boolean(currentPitchSet.size),
)

export const getMapHasCurrentPitch = pitch => createSelector(
    mapCurrentPitchSet,
    currentPitchSet => currentPitchSet.has(pitch),
)
