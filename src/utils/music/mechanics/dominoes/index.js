import { modOctave } from '../../chords/math'
import { DOMINOES_PITCHES } from '../../../../constants/music/game'

export const getDominoPitches = dominoIndex => (
    DOMINOES_PITCHES[dominoIndex]
)

export const getOrderedInterval = dominoIndex => {
    const pitches = getDominoPitches(dominoIndex)
    return modOctave(pitches[1] - pitches[0])
}

export const getLabelInterval = dominoIndex => {
    const pitches = getDominoPitches(dominoIndex)
    return Math.min(
        getOrderedInterval(dominoIndex),
        modOctave(pitches[0] - pitches[1]),
    )
}

export const getIsReverseInterval = dominoIndex => (
    getLabelInterval(dominoIndex) < getOrderedInterval(dominoIndex)
)
