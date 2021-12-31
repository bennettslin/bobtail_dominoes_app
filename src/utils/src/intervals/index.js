import { INTERVALS } from './default'
import { OCTAVE_RANGE } from '../../../constants/music/audio'

export const getIntervalSrc = ({
    interval,
    orientation,
    isPlacementUpsideDown,
    isThumbnail,
}) => (
    (isThumbnail ? INTERVALS : INTERVALS)[orientation][(
        isPlacementUpsideDown ?
            OCTAVE_RANGE - interval :
            interval
    ) - 1]
)
