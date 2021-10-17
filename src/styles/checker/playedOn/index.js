/* eslint-disable key-spacing */
import { hsl, getStyleConfig } from '../../../utils/svgs'
import pitches from '../../dominoes/pitches'

export default getStyleConfig(
    'playedOn',
    [
        {
            fill: {
                rightFar:   hsl(240, 73, 47),
                right:      hsl(240, 73, 52),
                leftFar:    hsl(240, 73, 52),
                left:       hsl(240, 73, 57),
                edge:       hsl(240, 73, 82),
                face:       hsl(240, 73, 92),
            },
        },
        pitches,
    ],
)
