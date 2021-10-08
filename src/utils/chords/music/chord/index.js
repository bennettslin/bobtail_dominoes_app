
export const CHORD_MAP = {
    '037': { type: 'minor' },
    '047': { type: 'major' },
    '036': { type: 'diminished' },
    '048': { type: 'augmented' },
    '0358': { type: 'minor', rootIndex: 2 },
    '0368': { type: 'dominant', rootIndex: 3 },
    '0158': { type: 'major', rootIndex: 1 },
    '0148': { type: 'minor-major', rootIndex: 1 },
    '0258': { type: 'half-diminished', rootIndex: 1 },
    '0369': { type: 'diminished' },
    '0348': { type: 'augmented major', rootIndex: 2 },
}

const getChord = primeFormKey => (
    CHORD_MAP[primeFormKey] || null
)

export const getChordType = primeFormKey => (
    getChord(primeFormKey)?.type || null
)

export const getRootIndex = primeFormKey => {
    const chord = getChord(primeFormKey)
    return chord ? (chord.rootIndex || 0) : -1
}
