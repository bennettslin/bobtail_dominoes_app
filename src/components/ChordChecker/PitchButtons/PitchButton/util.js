import { getAnimatedStyleConfig } from '../../../../utils/music/audio/style'
import styleConfigPitchBlack from '../../../../styles/checker/pitchBlack'
import styleConfigPitchOn from '../../../../styles/checker/pitchOn'
import styleConfigPitchWhite from '../../../../styles/checker/pitchWhite'
import styleConfigRootOn from '../../../../styles/checker/rootOn'
import faceC from '../../../../assets/svgs/dominoes/faceC'
import faceCD from '../../../../assets/svgs/dominoes/faceCD'
import faceD from '../../../../assets/svgs/dominoes/faceD'
import faceDE from '../../../../assets/svgs/dominoes/faceDE'
import faceE from '../../../../assets/svgs/dominoes/faceE'
import faceF from '../../../../assets/svgs/dominoes/faceF'
import faceFG from '../../../../assets/svgs/dominoes/faceFG'
import faceG from '../../../../assets/svgs/dominoes/faceG'
import faceGA from '../../../../assets/svgs/dominoes/faceGA'
import faceA from '../../../../assets/svgs/dominoes/faceA'
import faceAB from '../../../../assets/svgs/dominoes/faceAB'
import faceB from '../../../../assets/svgs/dominoes/faceB'
import { mod12 } from '../../../../utils/music/chords/math'

const
    FACES = [faceC, faceCD, faceD, faceDE, faceE, faceF, faceFG, faceG, faceGA, faceA, faceAB, faceB],
    COORDINATES = [0, 6.7, 25, 50, 75, 93.3, 100]

export const getFaceSrc = pitch => FACES[pitch]

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
