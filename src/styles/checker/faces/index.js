/* eslint-disable key-spacing */
import { hsl, getMergedStyles } from '../../../utils/svgs'
import pitches from '../../dominoes/pitches'

export default {
    className: 'faces',
    styles: getMergedStyles([
        {
            fill: {
                audioBottom:   hsl(30, 43, 37),
                audioFace:     hsl(30, 43, 47),
                optionBottom:   hsl(320, 33, 37),
                optionFace:     hsl(320, 33, 47),
                resetBottom:    hsl(0, 33, 37),
                resetFace:      hsl(0, 33, 47),
            },
        },
        pitches,
    ]),
}
