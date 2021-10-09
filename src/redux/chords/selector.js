import { CHORDS_STORE } from '../../constants/store'

export const mapCurrentPitchSet = (
    { [CHORDS_STORE]: { currentPitchSet } },
) => currentPitchSet
