import React from 'react'
import PropTypes from 'prop-types'
import Svg from '../../Svg'
import { getOrientation } from '../../../utils/music/mechanics/placement/orientation'
import { getTileSrc } from '../../../utils/src/tiles'
import styleConfigDominoes from '../../../styles/dominoes'
import styleConfigPitchOn from '../../../styles/arcade/pitchOn'
import { placementPropTypes } from '../../../constants/propTypes'

const DominoTile = ({
    placement,
    isHighlight,
}) => {
    const orientation = getOrientation(placement)

    return (
        <Svg
            {...{
                key: isHighlight, // Fix weird unstyled issue.
                src: getTileSrc(orientation),
                styleConfig: isHighlight ?
                    styleConfigPitchOn :
                    styleConfigDominoes,
            }}
        />
    )
}

DominoTile.propTypes = {
    placement: placementPropTypes,
    isHighlight: PropTypes.bool,
}

export default DominoTile
