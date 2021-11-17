/* eslint-disable key-spacing */
import { hsl, getMergedStyles } from '../../../utils/svgs'
import pitches from '../../dominoes/pitches'

export default {
    className: 'pitchBlack',
    styles: getMergedStyles([
        {
            fill: {
                rightFar:   hsl(30, 13, 37),
                right:      hsl(30, 13, 42),
                leftFar:    hsl(30, 13, 42),
                left:       hsl(30, 13, 47),
                edge:       hsl(30, 13, 67),
                face:       hsl(30, 13, 77),
            },
        },
        pitches,
    ]),
}
