import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { now, PolySynth, FMSynth } from 'tone'
import { ANIMATED_TOTAL_DURATION } from '../../constants/music/audio'
import { queuePlay } from '../../redux/audio/action'
import { mapCurrentPitchSet, mapHasSonority, mapIsAutoplayOn, mapIsPlaying, mapPlayedPitchConfigs } from '../../redux/audio/selector'
import { getAudioPitchSymbol } from '../../utils/music/audio/pitch'

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
                    0.125, // Sound duration, by ear.
                    now() + attack,
                )
            })
        })
    }

    const timePitches = () => {
        setTimeout(() => {
            dispatch(queuePlay(false))
        }, ANIMATED_TOTAL_DURATION * 1000)
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
