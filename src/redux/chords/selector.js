import { createSelector } from 'reselect'
import { CHORDS_STORE } from '../../constants/store'

export const mapCurrentPitchSet = (
    { [CHORDS_STORE]: { currentPitchSet } },
) => currentPitchSet

export const mapHasSonority = createSelector(
    mapCurrentPitchSet,
    currentPitchSet => Boolean(currentPitchSet.size),
)
