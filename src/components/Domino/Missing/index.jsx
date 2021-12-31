import React from 'react'
import Svg from '../../Svg'
import { getOrientation } from '../../../utils/music/mechanics/placement/orientation'
import { getMissingTileSrc } from '../../../utils/src/tiles'
import styleConfigDominoes from '../../../styles/dominoes'
import { placementPropTypes } from '../../../constants/propTypes'

const DominoMissingTile = ({ placement }) => {
    const orientation = getOrientation(placement)

    return (
        <Svg
            {...{
                src: getMissingTileSrc(orientation),
                styleConfig: styleConfigDominoes,
            }}
        />
    )
}

DominoMissingTile.propTypes = {
    placement: placementPropTypes,
}

export default DominoMissingTile
