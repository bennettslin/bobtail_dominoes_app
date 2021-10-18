/* eslint-disable key-spacing */
import { hsl, getStyleConfig } from '../../../utils/svgs'
import pitches from '../../dominoes/pitches'

export default getStyleConfig(
    'rootOn',
    [
        {
            fill: {
                rightFar:   hsl(150, 58, 32),
                right:      hsl(150, 58, 37),
                leftFar:    hsl(150, 58, 37),
                left:       hsl(150, 58, 42),
                edge:       hsl(150, 58, 57),
                face:       hsl(150, 58, 67),
            },
        },
        pitches,
    ],
)
