/* eslint-disable key-spacing */
import { hsl, getMergedStyles } from '../../../utils/svgs'
import pitches from '../../dominoes/pitches'

export default {
    className: 'pitchOn',
    styles: getMergedStyles([
        {
            fill: {
                rightFar:   hsl(180, 58, 32),
                right:      hsl(180, 58, 37),
                leftFar:    hsl(180, 58, 37),
                left:       hsl(180, 58, 42),
                edge:       hsl(180, 58, 57),
                face:       hsl(180, 58, 67),
            },
        },
        pitches,
    ]),
}
