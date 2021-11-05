import { OCTAVE_RANGE } from '../../../../constants/music/audio'
import { getArrayOfIndices } from '../../../general'
import { mod12 } from '../../chords/math'
import { getDominoPitches } from '../dominoes'

const getSmallerInterval = dominoIndex => {
    const pitches = getDominoPitches(dominoIndex)
    return Math.min(
        mod12(pitches[0] - pitches[1]),
        mod12(pitches[1] - pitches[0]),
    )
}

export const getPitchCountsInPool = pool => (
    Array.from(pool).reduce((intervalsList, dominoIndex) => {
        const pitches = getDominoPitches(dominoIndex)
        pitches.forEach(pitch => {
            intervalsList[pitch] += 1
        })
        return intervalsList
    }, getArrayOfIndices(OCTAVE_RANGE, 0, () => 0))
)

export const getIntervalCountsInPool = pool => (
    Array.from(pool).reduce((intervalsList, dominoIndex) => {
        intervalsList[getSmallerInterval(dominoIndex) - 1] += 1
        return intervalsList
    }, getArrayOfIndices(OCTAVE_RANGE / 2, 0, () => 0))
)
