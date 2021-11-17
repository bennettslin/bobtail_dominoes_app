/* eslint-disable key-spacing */
import { hsl, getMergedStyles } from '../../../utils/svgs'
import pitches from '../../dominoes/pitches'

export default {
    className: 'soundedOn',
    styles: getMergedStyles([
        {
            fill: {
                rightFar:   hsl(30, 73, 42),
                right:      hsl(30, 73, 47),
                leftFar:    hsl(30, 73, 47),
                left:       hsl(30, 73, 52),
                edge:       hsl(30, 73, 72),
                face:       hsl(30, 73, 82),
            },
        },
        pitches,
    ]),
}
