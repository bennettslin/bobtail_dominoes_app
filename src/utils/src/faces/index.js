import faceC from '../../../assets/svgs/dominoes/faces/faceC'
import faceCD from '../../../assets/svgs/dominoes/faces/faceCD'
import faceD from '../../../assets/svgs/dominoes/faces/faceD'
import faceDE from '../../../assets/svgs/dominoes/faces/faceDE'
import faceE from '../../../assets/svgs/dominoes/faces/faceE'
import faceF from '../../../assets/svgs/dominoes/faces/faceF'
import faceFG from '../../../assets/svgs/dominoes/faces/faceFG'
import faceG from '../../../assets/svgs/dominoes/faces/faceG'
import faceGA from '../../../assets/svgs/dominoes/faces/faceGA'
import faceA from '../../../assets/svgs/dominoes/faces/faceA'
import faceAB from '../../../assets/svgs/dominoes/faces/faceAB'
import faceB from '../../../assets/svgs/dominoes/faces/faceB'

const FACES = [faceC, faceCD, faceD, faceDE, faceE, faceF, faceFG, faceG, faceGA, faceA, faceAB, faceB]

export const getFaceSrc = pitch => FACES[pitch]
