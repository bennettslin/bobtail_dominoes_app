import { DIRECTION_X, DIRECTION_Y } from '../../../../../constants/music/game'

const
    HEIGHT_BUFFER_PERCENTAGE = 0,
    BASE_WIDTH_UNITS = {
        [true]: 100 / 4, // X.
        [false]: 100 / 3, // Y or XY.
    },
    BASE_HEIGHT_UNITS = {
        [true]: 100 / 2, // X.
        [false]: (100 - HEIGHT_BUFFER_PERCENTAGE) / 3.5, // Y or XY.
    }

export const getFacePositionAndSizeStyling = ({
    pitchIndex,
    orientation,
}) => {
    const
        baseWidthUnit = BASE_WIDTH_UNITS[orientation === DIRECTION_X],
        baseHeightUnit = BASE_HEIGHT_UNITS[orientation === DIRECTION_X]

    let top,
        left

    if (orientation === DIRECTION_X) {
        top = baseHeightUnit
        left = baseWidthUnit * (pitchIndex ? 3 : 1)

    } else {
        if (!pitchIndex) {
            top = baseHeightUnit * 5 / 2
            left = baseWidthUnit * (orientation === DIRECTION_Y ? 1 : 2)
        } else {
            top = baseHeightUnit * 1
            left = baseWidthUnit * (orientation === DIRECTION_Y ? 2 : 1)
        }
    }

    return {
        top: `${top}%`,
        left: `${left}%`,
        width: `${baseWidthUnit * 2}%`,
        height: `${baseHeightUnit * 2}%`,
    }
}
