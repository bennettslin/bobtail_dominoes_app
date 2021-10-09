import { CHORDS_STORE } from '../../constants/store'

export const updateCurrentPitchSet = (currentPitchSet = new Set()) => ({
    type: CHORDS_STORE,
    payload: { currentPitchSet },
})
