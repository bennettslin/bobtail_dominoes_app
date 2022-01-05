import { getAnimatedStyleConfig } from '../../../../utils/music/audio/style'
import styleConfigPitchBlack from '../../../../styles/arcade/pitchBlack'
import styleConfigPitchOn from '../../../../styles/arcade/pitchOn'
import styleConfigPitchWhite from '../../../../styles/arcade/pitchWhite'
import styleConfigRootOn from '../../../../styles/arcade/rootOn'
import { modOctave } from '../../../../utils/music/chords/math'

const COORDINATES = [0, 6.7, 25, 50, 75, 93.3, 100]

export const getButtonStyleConfig = isPitchBlack => (
    isPitchBlack ?
        styleConfigPitchBlack :
        styleConfigPitchWhite
)

export const getButtonOnStyleConfig = ({
    isRoot,
    playedPitchConfig,
}) => (
    // This returns the default if there is no played config.
    getAnimatedStyleConfig(
        isRoot ?
            styleConfigRootOn :
            styleConfigPitchOn,
        playedPitchConfig,
    )
)

export const getButtonPositionStyle = pitch => ({
    top: `${COORDINATES[6 - Math.abs(6 - pitch)]}%`,
    left: `${COORDINATES[Math.abs(6 - modOctave((pitch + 9)))]}%`,
})
