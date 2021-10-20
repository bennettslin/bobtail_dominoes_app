import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { now, PolySynth, FMSynth } from 'tone'
import { OCTAVE_COUNT } from '../../constants/audio'
import { queuePlay } from '../../redux/audio/action'
import { mapCurrentPitchSet, mapHasSonority, mapIsAutoplayOn, mapIsPlaying, mapPlayedPitchConfigs } from '../../redux/audio/selector'
import { getAudioPitchSymbol } from '../../utils/audio/pitch'
import { OCTAVE_DURATION_TIME } from '../../utils/audio/time'

const Audio = () => {
    const
        dispatch = useDispatch(),
        [synth, setSynth] = useState(null),
        isAutoplayOn = useSelector(mapIsAutoplayOn),
        currentPitchSet = useSelector(mapCurrentPitchSet),
        playedPitchConfigs = useSelector(mapPlayedPitchConfigs),
        isPlaying = useSelector(mapIsPlaying),
        hasSonority = useSelector(mapHasSonority)

    const initializeSynth = () => {
        const newSynth = new PolySynth(FMSynth).toDestination()
        newSynth.volume.value = -10 // By ear.
        setSynth(newSynth)
        return newSynth
    }

    const getSynth = () => synth || initializeSynth()

    const soundPitches = () => {
        Object.values(playedPitchConfigs).forEach(pitchIndexConfig => {
            Object.values(pitchIndexConfig).forEach(({
                pitchIndex,
                attack,
            }) => {
                getSynth().triggerAttackRelease(
                    getAudioPitchSymbol(pitchIndex),
                    0.1, // Sound duration, by ear.
                    now() + attack,
                )
            })
        })
    }

    const timePitches = () => {
        setTimeout(() => {
            dispatch(queuePlay(false))
        }, OCTAVE_COUNT * OCTAVE_DURATION_TIME * 1000)
    }

    useEffect(() => {
        if (isAutoplayOn && hasSonority && !isPlaying) {
            dispatch(queuePlay(true))
        }
    }, [isAutoplayOn, currentPitchSet])

    useEffect(() => {
        if (hasSonority && playedPitchConfigs) {
            soundPitches()
            timePitches()
        }
    }, [playedPitchConfigs])

    return null
}

export default Audio
