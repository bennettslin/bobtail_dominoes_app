import { FACES } from './default'
import { THUMBNAIL_FACES } from './thumbnail'

export const getFaceSrc = ({
    pitch,
    isThumbnail,
}) => (isThumbnail ? THUMBNAIL_FACES : FACES)[pitch]
