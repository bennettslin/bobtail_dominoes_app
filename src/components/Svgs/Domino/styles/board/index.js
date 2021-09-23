/* eslint-disable key-spacing */
import { hsl } from '../../../../../utils/svgs'

export default {
    fill: {
        right:      hsl(40, 0, 27),
        left:       hsl(40, 0, 37),
        edge:       hsl(40, 20, 77),
        face:       hsl(40, 20, 87),

        background: hsl(160, 30, 37),

        edgeNew:    hsl(200, 35, 67),
        faceNew:    hsl(200, 35, 77),

        edgeMoved:  hsl(320, 20, 67),
        faceMoved:  hsl(320, 20, 77),

        // TODO: Delete these styles.
        leftNew:    hsl(40, 0, 37),
        rightNew:   hsl(40, 0, 27),
        leftMoved:  hsl(40, 5, 37),
        rightMoved: hsl(40, 5, 27),
    },
}
