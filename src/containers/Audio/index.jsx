import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { now } from 'tone'
import { getSynth } from '../../modules/synth'
import { mapPlayedPitchConfigs } from '../../redux/audio/selector'
import { getAudioPitchSymbol } from '../../utils/music/audio/pitch'

const Audio = () => {
    const playedPitchConfigs = useSelector(mapPlayedPitchConfigs)

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

    useEffect(() => {
        if (playedPitchConfigs) {
            soundPitches()
        }
    }, [playedPitchConfigs])

    return null
}

export default Audio
