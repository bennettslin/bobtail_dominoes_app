import { getPitchConfig } from '../../../../../utils/music/audio/pitch'
import { getAnimatedStyleConfig } from '../../../../../utils/music/audio/style'
import { getIsPitchBlack } from '../../../../../utils/music/chords/label'
import styleConfigPitchBlack from '../../../../../styles/arcade/pitchBlack'
import styleConfigPitchOn from '../../../../../styles/arcade/pitchOn'
import styleConfigPitchWhite from '../../../../../styles/arcade/pitchWhite'
import styleConfigRootOn from '../../../../../styles/arcade/rootOn'
import './style'
import { modOctave } from '../../../../../utils/music/chords/math'
import keyC from '../../../../../assets/svgs/checker/keyC'
import keyCD from '../../../../../assets/svgs/checker/keyCD'
import keyD from '../../../../../assets/svgs/checker/keyD'
import keyDE from '../../../../../assets/svgs/checker/keyDE'
import keyE from '../../../../../assets/svgs/checker/keyE'
import keyF from '../../../../../assets/svgs/checker/keyF'
import keyFG from '../../../../../assets/svgs/checker/keyFG'
import keyG from '../../../../../assets/svgs/checker/keyG'
import keyGA from '../../../../../assets/svgs/checker/keyGA'
import keyA from '../../../../../assets/svgs/checker/keyA'
import keyAB from '../../../../../assets/svgs/checker/keyAB'
import keyB from '../../../../../assets/svgs/checker/keyB'
import { ALL_PITCH_INDICES, BASE_PITCH_INDEX } from '../../../../../constants/music/audio'

const
    KEYS = [keyC, keyCD, keyD, keyDE, keyE, keyF, keyFG, keyG, keyGA, keyA, keyAB, keyB],
    { pitch: LOWEST_PITCH } = getPitchConfig(BASE_PITCH_INDEX),
    WHITE_KEYS_COUNT = ALL_PITCH_INDICES.reduce(
        (count, pitchIndex) => (
            count + !getIsPitchBlack(getPitchConfig(pitchIndex).pitch)
        ), 0,
    )

export const getKeySrc = pitch => KEYS[pitch]

export const getKeyStyleConfig = ({
    isPitchBlack,
    hasCurrentPitch,
    isRoot,
    playedPitchIndexConfig,

}) => {
    let styleConfig = isPitchBlack ?
        styleConfigPitchBlack :
        styleConfigPitchWhite

    if (hasCurrentPitch) {
        styleConfig = isRoot ?
            styleConfigRootOn :
            styleConfigPitchOn
    }

    // This returns the default if there is no played config.
    return getAnimatedStyleConfig(
        styleConfig,
        playedPitchIndexConfig,
    )
}

export const getBlackKeyPositionStyle = pitchIndex => {
    const
        { pitch } = getPitchConfig(pitchIndex),
        leftWhiteKeysCount =
            // Add white keys in previous octaves.
            Math.floor((pitchIndex - BASE_PITCH_INDEX) / 12) * 7 +
            // Add white keys in this octave.
            Math.floor((modOctave(pitch - LOWEST_PITCH) + 1) / 2) +
            // Add extra white key if needed.
            ((pitch % 2 === LOWEST_PITCH % 2) || pitch < LOWEST_PITCH)
            // Accommodate the way svgs are spaced.
            - 1

    return {
        left: `${leftWhiteKeysCount / WHITE_KEYS_COUNT * 100}%`,
    }
}
