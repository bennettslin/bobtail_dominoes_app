import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { now, PolySynth, FMSynth } from 'tone'
import { updateQueuedPlay } from '../../redux/audio/action'
import { mapIsAutoplayOn, mapQueuedPlay } from '../../redux/audio/selector'
import { mapCurrentPitchSet, mapHasSonority } from '../../redux/chords/selector'
import { getAudioPitches } from '../../utils/audio'

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

    const play = () => {
        getAudioPitches(currentPitchSet).forEach((audioPitch, index) => {
            getSynth().triggerAttackRelease(
                audioPitch,
                0.1,
                now() + index * 0.2 / currentPitchSet.size,
            )
        })

        // TODO: Reset queued play after last pitch.
        setTimeout(() => {
            dispatch(updateQueuedPlay())
        }, 500)
    }

    useEffect(() => {
        if (isAutoplayOn && hasSonority && !queuedPlay) {
            dispatch(updateQueuedPlay(true))
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
