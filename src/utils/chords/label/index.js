import { FLAT, SHARP } from '../../../constants/music'
import { getPrimeFormKey, getRoot } from '../primeForm'

const ROOT_NOTES = [
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

const CHORD_TYPE_MAP = {
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

const CHORD_CONFIG_MAP = {
    '037': { type: 'm' },
    '047': null,
    '036': { sup: 'o' },
    '048': { type: '+' },
    '0358': { type: 'm', sup: '7' },
    '0368': { sup: '7' },
    '0158': { type: 'maj', sup: '7' },
    '0148': { type: 'm', sup: 'M7' },
    '0258': { sup: 'ø7' },
    '0369': { sup: 'o7' },
    '0348': { type: '+', sup: 'M7' },
}

export const getRootNote = (root = -1) => (
    root > -1 && root < 12 ? ROOT_NOTES[root] : null
)

export const getChordAbbreviation = pitchSet => {
    const
        rootNote = getRootNote(getRoot(pitchSet)),
        {
            type,
            sup,
        } = CHORD_CONFIG_MAP[getPrimeFormKey(pitchSet)] || {}

    return {
        ...rootNote && { root: rootNote },
        ...type && { type },
        ...sup && { sup },
    }
}

export const getChordLabel = pitchSet => {
    const
        rootNote = getRootNote(getRoot(pitchSet)),
        chordType = CHORD_TYPE_MAP[getPrimeFormKey(pitchSet)]

    return rootNote && chordType ?
        `${rootNote} ${chordType} ${
            pitchSet.size === 3 ? 'triad' : 'seventh'
        }` : null
}
