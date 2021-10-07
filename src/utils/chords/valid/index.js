import { getPrimeFormKey } from '../primeForm'

const VALID_CHORD_MAP = {
    '037': { label: 'minor triad' },
    '047': { label: 'major triad' },
    '036': { label: 'diminished triad' },
    '048': { label: 'augmented triad' },
    '0358': { label: 'minor seventh', rootIndex: 2 },
    '0368': { label: 'dominant seventh', rootIndex: 3 },
    '0158': { label: 'major seventh', rootIndex: 1 },
    '0148': { label: 'minor-major seventh', rootIndex: 1 },
    '0258': { label: 'half-diminished seventh', rootIndex: 1 },
    '0369': { label: 'diminished seventh' },
    '0348': { label: 'augmented major seventh', rootIndex: 2 },
}

export const getIsValidChord = pitchSet => (
    Boolean(VALID_CHORD_MAP[getPrimeFormKey(pitchSet)])
)

export const getIsLegalRow = pitchSet => (
    pitchSet.size <= 2 || getIsValidChord(pitchSet)
)
