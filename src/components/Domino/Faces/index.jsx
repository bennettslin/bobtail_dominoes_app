import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Svg from '../../Svg'
import { getDominoPitches } from '../../../utils/music/mechanics/dominoes'
import {
    getIsPlacementUpsideDown,
    getOrientation,
} from '../../../utils/music/mechanics/placement/orientation'
import { getFacePositionAndSizeStyling } from '../../../utils/music/styling/face'
import { getFaceSrc } from '../../../utils/src/faces'
import styleConfigFacesPitch from '../../../styles/faces/pitch'
import { placementPropTypes } from '../../../constants/propTypes'
import './style'

const DominoFaces = ({
    dominoIndex,
    placement,
    isThumbnail,
}) => {
    const
        pitches = getDominoPitches(dominoIndex),
        orientation = getOrientation(placement)

    return (
        <>
            {(
                getIsPlacementUpsideDown(placement) ?
                    [...pitches].reverse() :
                    pitches
            ).map((pitch, pitchIndex) => (
                <Svg
                    {...{
                        key: pitch,
                        className: cx(
                            'DominoFace',
                        ),
                        src: getFaceSrc({
                            pitch,
                            isThumbnail,
                        }),
                        styleConfig: styleConfigFacesPitch,
                        style: getFacePositionAndSizeStyling({
                            pitchIndex,
                            orientation,
                        }),
                    }}
                />
            ))}
        </>
    )
}

DominoFaces.propTypes = {
    dominoIndex: PropTypes.number.isRequired,
    placement: placementPropTypes,
    isThumbnail: PropTypes.bool,
}

export default DominoFaces
