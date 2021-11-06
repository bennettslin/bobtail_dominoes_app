import intervalX1 from '../../../../assets/svgs/dominoes/intervalX1'
import intervalX2 from '../../../../assets/svgs/dominoes/intervalX2'
import intervalX3 from '../../../../assets/svgs/dominoes/intervalX3'
import intervalX4 from '../../../../assets/svgs/dominoes/intervalX4'
import intervalX5 from '../../../../assets/svgs/dominoes/intervalX5'
import intervalX6 from '../../../../assets/svgs/dominoes/intervalX6'

const INTERVALS = [
    intervalX1,
    intervalX2,
    intervalX3,
    intervalX4,
    intervalX5,
    intervalX6,
]

export const getIntervalSrc = interval => INTERVALS[interval - 1]
