import { CHORDS_STORE } from '../../constants/store'
import { CHORDS_DEFAULT } from './default'

export const updateCurrentPitchSet = (
    currentPitchSet = CHORDS_DEFAULT.currentPitchSet,
) => ({
    type: CHORDS_STORE,
    payload: { currentPitchSet },
})
