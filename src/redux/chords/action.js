import { CHORDS_DEFAULT, TOGGLE_PITCH, TRANSPOSE_PITCH_SET } from './default'
import { CHORDS_STORE } from './reducer'

export const updateCurrentPitchSet = (
    currentPitchSet = CHORDS_DEFAULT.currentPitchSet,
) => ({
    type: CHORDS_STORE,
    payload: { currentPitchSet },
})

export const togglePitch = pitch => ({
    type: TOGGLE_PITCH,
    payload: { pitch },
})

export const updateTransposedPitchSet = direction => ({
    type: TRANSPOSE_PITCH_SET,
    payload: { direction },
})
