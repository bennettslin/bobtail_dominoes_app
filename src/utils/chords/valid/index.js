import { getPrimeFormKey } from '../primeForm'

const VALID_CHORDS = new Set(['037', '047', '036', '048', '0358', '0368', '0158', '0148', '0258', '0369', '0348'])

export const getIsChord = pitchSet => (
    VALID_CHORDS.has(getPrimeFormKey(pitchSet))
)

export const getIsLegalRow = (pitchSet = new Set()) => (
    pitchSet.size <= 2 || getIsChord(pitchSet)
)

export const getIsIllegalRow = pitchSet => (
    !getIsLegalRow(pitchSet)
)
