/* eslint-disable key-spacing */
import { hsl, getStyleConfig } from '../../../utils/svgs'

export default getStyleConfig(
    'pitchBlack',
    {
        fill: {
            rightFar:   hsl(30, 13, 22),
            right:      hsl(30, 13, 27),
            leftFar:    hsl(30, 13, 27),
            left:       hsl(30, 13, 32),
            edge:       hsl(30, 13, 47),
            face:       hsl(30, 13, 57),
        },
    },
)
