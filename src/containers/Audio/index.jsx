import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Synth } from 'tone'
import { updateQueuedPlay } from '../../redux/audio/action'
import { mapIsAutoplayOn, mapQueuedPlay } from '../../redux/audio/selector'
import { mapCurrentPitchSet, mapHasSonority } from '../../redux/chords/selector'

const Audio = () => {
    const
        dispatch = useDispatch(),
        [synth, setSynth] = useState(null),
        isAutoplayOn = useSelector(mapIsAutoplayOn),
        queuedPlay = useSelector(mapQueuedPlay),
        currentPitchSet = useSelector(mapCurrentPitchSet),
        hasSonority = useSelector(mapHasSonority)

    const initializeSynth = () => {
        const newSynth = new Synth().toDestination()
        newSynth.volume.value = -10 // By ear.
        setSynth(newSynth)
        return newSynth
    }

    const getSynth = () => {
        return synth || initializeSynth()
    }

    const play = () => {
        // Just return if there's nothing to play.
        if (!hasSonority) {
            return
        }

        // TODO: Build this out.
        getSynth().triggerAttackRelease('C4', '8n')
        dispatch(updateQueuedPlay())
    }

    useEffect(() => {
        if (isAutoplayOn) {
            play()
        }
    }, [currentPitchSet])

    useEffect(() => {
        if (queuedPlay) {
            play()
        }
    }, [queuedPlay])

    return null
}

export default Audio
