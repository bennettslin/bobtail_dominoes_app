import { getPoints } from '../../../chords/score'
import { getIsInvalidSonority, getIsValidChord } from '../../../chords/valid'
import { getRowsForPlacement } from '../rows'

const getIsIsolatedPlacement = ({ rows, board }) => (
    board.length && rows.length === 1 && rows[0].length === 2
)

const getHasDuplicates = rows => (
    rows.reduce((hasDuplicates, row) => (
        hasDuplicates || (row.length > new Set(row).size)
    ), false)
)

const getMoveHasNoValidChords = ({ rows, board }) => (
    // Make sure it's not the first domino placement.
    board.length && !rows.reduce((hasValidChord, row) => (
        hasValidChord || getIsValidChord(new Set(row))
    ), false)
)

const getHasInvalidSonorities = rows => (
    rows.reduce((hasInvalidChords, row) => (
        hasInvalidChords || getIsInvalidSonority(new Set(row))
    ), false)
)

export const getChordsForPlacement = ({ dominoIndex, placement, board }) => {
    const rows = getRowsForPlacement({ dominoIndex, placement, board })

    if (
        // If illegal move, return null.
        !rows ||
        getIsIsolatedPlacement({ rows, board }) ||
        getHasDuplicates(rows) ||
        getMoveHasNoValidChords({ rows, board }) ||
        getHasInvalidSonorities(rows)
    ) {
        return null
    }

    // Return if there are chords and points. First domino will be empty.
    return rows.reduce(({ pitchSets, points }, row) => {
        const pitchSet = new Set(row)

        if (getIsValidChord(pitchSet)) {
            pitchSets.push(pitchSet)
        }

        return {
            pitchSets,
            points: points += getPoints(pitchSet),
        }

    }, { pitchSets: [], points: 0 })
}
