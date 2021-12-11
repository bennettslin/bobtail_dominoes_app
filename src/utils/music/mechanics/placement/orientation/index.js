import {
    DIRECTION_X,
    DIRECTION_XY,
    DIRECTION_Y,
} from '../../../../../constants/music/game'

export const getOrientation = placement => {
    // Use direction to signify orientation.
    if (!placement || placement[0][1] === placement[1][1]) {
        return DIRECTION_X
    }
    if (placement[0][0] === placement[1][0]) {
        return DIRECTION_Y
    }
    return DIRECTION_XY
}

export const getIsPlacementUpsideDown = placement => {
    if (!placement) {
        return false
    }

    const orientation = getOrientation(placement)

    if (orientation === DIRECTION_X) {
        return placement[0][0] > placement[1][0]
    } else if (orientation === DIRECTION_Y) {
        return placement[0][1] > placement[1][1]
    } else {
        return (
            placement[0][0] < placement[1][0] &&
            placement[0][1] > placement[1][1]
        )
    }
}
