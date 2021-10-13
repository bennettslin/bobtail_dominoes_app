import { getPrimeFormKey, getRoot } from '../primeForm'
import { FLAT, SHARP } from '../../../constants/music'

const
    MINOR = 'minor',
    MAJOR = 'major',
    DIM = 'diminished',
    AUG = 'augmented'

const ROOT_LETTERS = [
    'C',
    { [FLAT]: 'D', [SHARP]: 'C' },
    'D',
    { [FLAT]: 'E', [SHARP]: 'D' },
    'E',
    'F',
    { [FLAT]: 'G', [SHARP]: 'F' },
    'G',
    { [FLAT]: 'A', [SHARP]: 'G' },
    'A',
    { [FLAT]: 'B', [SHARP]: 'A' },
    'B',
]

const ACCIDENTAL_MAP = {
    1: { [MINOR]: SHARP, [MAJOR]: FLAT, [DIM]: SHARP, [AUG]: FLAT },
    3: { [MINOR]: SHARP, [MAJOR]: FLAT, [DIM]: SHARP, [AUG]: FLAT },
    6: { [MINOR]: SHARP, [MAJOR]: FLAT, [DIM]: SHARP, [AUG]: FLAT },
    8: { [MINOR]: SHARP, [MAJOR]: FLAT, [DIM]: SHARP, [AUG]: FLAT },
    10: { [MINOR]: FLAT, [MAJOR]: FLAT, [DIM]: SHARP, [AUG]: FLAT },
}

const CHORD_LABEL_MAP = {
    '037': { quality: MINOR, name: 'minor', type: 'm' },
    '047': { quality: MAJOR, name: 'major' },
    '036': { quality: DIM, name: 'diminished', sup: 'o' },
    '048': { quality: AUG, name: 'augmented', type: '+' },
    '0358': { quality: MINOR, name: 'minor', type: 'm', sup: '7' },
    '0368': { quality: MAJOR, name: 'dominant', sup: '7' },
    '0158': { quality: MAJOR, name: 'major', type: 'maj', sup: '7' },
    '0148': { quality: MINOR, name: 'minor-major', type: 'm', sup: 'M7' },
    '0258': { quality: DIM, name: 'half-diminished', sup: 'ø7' },
    '0369': { quality: DIM, name: 'diminished', sup: 'o7' },
    '0348': { quality: AUG, name: 'augmented major', type: '+', sup: 'M7' },
}

export const getRootLetter = pitchSet => {
    const
        { quality } = CHORD_LABEL_MAP[getPrimeFormKey(pitchSet)] || {},
        root = getRoot(pitchSet),
        accidental = ACCIDENTAL_MAP[root]?.[quality]

    return (
        accidental ?
            `${ROOT_LETTERS[root][accidental]}${accidental}` :
            ROOT_LETTERS[root]
    )
}

export const getChordAbbreviation = pitchSet => {
    const
        rootLetter = getRootLetter(pitchSet),
        {
            type,
            sup,
        } = CHORD_LABEL_MAP[getPrimeFormKey(pitchSet)] || {}

    return {
        ...rootLetter && { rootLetter },
        ...type && { type },
        ...sup && { sup },
    }
}

export const getChordLabel = pitchSet => {
    const
        rootLetter = getRootLetter(pitchSet),
        { name } = CHORD_LABEL_MAP[getPrimeFormKey(pitchSet)] || {}

    return rootLetter && name ?
        `${rootLetter} ${name} ${
            pitchSet.size === 3 ? 'triad' : 'seventh'
        }` : null
}
