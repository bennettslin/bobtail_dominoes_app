import { createSelector } from 'reselect'
import { getRoots } from '../../utils/chords/primeForm'
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

export const getMapIsRoot = pitch => createSelector(
    mapCurrentPitchSet,
    currentPitchSet => getRoots(currentPitchSet).has(pitch),
)
