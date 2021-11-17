/* eslint-disable key-spacing */
import { hsl, getMergedStyles } from '../../../utils/svgs'
import pitches from '../../dominoes/pitches'

export default {
    className: 'rootOn',
    styles: getMergedStyles([
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
    ]),
}
