import faceC from '../../../assets/svgs/dominoes/faceC'
import faceCD from '../../../assets/svgs/dominoes/faceCD'
import faceD from '../../../assets/svgs/dominoes/faceD'
import faceDE from '../../../assets/svgs/dominoes/faceDE'
import faceE from '../../../assets/svgs/dominoes/faceE'
import faceF from '../../../assets/svgs/dominoes/faceF'
import faceFG from '../../../assets/svgs/dominoes/faceFG'
import faceG from '../../../assets/svgs/dominoes/faceG'
import faceGA from '../../../assets/svgs/dominoes/faceGA'
import faceA from '../../../assets/svgs/dominoes/faceA'
import faceAB from '../../../assets/svgs/dominoes/faceAB'
import faceB from '../../../assets/svgs/dominoes/faceB'

const FACES = [faceC, faceCD, faceD, faceDE, faceE, faceF, faceFG, faceG, faceGA, faceA, faceAB, faceB]

export const getFaceSrc = pitch => FACES[pitch]
