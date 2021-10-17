import { getPitchConfig } from '../../../../../utils/audio'
import { getIsPitchBlack } from '../../../../../utils/chords/label'
import { mod12 } from '../../../../../utils/chords/math'
import keyC from '../../../../../assets/svgs/chords/keyC'
import keyCD from '../../../../../assets/svgs/chords/keyCD'
import keyD from '../../../../../assets/svgs/chords/keyD'
import keyDE from '../../../../../assets/svgs/chords/keyDE'
import keyE from '../../../../../assets/svgs/chords/keyE'
import keyF from '../../../../../assets/svgs/chords/keyF'
import keyFG from '../../../../../assets/svgs/chords/keyFG'
import keyG from '../../../../../assets/svgs/chords/keyG'
import keyGA from '../../../../../assets/svgs/chords/keyGA'
import keyA from '../../../../../assets/svgs/chords/keyA'
import keyAB from '../../../../../assets/svgs/chords/keyAB'
import keyB from '../../../../../assets/svgs/chords/keyB'
import { LOWEST_PITCH_INDEX } from '../../../../../constants/audio'
import { ALL_PITCH_INDICES } from '../util'

const
    KEYS = [keyC, keyCD, keyD, keyDE, keyE, keyF, keyFG, keyG, keyGA, keyA, keyAB, keyB],
    { pitch: LOWEST_PITCH } = getPitchConfig(LOWEST_PITCH_INDEX),
    WHITE_KEYS_COUNT = ALL_PITCH_INDICES.reduce(
        (count, pitchIndex) => (
            count + !getIsPitchBlack(getPitchConfig(pitchIndex).pitch)
        ), 0,
    )

export const getKeySrc = pitch => KEYS[pitch]

export const getBlackKeyPosition = pitchIndex => {
    const
        { pitch } = getPitchConfig(pitchIndex),
        leftWhiteKeysCount =
            // Add white keys in previous octaves.
            Math.floor((pitchIndex - LOWEST_PITCH_INDEX) / 12) * 7 +
            // Add white keys in this octave.
            Math.floor((mod12(pitch - LOWEST_PITCH) + 1) / 2) +
            // Add extra white key if needed.
            ((pitch % 2 === LOWEST_PITCH % 2) || pitch < LOWEST_PITCH)

    return {
        left: `${leftWhiteKeysCount / WHITE_KEYS_COUNT * 100}%`,
    }
}
