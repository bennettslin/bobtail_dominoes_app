/* eslint-disable key-spacing */
import { hsl, getMergedStyles } from '../../../utils/svgs'
import pitches from '../../dominoes/pitches'

export default {
    className: 'pitchWhite',
    styles: getMergedStyles([
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
    ]),
}
