import { getAnimatedStyleConfig } from '../../../../utils/music/audio/style'
import styleConfigPitchBlack from '../../../../styles/checker/pitchBlack'
import styleConfigPitchOn from '../../../../styles/checker/pitchOn'
import styleConfigPitchWhite from '../../../../styles/checker/pitchWhite'
import styleConfigRootOn from '../../../../styles/checker/rootOn'
import { mod12 } from '../../../../utils/music/chords/math'

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
    left: `${COORDINATES[Math.abs(6 - mod12((pitch + 9)))]}%`,
})
