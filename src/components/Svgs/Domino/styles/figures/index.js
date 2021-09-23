/* eslint-disable key-spacing */
import { hsl } from '../../../../../utils/svgs'

export default {
    stroke: {
        errorShadowLine:    hsl(0, 65, 22),
        errorLine:          hsl(0, 65, 77),

        firstShadowLine:    hsl(30, 65, 22),
        firstLine:          hsl(30, 65, 72),

        boardShadowLine:    hsl(45, 50, 32),
        boardLine:          hsl(45, 50, 82),

        infoShadowLine:     hsl(180, 50, 22),
        infoLine:           hsl(180, 50, 72),

        secondShadowLine:   hsl(300, 50, 27),
        secondLine:         hsl(300, 50, 77),
    },
    fill: {
        errorShadow:        hsl(0, 65, 27),
        error:              hsl(0, 65, 77),

        firstShadow:        hsl(30, 65, 22),
        first:              hsl(30, 65, 72),

        boardShadow:        hsl(45, 50, 32),
        board:              hsl(45, 50, 82),

        successShadow:      hsl(150, 70, 22),
        success:            hsl(150, 70, 72),

        infoShadow:         hsl(180, 50, 22),
        info:               hsl(180, 50, 72),

        secondShadow:       hsl(300, 50, 27),
        second:             hsl(300, 50, 77),
    },
}
