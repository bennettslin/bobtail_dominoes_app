import tileX from '../../../assets/svgs/dominoes/tiles/tileX'
import tileY from '../../../assets/svgs/dominoes/tiles/tileY'
import tileXY from '../../../assets/svgs/dominoes/tiles/tileXY'

import missingTileX from '../../../assets/svgs/dominoes/missing/missingTileX'
import missingTileY from '../../../assets/svgs/dominoes/missing/missingTileY'
import missingTileXY from '../../../assets/svgs/dominoes/missing/missingTileXY'

import {
    DIRECTION_X,
    DIRECTION_XY,
    DIRECTION_Y,
} from '../../../constants/music/game'

const TILES = {
    [DIRECTION_X]: tileX,
    [DIRECTION_Y]: tileY,
    [DIRECTION_XY]: tileXY,
}

const MISSING_TILES = {
    [DIRECTION_X]: missingTileX,
    [DIRECTION_Y]: missingTileY,
    [DIRECTION_XY]: missingTileXY,
}

export const getTileSrc = orientation => TILES[orientation]
export const getMissingTileSrc = orientation => MISSING_TILES[orientation]
