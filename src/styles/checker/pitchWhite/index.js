/* eslint-disable key-spacing */
import { hsl, getStyleConfig } from '../../../utils/svgs'
import pitches from '../../dominoes/pitches'

export default getStyleConfig(
    'pitchWhite',
    [
        {
            fill: {
                rightFar:   hsl(30, 23, 47),
                right:      hsl(30, 23, 52),
                leftFar:    hsl(30, 23, 52),
                left:       hsl(30, 23, 57),
                edge:       hsl(30, 23, 82),
                face:       hsl(30, 23, 92),
            },
        },
        pitches,
    ],
)
