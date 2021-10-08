import { FLAT, SHARP } from '../../../constants/music'
import { getPrimeFormKey, getRoot } from '../primeForm'

export const ROOT_NOTES = [
    'C',
    `C${SHARP}/D${FLAT}`,
    'D',
    `D${SHARP}/E${FLAT}`,
    'E',
    'F',
    `F${SHARP}/G${FLAT}`,
    'G',
    `G${SHARP}/A${FLAT}`,
    'A',
    `A${SHARP}/B${FLAT}`,
    'B',
]

export const CHORD_MAP = {
    '037': 'minor',
    '047': 'major',
    '036': 'diminished',
    '048': 'augmented',
    '0358': 'minor',
    '0368': 'dominant',
    '0158': 'major',
    '0148': 'minor-major',
    '0258': 'half-diminished',
    '0369': 'diminished',
    '0348': 'augmented major',
}

export const getRootNote = (root = -1) => (
    root > -1 && root < 12 ? ROOT_NOTES[root] : null
)

export const getChordType = primeFormKey => (
    CHORD_MAP[primeFormKey] || null
)

export const getChordLabel = pitchSet => {
    const
        rootNote = getRootNote(getRoot(pitchSet)),
        chordType = getChordType(getPrimeFormKey(pitchSet))

    return rootNote && chordType ?
        `${rootNote} ${chordType} ${
            pitchSet.size === 3 ? 'triad' : 'seventh'
        }` : null
}
