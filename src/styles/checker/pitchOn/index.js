/* eslint-disable key-spacing */
import { hsl, getStyleConfig } from '../../../utils/svgs'
import pitches from '../../dominoes/pitches'

export default getStyleConfig(
    'pitchOn',
    [
        {
            fill: {
                rightFar:   hsl(30, 78, 32),
                right:      hsl(30, 78, 37),
                leftFar:    hsl(30, 78, 37),
                left:       hsl(30, 78, 42),
                edge:       hsl(30, 78, 62),
                face:       hsl(30, 78, 72),
            },
        },
        pitches,
    ],
)
