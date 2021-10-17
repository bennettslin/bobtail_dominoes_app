import faceC from '../../../../assets/svgs/chords/faceC'
import faceCD from '../../../../assets/svgs/chords/faceCD'
import faceD from '../../../../assets/svgs/chords/faceD'
import faceDE from '../../../../assets/svgs/chords/faceDE'
import faceE from '../../../../assets/svgs/chords/faceE'
import faceF from '../../../../assets/svgs/chords/faceF'
import faceFG from '../../../../assets/svgs/chords/faceFG'
import faceG from '../../../../assets/svgs/chords/faceG'
import faceGA from '../../../../assets/svgs/chords/faceGA'
import faceA from '../../../../assets/svgs/chords/faceA'
import faceAB from '../../../../assets/svgs/chords/faceAB'
import faceB from '../../../../assets/svgs/chords/faceB'

const
    FACES = [faceC, faceCD, faceD, faceDE, faceE, faceF, faceFG, faceG, faceGA, faceA, faceAB, faceB],
    COORDINATES = [0, 6.7, 25, 50, 75, 93.3, 100]

export const getFaceSrc = pitch => FACES[pitch]

export const getButtonPositionStyle = pitch => ({
    top: `${COORDINATES[6 - Math.abs(6 - pitch)]}%`,
    left: `${COORDINATES[Math.abs(6 - (pitch + 9) % 12)]}%`,
})
