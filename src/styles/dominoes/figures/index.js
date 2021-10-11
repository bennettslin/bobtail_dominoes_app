/* eslint-disable key-spacing */
import { hsl } from '../../../utils/svgs'

export default {
    stroke: {
        errorLine:  hsl(0, 65, 77),
        firstLine:  hsl(30, 65, 72),
        boardLine:  hsl(45, 50, 82),
        infoLine:   hsl(180, 50, 77),
        secondLine: hsl(300, 50, 77),
        shadowLine: hsl(60, 3, 32, 0.7),
    },
    fill: {
        error:      hsl(0, 65, 77),
        first:      hsl(30, 65, 72),
        board:      hsl(45, 50, 82),
        success:    hsl(150, 70, 72),
        info:       hsl(180, 50, 77),
        second:     hsl(300, 50, 77),
        shadow:     hsl(60, 3, 32, 0.7),
    },
}
