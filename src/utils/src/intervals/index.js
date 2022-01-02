import { OCTAVE_RANGE } from '../../../constants/music/audio'
import { INTERVALS } from './default'
import { THUMBNAIL_INTERVALS } from './thumbnail'

export const getIntervalSrc = ({
    interval,
    orientation,
    isPlacementUpsideDown,
    isThumbnail,
}) => (
    (isThumbnail ? THUMBNAIL_INTERVALS : INTERVALS)[orientation][(
        isPlacementUpsideDown ?
            OCTAVE_RANGE - interval :
            interval
    ) - 1]
)
