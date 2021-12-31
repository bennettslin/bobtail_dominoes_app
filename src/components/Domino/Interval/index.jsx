import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Svg from '../../Svg'
import { getOrderedInterval } from '../../../utils/music/mechanics/dominoes'
import {
    getIsPlacementUpsideDown,
    getOrientation,
} from '../../../utils/music/mechanics/placement/orientation'
import { getIntervalPositionAndSizeStyling } from '../../../utils/music/styling/interval'
import { getIntervalSrc } from '../../../utils/src/intervals'
import styleConfigDominoes from '../../../styles/dominoes'
import { placementPropTypes } from '../../../constants/propTypes'

const DominoInterval = ({
    dominoIndex,
    placement,
}) => {
    const
        orientation = getOrientation(placement),
        orderedInterval = getOrderedInterval(dominoIndex),
        isPlacementUpsideDown = getIsPlacementUpsideDown(placement)

    return (
        <Svg
            {...{
                className: cx(
                    'DominoFace',
                ),
                src: getIntervalSrc({
                    interval: orderedInterval,
                    orientation,
                    isPlacementUpsideDown,
                }),
                styleConfig: styleConfigDominoes,
                style: getIntervalPositionAndSizeStyling(orientation),
            }}
        />
    )
}

DominoInterval.propTypes = {
    dominoIndex: PropTypes.number.isRequired,
    placement: placementPropTypes,
}

export default DominoInterval
