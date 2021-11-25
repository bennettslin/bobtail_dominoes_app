import { PolySynth, FMSynth } from 'tone'

let synth = null

const getInitialisedSynth = () => {
    synth = new PolySynth(FMSynth).toDestination()
    synth.volume.value = -5 // By ear.
    return synth
}

export const getSynth = () => synth || getInitialisedSynth()
