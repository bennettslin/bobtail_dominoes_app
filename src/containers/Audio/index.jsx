import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { now } from 'tone'
import { getSynth } from '../../modules/synth'
import { mapCheckerPitchConfigs } from '../../redux/checker/selector'
import { getAudioPitchSymbol } from '../../utils/music/audio/pitch'

const Audio = () => {
    const checkerPitchConfigs = useSelector(mapCheckerPitchConfigs)

    const soundPitches = () => {
        Object.values(checkerPitchConfigs).forEach(pitchIndexConfig => {
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
        if (checkerPitchConfigs) {
            soundPitches()
        }
    }, [checkerPitchConfigs])

    return null
}

export default Audio
