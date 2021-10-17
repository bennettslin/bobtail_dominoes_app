/* eslint-disable key-spacing */
import { hsl, getStyleConfig } from '../../../utils/svgs'
import pitches from '../../dominoes/pitches'

export default getStyleConfig(
    'faces',
    [
        {
            fill: {
                audioBottom:   hsl(240, 33, 47),
                audioFace:     hsl(240, 33, 57),
                optionBottom:   hsl(320, 33, 37),
                optionFace:     hsl(320, 33, 47),
                resetBottom:    hsl(0, 33, 37),
                resetFace:      hsl(0, 33, 47),
            },
        },
        pitches,
    ],
)
