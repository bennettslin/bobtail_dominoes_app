import { getPrimeFormKey } from '../primeForm'
import { CHORD_MAP } from '../music/chord'

export const getIsChord = pitchSet => (
    Boolean(CHORD_MAP[getPrimeFormKey(pitchSet)])
)

export const getIsLegalRow = (pitchSet = new Set()) => (
    pitchSet.size <= 2 || getIsChord(pitchSet)
)
