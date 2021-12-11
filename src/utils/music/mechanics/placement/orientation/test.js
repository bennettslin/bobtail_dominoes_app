import { getIsPlacementUpsideDown, getOrientation } from '.'
import { DIRECTION_X, DIRECTION_XY, DIRECTION_Y } from '../../../../../constants/music/game'

describe('getOrientation', () => {
    test.each([
        [undefined, DIRECTION_X],
        [[[12, 13], [13, 13]], DIRECTION_X],
        [[[12, 13], [11, 13]], DIRECTION_X],
        [[[12, 13], [12, 14]], DIRECTION_Y],
        [[[12, 13], [12, 12]], DIRECTION_Y],
        [[[12, 13], [11, 14]], DIRECTION_XY],
        [[[12, 13], [13, 12]], DIRECTION_XY],
    ])('%p returns %p', (placement, result) => {
        expect(getOrientation(placement)).toStrictEqual(result)
    })
})

describe('getIsPlacementUpsideDown', () => {
    test.each([
        [undefined, false],
        [[[12, 13], [13, 13]], false],
        [[[12, 13], [11, 13]], true],
        [[[12, 13], [12, 14]], false],
        [[[12, 13], [12, 12]], true],
        [[[12, 13], [11, 14]], false],
        [[[12, 13], [13, 12]], true],
    ])('%p returns %p', (placement, result) => {
        expect(getIsPlacementUpsideDown(placement)).toBe(result)
    })
})
