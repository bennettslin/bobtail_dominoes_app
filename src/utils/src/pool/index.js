import intervalPool1 from '../../../assets/svgs/dominoes/pool/intervalPool1'
import intervalPool2 from '../../../assets/svgs/dominoes/pool/intervalPool2'
import intervalPool3 from '../../../assets/svgs/dominoes/pool/intervalPool3'
import intervalPool4 from '../../../assets/svgs/dominoes/pool/intervalPool4'
import intervalPool5 from '../../../assets/svgs/dominoes/pool/intervalPool5'
import intervalPool6 from '../../../assets/svgs/dominoes/pool/intervalPool6'

const INTERVALS = [
    intervalPool1,
    intervalPool2,
    intervalPool3,
    intervalPool4,
    intervalPool5,
    intervalPool6,
]

export const getPoolIntervalSrc = ({ interval }) => (
    INTERVALS[interval - 1]
)
