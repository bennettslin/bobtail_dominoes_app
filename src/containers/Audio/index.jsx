import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { now, PolySynth, FMSynth } from 'tone'
import { updateCurrentPitchIndex, queuePlay } from '../../redux/audio/action'
import { mapIsAutoplayOn, mapQueuedPlay } from '../../redux/audio/selector'
import { mapCurrentPitchSet, mapHasSonority } from '../../redux/chords/selector'
import { getPitchIndices, getAudioPitchSymbol } from '../../utils/audio'

const Audio = () => {
    const
        dispatch = useDispatch(),
        [synth, setSynth] = useState(null),
        isAutoplayOn = useSelector(mapIsAutoplayOn),
        queuedPlay = useSelector(mapQueuedPlay),
        currentPitchSet = useSelector(mapCurrentPitchSet),
        hasSonority = useSelector(mapHasSonority)

    const initializeSynth = () => {
        const newSynth = new PolySynth(FMSynth).toDestination()
        newSynth.volume.value = -10 // By ear.
        setSynth(newSynth)
        return newSynth
    }

    const getSynth = () => {
        return synth || initializeSynth()
    }

    const getAttackTime = (index, multiplier = 1) => (
        index * 0.25 / currentPitchSet.size * multiplier // By ear.
    )

    const soundPitches = pitchIndices => {
        pitchIndices.forEach((pitchIndex, index) => {
            getSynth().triggerAttackRelease(
                getAudioPitchSymbol(pitchIndex),
                0.1, // Sound duration, by ear.
                now() + getAttackTime(index),
            )
        })
    }

    const timePitches = pitchIndices => {
        [...pitchIndices, -1].forEach((pitchIndex, index) => {
            setTimeout(() => {
                dispatch(updateCurrentPitchIndex(pitchIndex))
            }, getAttackTime(index, 1000))
        })
    }

    const play = () => {
        const pitchIndices = getPitchIndices(currentPitchSet)
        soundPitches(pitchIndices)
        timePitches(pitchIndices)
    }

    useEffect(() => {
        if (isAutoplayOn && hasSonority && !queuedPlay) {
            dispatch(queuePlay())
        }
    }, [currentPitchSet])

    useEffect(() => {
        if (hasSonority && queuedPlay) {
            play()
        }
    }, [queuedPlay])

    return null
}

export default Audio
