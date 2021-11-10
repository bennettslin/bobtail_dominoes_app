import { OCTAVE_RANGE } from '../../../../constants/music/audio'
import { getArrayOfIndices } from '../../../general'
import { getLabelInterval, getDominoPitches } from '../dominoes'

export const getPitchCountsInPool = pool => (
    Array.from(pool).reduce((pitchesList, dominoIndex) => {
        const pitches = getDominoPitches(dominoIndex)
        pitches.forEach(pitch => {
            pitchesList[pitch] += 1
        })
        return pitchesList
    }, getArrayOfIndices(OCTAVE_RANGE, 0, () => 0))
)

export const getIntervalCountsInPool = pool => (
    Array.from(pool).reduce((intervalsList, dominoIndex) => {
        intervalsList[getLabelInterval(dominoIndex) - 1] += 1
        return intervalsList
    }, getArrayOfIndices(OCTAVE_RANGE / 2, 0, () => 0))
)
