/* eslint-disable key-spacing */
import { hsl, getStyleConfig } from '../../../utils/svgs'

export default getStyleConfig(
    'pitchWhite',
    {
        fill: {
            rightFar:   hsl(30, 23, 32),
            right:      hsl(30, 23, 37),
            leftFar:    hsl(30, 23, 37),
            left:       hsl(30, 23, 42),
            edge:       hsl(30, 23, 62),
            face:       hsl(30, 23, 72),
        },
    },
)
